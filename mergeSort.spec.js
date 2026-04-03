const { merge, merge2, mergeSort } = require('./merge-sort');

describe('Test the merge that receives two arrays', () => {
    test('Test for interleaved values.', () => {
        const arr1 = [1, 3, 5];
        const arr2 = [2, 4, 6];
        expect(merge(arr1, arr2)).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('Tests for an entire array before the other.', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [4, 5, 6];
        expect(merge(arr1, arr2)).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('Tests for repeated numbers.', () => {
        const arr1 = [1, 2, 2, 5];
        const arr2 = [2, 3, 4];
        expect(merge(arr1, arr2)).toEqual([1, 2, 2, 2, 3, 4, 5]);
    });

    test('Tests with an empty array.', () => {
        const arr1 = [];
        const arr2 = [1, 2, 3];
        expect(merge(arr1, arr2)).toEqual([1, 2, 3]);
    });
});

describe('Test the merge that receives one array and the positions', () => {
    test('Test for interleaved values.', () => {
        const start = 0;
        const middle = 2;
        const end = 5;
        const arr = [1, 3, 5, 2, 4, 6];
        expect(merge2(arr, start, middle, end)).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('Tests for reversed order.', () => {
        const start = 0;
        const middle = 2;
        const end = 5;
        const arr = [4, 5, 6, 1, 2, 3];
        expect(merge2(arr, start, middle, end)).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('Tests for repeated numbers.', () => {
        const start = 0;
        const middle = 3;
        const end = 6;
        const arr = [1, 2, 2, 5, 2, 3, 4];
        expect(merge2(arr, start, middle, end)).toEqual([1, 2, 2, 2, 3, 4, 5]);
    });

    test('Tests the array is the side.', () => {
        const start = 0;
        const middle = 2;
        const end = 2;
        const arr = [1, 2, 3, 4];
        expect(merge2(arr, start, middle, end)).toEqual([1, 2, 3]);
    });
});

describe('Test the Merge Sort algorithm', () => {
    test('Test for random numbers.', () => {
        const arr = [5, 2, 4, 1, 3];
        mergeSort(arr, 0, arr.length - 1);
        expect(arr).toEqual([1, 2, 3, 4, 5]);
    });

    test('Tests for already ordered array.', () => {
        const arr = [1, 2, 3, 4, 5];
        mergeSort(arr, 0, arr.length - 1);
        expect(arr).toEqual([1, 2, 3, 4, 5]);
    });

    test('Tests for reversed ordered array.', () => {
        const arr = [5, 4, 3, 2, 1];
        mergeSort(arr, 0, arr.length - 1);
        expect(arr).toEqual([1, 2, 3, 4, 5]);
    });

    test('Tests with negative numbers.', () => {
        const arr = [3, -1, 2, -1, 5, 0];
        mergeSort(arr, 0, arr.length - 1);
        expect(arr).toEqual([-1, -1, 0, 2, 3, 5]);
    });
});