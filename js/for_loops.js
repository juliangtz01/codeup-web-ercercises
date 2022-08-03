"use strict";

/**
 * 2.
 * Create a function named showMultiplicationTable that accepts a number and
 * console.logs the multiplication table for that number (just multiply by the numbers 1
 * through 10)
 * */

function showMultiplicationTable(number)
{
    for(let x = 1; x < 11; x++)
    {
        console.log(number + " x " + x + " = " + x * number);
    }
}

showMultiplicationTable(5);

/**
 * 3.
 * Use a for loop and the code from the previous lessons to generate 10 random numbers
 * between 20 and 200 and output to the console whether each number is odd or even. For
 * example:
 *
 * 123 is odd
 * 80 is even
 * 24 is even
 * 199 is odd
 */

console.log("\b");

for(let x = 0; x < 10; x++)
{
    let random = Math.floor(Math.random() * 180) + 20;
    console.log(random % 2 === 0 ? random + " is even" : random + " is odd");
}

console.log("\b");

/**
 * 4.
 * Create a loop that uses console.log to creat the output shown below
 * 1
 * 22
 * 333
 * 4444
 * 55555
 * 666666
 * 7777777
 * 88888888
 * 999999999
 */

for(let x = 1; x < 10; x++)
{
    let pyramid = '';
    for(let y = 1; y <= x; y++)
    {
        pyramid += x + '';
    }
    console.log(pyramid);
}

console.log("\b");

/**
 * 5.
 * Create a for loop that uses console.log to create the output shown below
 *
 * 100
 * 95
 * 90
 * 85
 * ...
 * 15
 * 10
 * 5
 */

for(let x = 20; x > 0; x--)
{
    console.log(x * 5);
}








