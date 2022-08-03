"use strict";

/**
 * 2.
 * Prompt the user for an odd number between 1 and 50. Use a loop
 * and a break statement to continue prompting the user if they
 * enter invalid input.
 * 3.
 * Use a loop and the continue statement to output all the odd
 * numbers between 1 and 50, except for the numbers the user entered.
 *
 * Your output should look like this:
 *
 * Number to skip is: 27
 *
 * Here is an odd number: 1
 * Here is an odd number: 3
 * Here is an odd number: 5
 * Here is an odd number: 7
 * Here is an odd number: 9
 * Here is an odd number: 11
 * Here is an odd number: 13
 * Here is an odd number: 15
 * Here is an odd number: 17
 * Here is an odd number: 19
 * Here is an odd number: 21
 * Here is an odd number: 23
 * Here is an odd number: 25
 * Yikes! Skipp number: 27
 * Here is an odd number: 29
 * Here is an odd number: 31
 * Here is an odd number: 33
 * Here is an odd number: 35
 * Here is an odd number: 37
 * Here is an odd number: 39
 * Here is an odd number: 41
 * Here is an odd number: 43
 * Here is an odd number: 45
 * Here is an odd number: 47
 * Here is an odd number: 49
 */

var numberToSkip;

do
{
    numberToSkip = Number(prompt("Please enter an odd number from 1 - 50:"));

    if(numberToSkip < 1 || numberToSkip > 50 || numberToSkip % 2 === 0 || isNaN(numberToSkip))
    {
        alert("The number is not an odd number from 1 - 50");
    }
    else
        break;
}while(numberToSkip < 1 || numberToSkip > 50 || numberToSkip % 2 === 0 || isNaN(numberToSkip));

console.log("Number to skip is: " + numberToSkip + "\b");

console.log("\b");

for(var x = 1; x < 50; x++)
{
    if(numberToSkip !== x)
    {
        console.log("Here is an odd number: " + x);
    }
    else
    {
        console.log("Yikes! Skipping number: " + x);
        continue;
    }
}

