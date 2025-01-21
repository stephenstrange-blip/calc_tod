import { useReducer, useState } from "react";


function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}
function operate(num1, operator, num2) {
    console.log(`The arguments that were received: ${num1}, ${operator}, ${num2}`);
    try {
        if (operator.trim() === "+") return add(num1, num2)
        else if (operator.trim() === "-") return subtract(num1, num2)
        else if (operator.trim() === "*") return multiply(num1, num2)
        else if (operator.trim() === "/") return divide(num1, num2)
    }
    catch (err) { console.log(err); }
}


function InputNum() {
    const [number1, setNum1] = useState('0');
    const [number2, setNum2] = useState('0');
    const [operator, setOperator] = useState('');
    const [answer, setAnswer] = useState('');

    let computedAnswer = '';
    let num1 = '0';
    let num2 = '0';
    let operation = '';

    const inputOperator = (value) => {
        setOperator(operation => operation = value);
        if (value == '=') {
            console.log(`Equal sign pressed! The passed arguments are ${num1}, ${operator}, ${num2}`)
            setAnswer(computedAnswer => computedAnswer = operate(num1, operator, num2));
        }
        if (value === "clr"){
            setNum1(num1 => '0');
            setNum2(num2 => '0');
            setAnswer(computedAnswer => '');
            setOperator(operation => '');
        }
    }
    const inputNum = (value) => {
        console.log(`value: ${value}`);
        console.log(`num1 and num2 before concat: ${num1} ${num2}`)
        console.log(`operator is ${!operation ? "no value yet" : operation}`)
        console.log(`computed answer is ${!computedAnswer ? "no value yet" : computedAnswer}`)
        //https://dmitripavlutin.com/react-hooks-stale-closures/
        //Functional way of updating num1 to avoid state closure
        // setNum(num1 => num1.concat(value))
        if (!operator) {
            setNum1(num1 => num1.concat(value))
        }
        else setNum2(num2 => num2.concat(value))

        
    }

    num1 = number1;
    num2 = number2;
    // console.log(num1, operator, num2, answer)
    operation = operator;
    computedAnswer = answer;

    return [number1, number2, inputNum, operator, inputOperator, answer];

}



export default InputNum

