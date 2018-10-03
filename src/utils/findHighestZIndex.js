/**
 * Taken from https://stackoverflow.com/a/31955334
 */
function findHighestZIndex(elem) {
  let highestZIndex = 0;

  // later, potentially repeatedly
  highestZIndex = Math.max(
    highestZIndex,
    ...Array.from(
      document.querySelectorAll('body *:not([data-highest]):not(.yetHigher)'),
      elem => parseFloat(getComputedStyle(elem).zIndex),
    ).filter(zIndex => !isNaN(zIndex)),
  );

  return highestZIndex;
}

export default findHighestZIndex;
