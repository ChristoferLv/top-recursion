const {fibs,fibsRec} = require('./fibonacci');

describe('Test fibonacci iterative version', () => {
    test('Gets the first number of fibonacci sequence', () => {
        expect(fibs(1)).toEqual([0]);
    });

    test('Gets the sequence for two numbers', () => {
        expect(fibs(2)).toEqual([0, 1]);
    });

    test('Gets the sequence for three numbers', () => {
        expect(fibs(3)).toEqual([0, 1, 1]);
    });

    test('Gets the sequence for eight numbers', () => {
        expect(fibs(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    });
});

describe('Test fibonacci recursive version', () => {
    test('Gets the first number of fibonacci sequence', () => {
        expect(fibsRec(1)).toEqual([0]);
    });

    test('Gets the sequence for two numbers', () => {
        expect(fibsRec(2)).toEqual([0, 1]);
    });

    test('Gets the sequence for three numbers', () => {
        expect(fibsRec(3)).toEqual([0, 1, 1]);
    });

    test('Gets the sequence for eight numbers', () => {
        expect(fibsRec(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    });
});
