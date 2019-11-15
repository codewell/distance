/**
 * Distance between (x1, y1) and (x2, y2)
 * @param {object} coordinate1 - {x, y}
 * @param {object} coordinate2 - {x, y}
 * @returns {number} - Distance between two points
 */
const distance = (coordinate1, coordinate2) => {
  // Check that we get numbers
  const unwantedTypes = [coordinate1.x, coordinate1.y, coordinate2.x, coordinate2.y]
    .map(c => typeof c)
    .filter(c => c !== 'number');

  if (unwantedTypes.length > 0) {
    const [unwantedType] = unwantedTypes;
    throw new Error(`Expected input to be number. Got ${unwantedType}`);
  } else {
    const dx = coordinate1.x - coordinate2.x;
    const dy = coordinate1.y - coordinate2.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

};

module.exports = distance;
