const prompt = require('prompt-sync')();

const isPalindrome = (str) => {
    const cleanString = str.replace(/[^a-zA-Z0-9]+/gi, '').toLowerCase();
    const cleanStringRevers = cleanString.split("").reverse().join("");

    return cleanString === cleanStringRevers;
}

const showPalindrome = () => {
    const str = prompt('Please enter potential palindrome: ');

    if (isPalindrome(str)) {
        console.log(`${str} is a palindrome!`);
    } else {
        console.log('Try again!')
        showPalindrome();
    }
}

showPalindrome();