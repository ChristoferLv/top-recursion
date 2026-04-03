/**
 * 
 * @param {Array} arr1 
 * @param {Array} arr2 
 */
function merge(arr1, arr2) {
    const arr1Length = arr1.length;
    const arr2Length = arr2.length;
    let arr1Idx = 0;
    let arr2Idx = 0;
    const result = [];
    while (arr1Idx < arr1Length && arr2Idx < arr2Length) {
        if (arr1[arr1Idx] < arr2[arr2Idx]) {
            result.push(arr1[arr1Idx]);
            arr1Idx++;
        } else {
            result.push(arr2[arr2Idx]);
            arr2Idx++;
        }
    }
    for (; arr1Idx < arr1Length; arr1Idx++) {
        result.push(arr1[arr1Idx]);
    }
    for (; arr2Idx < arr2Length; arr2Idx++) {
        result.push(arr2[arr2Idx]);
    }
    return result;
}

// arra = [1, 4, 6, 7, 8];
// arrb = [2, 3, 4, 5, 9, 10, 11, 12];
// console.log(merge(arra, arrb));




/**
 * 
 * @param {Array} arr 
 * @param {number} start 
 * @param {number} middle 
 * @param {number} end 
 * @returns 
 */
function merge2(arr, start, middle, end) {
    let arr1Idx = start;
    let arr2Idx = middle + 1;
    const result = [];
    while (arr1Idx <= middle && arr2Idx <= end) {
        if (arr[arr1Idx] < arr[arr2Idx]) {
            result.push(arr[arr1Idx]);
            arr1Idx++;
        } else {
            result.push(arr[arr2Idx]);
            arr2Idx++;
        }
    }
    for (; arr1Idx <= middle; arr1Idx++) {
        result.push(arr[arr1Idx]);
    }
    for (; arr2Idx <= end; arr2Idx++) {
        result.push(arr[arr2Idx]);
    }
    return result;
}

// arrb = [3, 4, 1, 2, 3];
// console.log(merge2(arrb, 0, 1, 4));




/**
 * 
 * @param {Array} arr 
 * @param {number} start 
 * @param {number} end 
 */
function mergeSort(arr, start, end) {
    if (start < end) {
        const middle = Math.trunc(start + (end - start) / 2);
        mergeSort(arr, start, middle);
        mergeSort(arr, middle + 1, end);

        //Merge passando a prória array e os pontos
        const merged = merge2(arr, start, middle, end);

        //Merge do tipo que passa duas arrays
        // const merged = merge(arr.slice(start, middle + 1), arr.slice(middle + 1, end + 1));

        arr.splice(start, (end - start + 1), ...merged);
    }
}

module.exports = { merge, merge2, mergeSort };

// const arrU = [1, 2, 0, 0, 5, 3, 4, -1, -2]
// mergeSort(arrU, 0, arrU.length - 1);
// console.log(arrU)



