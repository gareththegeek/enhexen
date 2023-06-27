/**
 * rumour controller
 */

import { factories } from "@strapi/strapi";
import {
  map,
  mergeLeft,
  prop,
  reduceWhile,
  sum,
} from "ramda";

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

const withDistance = (reference: string) => (adventure: Adventure) =>
  mergeLeft(
    { distance: getDistance(adventure.hex.reference, reference) },
    adventure
  );

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

type AdventureWithDistance = Adventure & { distance: number };

interface Candidate {
  count: number;
  adventure?: AdventureWithDistance;
}

const getRandomRumourForAdventure = (adventure: Adventure) =>
  adventure.rumours[randomInteger(0, adventure.rumours.length - 1)];

const createGetRumour =
  (withDistances: AdventureWithDistance[], total: number) => () => {
    const random = randomInteger(0, total - 1);
    const chosenAdventure = reduceWhile(
      (x) => x.count <= random,
      (a, c) => ({
        count: a.count + c.distance,
        adventure: c,
      }),
      { count: 0 } as Candidate,
      withDistances
    );
    return getRandomRumourForAdventure(chosenAdventure.adventure!);
  };

const buildRumourTable = (
  adventures: Adventure[],
  reference: string,
  tableSize = 8
): Rumour[] => {
  const withDistances = map(withDistance(reference), adventures);
  const total = sum(map(prop("distance"), withDistances));
  const getRumour = createGetRumour(withDistances, total);
  let i = 0;
  const results: Rumour[] = [];
  while (i++ < tableSize) {
    results.push(getRumour());
  }
  return results;
};

const getAdventuresWithRumours = async () => {
  const { results: adventures } = await strapi.services[
    "api::adventure.adventure"
  ].find({
    populate: ["rumours", "hex"],
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

      return { data: rumourTable };
    },
  })
);
