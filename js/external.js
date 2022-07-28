"use strict";

alert("Welcome to my Website");

var favoriteColor = prompt("What is your favorite color?");
alert("Great, " + favoriteColor + " is my favorite color too!");

var movieLittleMermaid = 3, movieBrotherBear = 5, movieHercules = 1;

var total = 0;

alert("You rented three movies, The Little Mermaid for 3 days," +
    " Brother Bear for 5 days, and Hercules for 1 day. Each movie " +
    "cost $3 per day. How much did you pay to rent those movies?");

total =(movieLittleMermaid + movieBrotherBear + movieHercules) * 3;

alert("The total cost for the movies that were rented is $" + total.toFixed(2));

alert("You are a contractor three companies: Google, Amazon " +
    "and Facebook, they pay you a different rate per hour. Google " +
    "pays $400, Amazon $380, and Facebook #350. How much will you " +
    "receive in payments for this week? You worked 10 hours for Facebook, " +
    "6 hours for Google and 4 hours for Amazon.");

var companyPay = [400, 380, 350];

var hours = [6, 4, 10];

var grandTotal = 0;

for(var x = 0; x < companyPay.length; x++)
{
    grandTotal += companyPay[x] * hours[x];
}

alert("This week you will receive $" + grandTotal.toFixed(2) + " from all the jobs you worked this week!");

alert("A student can be enrolled in a class if the class is not " +
    "full and the class schedule does not conflict with her current schedule.");
var isClassFull = confirm("Is the class you are trying to enroll full?");

var isScheduleConflict = confirm("Does the class conflict with your schedule?");

if(isClassFull === false && isScheduleConflict === false)
{
    alert("Congratulations, you can enroll for the this class.");
}
else
{
    alert("Sorry, but you are not ");
}

