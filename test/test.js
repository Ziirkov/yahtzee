const yahtzee = require('./yahtzee');

var assert = require('assert');

describe('Dices', function () {

    describe('Return Random number', function () {
        it('should return random number between 1 and 6', function () {
            var result = yahtzee.throwDice();
            assert.equal(true, result >= 1 && result <= 6);
        });
    });

});

describe('Combinations', function () {

    describe('Return five numbers in array', function () {
        it('should return an array with 5 values ', function () {
            var result = yahtzee.throwDiceArrayLength();
            assert.equal(result.length, 5);
        });
    });

    describe('Return the additions of twos', function () {
        it('should return score by number ', function () {
            var result = yahtzee.throwDiceGetAsManyAsPossible();
            assert.equal(result, 4);
        });
    });

    describe('Count and addition the most found number in array', function () {
        it('should return score by number ', function () {
            var result = yahtzee.arrToInstanceCountObj();
            assert.equal(result, { '2': 6, '3': 3, '4': 4 });
        });
    });


});