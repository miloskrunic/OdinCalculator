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
    let num1 = "";
    let num2
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


buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.value;
        if(value === "="){  
            let splitExpression = result.value.split(/([+\-*/])/);
            let num1 = parseFloat(splitExpression[0]);
            let operator = splitExpression[1];
            let num2 = parseFloat(splitExpression[2]);
            result.value = operate(num1, num2, operator);

        }
        else if(value === "c"){
            num1 = 0;
            num2 = 0;
            operator = "";
            result.value = "";

        }
        else{
            result.value += value;
        }
    });
});