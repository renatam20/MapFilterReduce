// var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// function double(x) {
//   return x * 2;
// }
// const newNumbers = numbers.map(double);

// --------forEach Way--------

// var newNumbers = [];
// numbers.forEach(function (x){
//   newNumbers.push(x * 2);
// });

// -------MAP way ---------
// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });
// console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.

// -------short way ---------
// const newNumbers = numbers.filter(function (num){
//   return num > 10
// });

// --------forEach Way--------
// var newNumbers = [];
// numbers.forEach(function (num){
//   if(num > 10) {
//     newNumbers.push(num);
//   }
// });
// console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.

// var numbers = [3, 56, 2, 48, 5];

// --------forEach Way--------
// var newNumber = 0;
// numbers.forEach(function (currentNumber) {
//   newNumber += currentNumber
// });

// -------short way ---------
// var newNumber = numbers.reduce(function (accumulator, currentNumber){
//   console.log("accumulator = " +  accumulator);
//   console.log("currentNumber = " + currentNumber);
//   return accumulator + currentNumber;
// })

// console.log(newNumber);

//Find - find the first item that matches from an array.

// -------short way ---------

// const newNumber = numbers.find(function (num) {
//   return num > 10;
// });

// console.log(newNumber);

//FindIndex - find the index of the first item that matches.

// -------short way ---------

// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// });

// console.log(newNumber);

// ------CHALLENGE------

import emojipedia from "./emojipedia";

const emojiMeaning = emojipedia.map(function (x) {
  return x.meaning.substring(0, 100);
});

console.log(emojiMeaning);
