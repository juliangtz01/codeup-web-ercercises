"use strict";

let arrayOfNames = ['Julian', 'Anthony', 'Mia', 'Juan', 'Amida'];

for(let i of arrayOfNames)
{
    // console.log(i);
}

let test = [
    {car: "ford", animal: 'bear'},
    {car: "dodge", animal: 'cat'},
    {car: "chevy", animal: 'dog'}
]

for(let list of test)
{
    // if(list.car === 'dodge')
    // console.log(list)
}


//Map and Filter

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var evens = [];
// for (var i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//         evens.push(numbers[i]);
//     }
// }
// console.log(evens); // [2, 4, 6, 8, 10]


//using filter method
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// var evens = numbers.filter(function(n) {
//     return n % 2 === 0;
// });
// console.log(evens); // [2, 4, 6, 8, 10]
//
// //using the map method
// var incremented = numbers.map(function(n) {
//     return n + 1;
// });
// console.log(incremented); // [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// //writing the above code using es6 syntax
// console.log('\n');
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// const evens = numbers.filter(n => n % 2 === 0);
// console.log(evens); // [2, 4, 6, 8, 10]
//
// const incremented = numbers.map(n => n + 1);
// console.log(incremented); // [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]


//using reduce method

// const numbers = [1, 2, 3, 4, 5];
//
// const sum = numbers.reduce((accumulation, currentNumber) => {
//     // console.log(accumulation);
//     // console.log(currentNumber);
//     return accumulation + currentNumber;
// }, 0);
//
// console.log(sum);


// const salesPeople = [
//     {name: 'Jim Halpert', sales: 100},
//     {name: 'Dwight Schrute', sales: 50},
//     {name: 'Andy Bernard', sales: 150},
// ];
//
// const totalSales = salesPeople.reduce((total, person) => {
//     // console.log(total);
//     return total + person.sales;
// }, 0);
//
// console.log(totalSales);


function countWords(sentence) {
    const words = sentence.split(' '); // transform a sentence into an array of words
    const wordCountObject = words.reduce((wordCounts, word) => {
        if (typeof wordCounts[word] === 'undefined') {
            // if the word is not yet present in our object, set it's value to 1
            wordCounts[word] = 1;
        } else {
            // otherwise increment the existing count
            wordCounts[word] += 1;
        }
        return wordCounts;
    }, {}); // start with an empty object
    return wordCountObject;
}

countWords('Mary had a little lamb little lamb little lamb');
// {Mary: 1, had: 1, a: 1, little: 3, lamb: 3}

console.log(countWords('Mary had a little lamb little lamb little lamb'));