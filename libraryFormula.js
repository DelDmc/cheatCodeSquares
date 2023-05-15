/**
 * Calculates the area of a square.
 * @param {number} side - The length of the side of the square.
 * @returns {number} - The area of the square.
 */
function calculateSquareArea (side) {
  return multiplyTwoSides(side, side)
}

/**
   * Calculates the area of a rectangle.
   * @param {number} sideA - The length of one side of the rectangle.
   * @param {number} sideB - The length of the other side of the rectangle.
   * @returns {number} - The area of the rectangle.
   */
function calculateRectangularArea (sideA, sideB) {
  return multiplyTwoSides(sideA, sideB)
}

/**
   * Calculates the area of a parallelogram.
   * @param {number} sideA - The length of the base of the parallelogram.
   * @param {number} height - The height of the parallelogram.
   * @returns {number} - The area of the parallelogram.
   */
function calculateParallelogramArea (sideA, height) {
  return multiplyTwoSides(sideA, height)
}

/**
   * Calculates the area of a diamond.
   * @param {number} sideA - The length of one side of the diamond.
   * @param {number} height - The height of the diamond.
   * @returns {number} - The area of the diamond.
   */
function calculateDiamondArea (sideA, height) {
  return multiplyTwoSides(sideA, height)
}

/**
   * Multiplies two sides to calculate the area of a shape.
   * @param {number} sideA - The length of one side.
   * @param {number} sideB - The length of the other side.
   * @returns {number} - The calculated area.
   */
function multiplyTwoSides (sideA, sideB) {
  return sideA * sideB
}
