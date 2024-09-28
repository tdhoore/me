export const map = (value, x1, y1, x2, y2) =>
  ((value - x1) * (y2 - x2)) / (y1 - x1) + x2;

export const clamp = (number, min, max) => {
  return Math.max(min, Math.min(number, max));
};

export const zeroPad = (num, places) => String(num).padStart(places, "0");

export const getRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};

export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
