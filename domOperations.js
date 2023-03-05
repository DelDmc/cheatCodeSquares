    
const WRONG_INPUT_MESSAGE = "Неверный ввод";

function isNonNegativeNumber(side) {
    return !isNaN(side) && side >= 0;
}

function calculateShapeArea (element, sideA, sideB, areaFunc) {
            element.textContent = isNonNegativeNumber(sideA) && isNonNegativeNumber(sideB)?  
                    areaFunc(sideA, sideB).toFixed(2): 
                    WRONG_INPUT_MESSAGE;
}

function showResultInDomKvadrat(){
    const squareAreaElem = document.getElementById("ploschadKvadrata");
    const squareSide = document.getElementById("dlinaStoroniKvadrata").value;
    calculateShapeArea(squareAreaElem, squareSide, squareSide, calculateSquareArea);
}

function showResultInDomPriamougolnika() {
    const rectangularAreaElem = document.getElementById("ploschadPriamougolnika");
    const rectangularSideA = document.getElementById("pervayaStoronaPriamougolnika").value;
    const rectangularSideB = document.getElementById("drugayaStoronaPriamougolnika").value;
    calculateShapeArea(rectangularAreaElem, rectangularSideA, rectangularSideB, calculateRectangularArea);
}

function showResultInDomParalelograma() {
    const parallelogramAreaElem = document.getElementById("ploschadParalelograma");
    const parallelogramSide = document.getElementById("dlinaStoronyParalelograma").value;
    const parallelogramHeight = document.getElementById("dlinaVisotyParalelograma").value;
    calculateShapeArea(parallelogramAreaElem, parallelogramSide, parallelogramHeight, calculateParallelogramArea);
}

function showResultInDomRomba() {
    const diamondAreaElem = document.getElementById("ploschadRomba");
    const diamondSide = document.getElementById("dlinaStoronyRomba").value;
    const diamondHeight = document.getElementById("dlinaVisotyRomba").value;
    calculateShapeArea(diamondAreaElem, diamondSide, diamondHeight, calculateDiamondArea);
}
