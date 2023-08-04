const prompt = require('prompt-sync')();

const showTable = () => {
    const number = prompt('Please enter a number: ');

    if (Number(number)) {
        for(let i = 1; i <= 10; i++) {
            const result = i * number;

            console.log(`${number} * ${i} = ${result}`);
        }
    } else {
        console.log("Is not a number, Please enter a number!");
        showTable();
    }
}

showTable();