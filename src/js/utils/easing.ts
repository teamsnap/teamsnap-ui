/**
 * Emulate CSS's native transition timing functions.
 *
 *
 * https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function
 * https://easings.net/
 */
const Easing = {
  linear: (t) => t,
  easeIn: (x: number) => x * x * x,
  easeOut: (x: number) => 1 - (1 - x ** 3),
  easeInOut: (x: number) => (x < 0.5 ? 4 * x * x * x : 1 - (-2 * x + 2) ** 3 / 2),
};

export { Easing };
