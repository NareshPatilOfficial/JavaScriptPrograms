/**
 * algorithmPrograms/insertionaSort.
 * @module algorithmPrograms/insertionaSort
 */
/**
 * sort the string using insertion sort methodology
 * @param {String} arr - passed as an parameter in insertionSort() whose sorting need to be done 
 */
exports.insertionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      const el = arr[i]
      let j
  
      for (j = i - 1; j >= 0 && arr[j] > el; j--) {
        arr[j + 1] = arr[j]
      }
      arr[j + 1] = el
    }
    return arr
  }