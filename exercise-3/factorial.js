const prompt = require('prompt-sync')();

const fact = (number) => {
    let result = 1;
    for (let i = 2; i <= number; i++)
        result = result * i;
    return result;
}

const showFactorial = () => {
    const number = prompt('Enter a number: ');
    if (Number(number)) {
        console.log(fact(Number(number)));
    } else {
        console.log("Is not a number, Please enter a number!");
        showFactorial();
    }
}

showFactorial();