let num1 = 0;
let num2 = 0;


function add(a,b) {
	return a + b;
};

function subtract(a,b) {
	return a - b;
};

function multiply(a,b){
    return a * b;
};

function divide(a,b){
    if (b === 0) {
        return "Error: Division by zero!";
    }
    return a / b;
};

function operate(firstNumber, secondNumber, operator){
    isOperatorPressed = false;
    lastOperator = operator;
    switch(operator){
        case "+": 
            return add(firstNumber,secondNumber);
        case "-": 
            return subtract(firstNumber,secondNumber);
        case "*": 
            return multiply(firstNumber,secondNumber);
        case "/": 
            return divide(firstNumber,secondNumber);
        default:
            alert("Operator not valid!");
    };
};



const buttons = document.querySelectorAll('input[type="button"]');
const result = document.getElementById('result');

let operator = "";
let isOperatorPressed = false;
let lastOperator = "";
let currentOperator = "";


buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.value;
        if(value === "="){  
            let splitExpression = result.value.split(/([+\-*/])/);
            let operator = splitExpression[1];
            num1 = parseFloat(splitExpression[0]) || num1;  // Ako je NaN, ostavi prethodnu vrednost
            num2 = parseFloat(splitExpression[2]) || 0;     // Ako nema unosa, postavi na 0
            
            console.log(num1, num2, lastOperator, currentOperator, result.value, "ovo se ispisuje posle splita");
            result.value = operate(num1, num2, operator);
            num1 = parseFloat(result.value);


        }
        else if(value === "c"){
            num1 = 0;
            num2 = 0;
            operator = "";
            result.value = "";
            isOperatorPressed = false;
        }
        else if (value === "+" || value === "-" || value === "*" || value === "/") {

            if (isOperatorPressed){
                let splitExpression = result.value.split(/([+\-*/])/);
                num1 = parseFloat(splitExpression[0]);
                num2 = parseFloat(splitExpression[2]);
                console.log(num1, num2, lastOperator, currentOperator, result.value, "ovo se ispisuje posle 2 pritiska operatora");
                result.value = operate(num1, num2, lastOperator);
                num1 = parseFloat(result.value);
                num2 = 0; 
            }
            result.value += value;
            currentOperator = value;
            lastOperator = currentOperator;
            isOperatorPressed = true;

            }
        else{
            result.value += value;
            console.log(num1, num2, lastOperator, currentOperator, result.value, "ovo se ispisuje posle pritiskanja broja");
        }
    });
});