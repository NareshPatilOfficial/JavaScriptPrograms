/**
 * algorithmPrograms/insertionaSort.
 * @module algorithmPrograms/insertionaSort
 */
  /**
  * it will perform merge sort by spliting array using array slice method
  * @param {Array} unsortedArray - array that need to be sorted 
  * @returns {function} doMerging() - recursively calls doMerging() and return the final sorted array
  */
 module.exports.mergeSort = (unsortedArray) => {
    if (unsortedArray.length <= 1) {
        return unsortedArray;
      }
      const middle = Math.floor(unsortedArray.length / 2);
      const left = unsortedArray.slice(0, middle);
      const right = unsortedArray.slice(middle);
      return merge(
        mergeSort(left), mergeSort(right)
      );
  }