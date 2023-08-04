const prompt = require('prompt-sync')();

const showGradeAverage = () => {
    let grades = []
    let sum = 0;
    for (let i = 1; i <= 3; i++) {
        const grade = prompt(`Enter a grade ${i}/3: `);
        if (!Number(grade)) continue;
        sum += Number(grade);
        grades.push(grade);
    }
    if (grades.length != 3) {
        console.log('Please enter a three grades.');
        showGradeAverage();
    } else {
        console.log(Math.round(sum / grades.length));
    }
}

showGradeAverage();