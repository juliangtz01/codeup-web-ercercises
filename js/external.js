"use strict";

alert("Welcome to my Website");

var favoriteColor = prompt("What is your favorite color?");
alert("Great, " + favoriteColor + " is my favorite color too!");

var total = 0;

alert("You rented three movie, each movie cost $3 per day. How much did you pay to rent those movies?");

var movieTheLittleMermaid = Number(prompt("For how many days did you rent The Little Mermaid for?"));

var movieBrotherBear = Number(prompt("For how many days did you rent Brother Bear for?"));

var movieHercules = Number(prompt("For how many days did you like rent Hercules for?"));

total =(movieTheLittleMermaid + movieBrotherBear + movieHercules) * 3;

alert("The total cost for the movies that were rented is $" + total.toFixed(2));

alert("You are a contractor for three companies: Google, Amazon " +
    "and Facebook, they pay you a different rate per hour. How much will you " +
    "receive in payments for this week?");

var googlePay = Number(prompt("How much did Google pay you?"));

var googleHours = Number(prompt("How many hours did you work for Google?"));

var amazonPay = Number(prompt("How much did Amazon pay you?"));

var amazonHours = Number(prompt("How many hours did you work for Amazon?"));

var facebookPay = Number(prompt("How much did Facebook pay you?"));

var facebookHours = Number(prompt("How many hours did you work for Facebook?"));

var grandTotal = (googlePay * googleHours) + (amazonPay * amazonHours) + (facebookPay * facebookHours);

alert("This week you will receive $" + grandTotal.toFixed(2) + " from all the jobs you worked!");

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
    alert("Sorry, but you are not able to enroll for this class!");
}

alert("A product offer can be applied only if a person buys more " +
    "than 2 items, and the offer has not expired. Premium members " +
    "do not need to buy a specific amount of products.");

var isOfferNotExpired = false;

isOfferNotExpired = confirm("Is the offer still valid?");

if(isOfferNotExpired === true)
{
    var isPremiumMember = confirm("Are you a premium member?");

    if(isPremiumMember == true)
    {
        alert("Thank you for premium member, glad to inform you that " +
            "the product offer can be applied to your purchase!");
    }
    else
    {
        var isPurchaseMoreThan2 = confirm("Did you purchase more than 2 items?");

        if(isPurchaseMoreThan2 === true)
        {
            alert("Thank you for shopping with us, we are glad to inform you that " +
                "the product offer can be applied to your purchase!");
        }
        else
        {
            {
                alert("We are sorry to inform you that the product offer cannot be applied to your purchase!");
            }
        }
    }
}
else
{
    {
        alert("We are sorry to inform you that the product offer cannot be applied to your purchase!");
    }
}

