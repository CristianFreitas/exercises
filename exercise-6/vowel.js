const prompt = require('prompt-sync')();

const countVowel = (str) => {
    const result = str.match(/[aeiou]/gi);

    return result ? result.length : 0;
}

const showVowels = () => {
    const str = prompt('Enter a string: ');

    console.log(`Number of vowels is ${countVowel(str)}`);
}

showVowels();