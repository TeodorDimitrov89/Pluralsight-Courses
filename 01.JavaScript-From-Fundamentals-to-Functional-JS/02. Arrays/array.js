//Array is an object and its passed by reference

let arr = [1,2,3];

let newArr = arr;

arr.push(4);
// console.log(newArr);

//If you want a deep copy you can use this;
let x = [1,2,3,4];

// let arr1 = x.slice.call(x);
let arr1 = x.slice();
x.pop();
console.log(x);
console.log(arr1);