/**
 * Emulate CSS's native transition timing functions.
 *
 * https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function
 * https://easings.net/
 */
import BezierEasing from 'bezier-easing';

const Easing = {
  linear: (t) => t,
  ease: BezierEasing(0.25, 0.1, 0.25, 1.0),
  easeIn: BezierEasing(0.42, 0, 1.0, 1.0),
  easeOut: BezierEasing(0, 0, 0.58, 1.0),
  easeInOut: BezierEasing(0.42, 0, 0.58, 1.0),
};

export { Easing };
