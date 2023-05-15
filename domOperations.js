
/**
 * Error message for wrong input.
 * @constant {string}
 */
const WRONG_INPUT_MESSAGE = 'Неверный ввод'

/**
 * Checks if a given side is a non-negative number.
 * @param {number} side - The value of the side to check.
 * @returns {boolean} - Indicates whether the side is a non-negative number.
 */
function isNonNegativeNumber (side) {
  return !isNaN(side) && side >= 0
}

/**
 * Calculates the area of a shape and updates the specified DOM element with the result.
 * @param {HTMLElement} element - The DOM element to display the calculated area.
 * @param {number} sideA - The value of the first side of the shape.
 * @param {number} sideB - The value of the second side of the shape.
 * @param {Function} areaFunc - The function to calculate the area of the shape.
 * @returns {void}
 */
function calculateShapeArea (element, sideA, sideB, areaFunc) {
  element.textContent = isNonNegativeNumber(sideA) && isNonNegativeNumber(sideB)
    ? areaFunc(sideA, sideB).toFixed(2)
    : WRONG_INPUT_MESSAGE
}

/**
 * Calculates and displays the area of a square in the DOM.
 * @returns {void}
 */
function showResultInDomKvadrat () {
  const squareAreaElem = document.getElementById('ploschadKvadrata')
  const squareSide = document.getElementById('dlinaStoroniKvadrata').value
  calculateShapeArea(squareAreaElem, squareSide, squareSide, calculateSquareArea)
}

/**
 * Calculates and displays the area of a rectangle in the DOM.
 * @returns {void}
 */
function showResultInDomPriamougolnika () {
  const rectangularAreaElem = document.getElementById('ploschadPriamougolnika')
  const rectangularSideA = document.getElementById('pervayaStoronaPriamougolnika').value
  const rectangularSideB = document.getElementById('drugayaStoronaPriamougolnika').value
  calculateShapeArea(rectangularAreaElem, rectangularSideA, rectangularSideB, calculateRectangularArea)
}

/**
 * Calculates and displays the area of a parallelogram in the DOM.
 * @returns {void}
 */
function showResultInDomParalelograma () {
  const parallelogramAreaElem = document.getElementById('ploschadParalelograma')
  const parallelogramSide = document.getElementById('dlinaStoronyParalelograma').value
  const parallelogramHeight = document.getElementById('dlinaVisotyParalelograma').value
  calculateShapeArea(parallelogramAreaElem, parallelogramSide, parallelogramHeight, calculateParallelogramArea)
}

/**
 * Calculates and displays the area of a diamond in the DOM.
 * @returns {void}
 */
function showResultInDomRomba () {
  const diamondAreaElem = document.getElementById('ploschadRomba')
  const diamondSide = document.getElementById('dlinaStoronyRomba').value
  const diamondHeight = document.getElementById('dlinaVisotyRomba').value
  calculateShapeArea(diamondAreaElem, diamondSide, diamondHeight, calculateDiamondArea)
}
