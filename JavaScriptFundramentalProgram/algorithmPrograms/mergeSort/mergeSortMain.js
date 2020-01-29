/******************************************************************************
 *  Execution       : 1. default node         cmd> node mergeSortMain.js              
 *  @description    : Write a program to do Merge Sort of list of Strings.
 *  @file           : mergeSortMain.js
 *  @overview       : To Merge Sort an array, we divide it into two halves, 
 *                    sort the two halves independently, and then merge the results to sort the full array.
 *                    To sort a[lo, hi), we use the following recursive strategy:
                      a. Base case: If the subarray length is 0 or 1, it is already sorted.
                      b. Reduction step: Otherwise, compute mid = lo + (hi - lo) / 2, 
                        recursively sort the two subarrays a[lo, mid) and a[mid, hi), 
                        and merge them to produce a sorted result.
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Naresh Patil <nareshpatil.nrp@gmail.com>
 *  @version        : 1.0
 *  @since          : 29-01-2020
 ******************************************************************************/
const readline = require('readline-sync');
const library = require('./mergeSortBL');
try {
  const sample = readline.question('enter the strings to be sorted ')
  let unsortedArr = sample.split(' '); //split the given sentence into array of words
  console.log('The sorted array is ')
  console.log(library.mergeSort(unsortedArr))
} catch (err) {
  console.log(err);
}