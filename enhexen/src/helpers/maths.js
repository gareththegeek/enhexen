export const randomInteger = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

export const round1 = (value) => Math.round(value * 10) / 10
