const prompt = require('prompt-sync')();

const getMessageError = (context) => {
    return `Wrong ${context}, please enter values again!`;
}

const interestCalculation = (value, month, rate) => {

	console.log("Value : " + value);
	console.log("month : " + month);
	console.log("Rate : " + rate);

	const amount = (value * month * rate) / 100;

	console.log(`Amount: ${amount} \n`);
}

const showInterestCalculation = () => {
    const availableMonths = [1,2,3,4,5,6,7,8,9,10,11,12];
    const value = prompt('Enter a initial value: ');
    const month = prompt('Enter a investment time (in months): ');
    const rate = prompt('Enter a interest rate: ');

    if (!Number(month)) {
        console.log(getMessageError('month'));
        return showInterestCalculation();
    }

    if (!availableMonths[month]) {
        console.log(getMessageError('month'));
        return showInterestCalculation();
    }

    if (!parseFloat(value)) {
        console.log(getMessageError('value'));
        return showInterestCalculation();
    }

    if (!parseFloat(rate)) {
        console.log(getMessageError('rate'));
        return showInterestCalculation();
    }

    interestCalculation(parseFloat(value), Number(month), parseFloat(rate));
}

showInterestCalculation();