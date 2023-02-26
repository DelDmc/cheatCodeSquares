    
const WRONG_INPUT_MESSAGE = "Неверный ввод";

function isNonNegativeNumber(side) {
    return !isNaN(side) && side >= 0
}

function showResultInDomKvadrat(){
    const squareSide = document.getElementById("dlinaStoroniKvadrata").value;

    document.getElementById("ploschadKvadrata")
            .textContent = isNonNegativeNumber(squareSide)
            ? multiplyTwoValues(squareSide, squareSide).toFixed(2)
            : WRONG_INPUT_MESSAGE;
}

function showResultInDomPriamougolnika() {
    const rectangularSideA = document.getElementById("pervayaStoronaPriamougolnika").value;
    const rectangularSideB = document.getElementById("drugayaStoronaPriamougolnika").value;

    document.getElementById("ploschadPriamougolnika")
            .textContent = isNonNegativeNumber(rectangularSideA) && isNonNegativeNumber(rectangularSideB)
            ? multiplyTwoValues(rectangularSideA, rectangularSideB).toFixed(2)
            : WRONG_INPUT_MESSAGE;

}

function showResultInDomParalelograma() {
    const parallelogramSide = document.getElementById("dlinaStoronyParalelograma").value;
    const parallelogramHeight = document.getElementById("dlinaVisotyParalelograma").value;

    document.getElementById("ploschadParalelograma")
            .textContent = isNonNegativeNumber(parallelogramSide) && isNonNegativeNumber(parallelogramHeight)
            ? multiplyTwoValues(parallelogramSide, parallelogramHeight).toFixed(2)
            : WRONG_INPUT_MESSAGE;
}

function showResultInDomRomba() {
    const diamondSide = document.getElementById("dlinaStoronyRomba").value;
    const diamondHeight = document.getElementById("dlinaVisotyRomba").value;

    document.getElementById("ploschadRomba")
            .textContent = isNonNegativeNumber(diamondSide) && isNonNegativeNumber(diamondHeight)
            ? multiplyTwoValues(diamondSide, diamondHeight).toFixed(2)
            : WRONG_INPUT_MESSAGE;

}
