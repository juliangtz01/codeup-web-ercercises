"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function anaylzeColor(colorName)
{
    if(colorName === 'blue')
    {
        return "The color of the sky is blue " + colorName + "!";
    }
    else if(colorName === 'red')
    {
        return "My brother's favorite color is " + colorName + "!";
    }
    else
        return "I don't know anything with the color " + colorName + "!";
}

var myColor = "blue";

anaylzeColor(myColor);

myColor = "red";

anaylzeColor(myColor);

anaylzeColor("white");
anaylzeColor("black");
anaylzeColor("yellow");


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
//console.log(anaylzeColor(randomColor));

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */


switch (randomColor)
{
    case "blue":
        console.log(anaylzeColor(randomColor));
        break;
    case "red":
        console.log(anaylzeColor(randomColor));
        break;
    default:
        console.log(anaylzeColor(randomColor));
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var userColor = prompt("What color are you thinking about?");
alert(anaylzeColor(userColor));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNumber, total)
{
    switch (luckyNumber)
    {
        case 0:
            return total;
        case 1:
            return total * 0.10;
        case 2:
            return total * 0.25;
        case 3:
            return total * 0.35;
        case 4:
            return total * 0.50;
        default:
            return 0;
    }
}
console.log(calculateTotal(0, 100));
console.log(calculateTotal(4, 100));
console.log(calculateTotal(5, 100));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
 var luckyNumber = Math.floor(Math.random() * 6);

 var userTotal = Number(prompt("What was your total bill?"));

 var discount = Number(calculateTotal(luckyNumber, userTotal));

 alert("Your lucky number is " + luckyNumber);

 alert("Your price before the discount is $" + userTotal.toFixed(2));

 if(luckyNumber === 0)
 {
     alert("Sorry but you did not get a discount, you pay the total bill which " +
         "is $" + userTotal.toFixed(2) + "!");
 }
 else
 {
     var grandTotal = userTotal - discount;
     var percentOfDiscount = ((userTotal - grandTotal) / userTotal) * 100;

     switch (luckyNumber)
     {
         case 1:
         case 2:
         case 3:
         case 4:
             alert("You get a " + percentOfDiscount + "% discount, and your final bill is $" + grandTotal.toFixed(2) + "!");
             break;
         default:
             alert("Congratulations, you get a 100% discount, you get everything for free!!!");
     }
 }



/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
var isUserEnteringNumber = confirm("Would you like to enter a number");

if(isUserEnteringNumber)
{
    var theNumber = Number(prompt("Please enter a number:"));

    if(!isNaN(theNumber))
    {
        if(theNumber % 2 === 0)
        {
            alert("Your number even!");
        }
        else
        {
            alert("Your number is odd!");
        }

        var theResult = 100 + theNumber;

        if(theNumber >=0)
        {
            alert("100 + " + theNumber + " is: " + theResult);
            alert("Your number is positive");
        }
        else
        {
            alert("100 - " + Math.abs(theNumber) + " is: " + theResult);
            alert("Your number is negative");
        }
    }
    else
    {
        alert("Sorry but " + theNumber + " is not a real number, please try again next time!");
    }
}
else
{
    alert("Maybe next time you will like to play!")
}