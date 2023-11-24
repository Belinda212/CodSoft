var display = document.getElementById('display');
var equation = '';

function appendNumber(number) {
equation += number;
display.value = equation;
}

function appendOperator(operator) {
equation += operator;
display.value = equation;
}

function calculateResult() {
try {
    var result = eval(equation);
    equation = result;
    display.value = equation;
} catch(e) {
    alert('Invalid expression');
    equation = '';
    display.value = equation;
}
}