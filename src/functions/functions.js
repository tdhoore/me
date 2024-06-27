export const map = (value, x1, y1, x2, y2) =>
  ((value - x1) * (y2 - x2)) / (y1 - x1) + x2;

export const clamp = (number, min, max) => {
  return Math.max(min, Math.min(number, max));
};
