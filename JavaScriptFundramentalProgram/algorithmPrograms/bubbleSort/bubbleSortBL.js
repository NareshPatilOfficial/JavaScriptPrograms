/**
 * algorithmPrograms/insertionaSort.
 * @module algorithmPrograms/insertionaSort
 */
/**
 * @module - Do sorting of numbers using bubble sort methodology
 * @param {Array} arr1 - passed as a parameter in the doBubbleSort()
 * @returns {Array} arr1- holds the final sorted values
 */
exports.doBubbleSort = (arr1) => {
    let temp = null
    for (i = 0; i <= arr1.length; i++) {
        for (let j = 0; j < arr1.length - i; j++) {
            if (arr1[j] > arr1[j + 1]) {
                temp = arr1[j]
                arr1[j] = arr1[j + 1]
                arr1[j + 1] = temp
            }
        }
    }
    return arr1;
}