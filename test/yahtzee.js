function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
let throwDice = () => {
    return getRandomArbitrary(1, 6);
}

let throwDiceArrayLength = () => {

    let numbers = [2, 2, 3, 5, 6];

    return numbers;
}

let throwDiceGetAsManyAsPossible = () => {

    let numbers = [2, 2, 3, 5, 6];

    result = numbers[0] + numbers[1];

    return result;
}

const arrToInstanceCountObj = arr => arr.reduce((obj, e) => {

    obj[e] = (obj[e] || 0) + e;

    return obj;

}, {});

const yahtzee = { throwDice, throwDiceGetAsManyAsPossible, throwDiceArrayLength, arrToInstanceCountObj };

module.exports = yahtzee;