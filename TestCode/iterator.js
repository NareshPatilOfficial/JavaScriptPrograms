
let arr = [1,5,9,7];

let itr = arr[Symbol.iterator]();



for(let n of itr){
    console.log(n);
}