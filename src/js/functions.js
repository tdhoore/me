export function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

export const map = (value, x1, y1, x2, y2) =>
  ((value - x1) * (y2 - x2)) / (y1 - x1) + x2;

export const addLeadingZero = (number) => {

  if (number < 10) {
    return `0${number}`
  }

  return number;
}