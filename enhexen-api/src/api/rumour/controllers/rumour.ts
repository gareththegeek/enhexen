/**
 * rumour controller
 */

import { factories } from "@strapi/strapi";
import { head, map, mergeLeft, pipe, pluck, sort, take } from "ramda";

interface Rumour {
  id: number;
  roll: string;
  text: string;
  done: boolean;
}

interface Adventure {
  hex: {
    reference: string;
  };
  rumours: Rumour[];
}

const parseReference = (reference) => {
  const parts = reference.split(".");
  if (parts.length !== 2) {
    return undefined;
  }
  if (parts.some((x) => isNaN(x))) {
    return undefined;
  }
  return {
    x: parseInt(parts[0]),
    y: parseInt(parts[1]),
  };
};

const getDistance = (referenceA: string, referenceB: string) => {
  const a = parseReference(referenceA);
  const b = parseReference(referenceB);
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
};

type AdventureWithDistance = Adventure & { distance: number };

const withDistance =
  (reference: string) =>
  (adventure: Adventure): AdventureWithDistance =>
    mergeLeft(
      { distance: getDistance(adventure.hex.reference, reference) },
      adventure
    );

const randomInteger = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const takeRandom = (rumours: Rumour[]): Rumour =>
  rumours[randomInteger(0, rumours.length - 1)];

const buildRumourTable = (
  adventures: Adventure[],
  reference: string,
  tableSize = 8
): Rumour[] => {
  return pipe(
    map(withDistance(reference)),
    sort((a: AdventureWithDistance, b) => a.distance - b.distance),
    take(tableSize),
    pluck("rumours"),
    map(takeRandom)
  )(adventures);
};

const getAdventuresWithRumours = async () => {
  const { results: adventures } = await strapi.services[
    "api::adventure.adventure"
  ].find({
    populate: ["rumours", "hex", "rumours.adventure"],
    filters: {
      done: false,
      rumours: {
        done: false,
      },
    },
    pagination: {
      start: 0,
      limit: 1000000,
    },
  });

  return adventures;
};

export default factories.createCoreController(
  "api::rumour.rumour",
  ({ strapi }) => ({
    async find(ctx) {
      const { reference, tableSize } = ctx.query;
      if (!reference) {
        return await super.find(ctx);
      }

      const adventures = await getAdventuresWithRumours();
      const rumourTable = buildRumourTable(adventures, reference, tableSize);
      const sanitised = await this.sanitizeOutput(rumourTable, ctx);

      return this.transformResponse(sanitised);
    },
  })
);
