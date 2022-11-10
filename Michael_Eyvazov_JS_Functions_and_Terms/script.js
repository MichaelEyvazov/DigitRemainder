function digitFunc() {
    let firstNum = prompt('Please enter first number');
    let secondNum = prompt('Please enter second number');
    let resultDigitTwoNumber = firstNum%secondNum;
    if (resultDigitTwoNumber != 0){
        alert('יש שארית')
    } else {
        alert('אין שארית');
    }
}