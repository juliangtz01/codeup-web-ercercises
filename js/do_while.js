/**
 * An ice cream seller can't go home until she sells all of her cones.
 * First write enough code that generates a random number between
 * 50 and 100 representing the amount of cones to sell before you
 * start your loop. Inside of the loop your code should generate
 * another random number between 1 and 5, simulating the amount
 * of cones being bought by her clients. Use a do-while loop to log to
 * the console the amount of cones sold to each person. The below
 * code shows how to get the random numbers for this exercise.
 *
 * The output should be similar to the following:
 *
 * 5 cones sold... // if there are enough cones
 * Cannot sell you 6 cones I only have 3... // If there are not enough cones
 * Yay! I sold them all! // If there are no more cones
 */

//This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;

console.log(allCones + " cones to sell");

console.log("\b");

do
{
    //This expression will generate a random number between 1 and 5
    var conesBought = Math.floor(Math.random() * 5) + 1;

    if(allCones >= conesBought)
    {
        console.log(conesBought + " cone(s) sold...");
        allCones -= conesBought;
        console.log(allCones + " cone(s) left to sell");
    }
    else
    {
        console.log("Connot sell you " + conesBought + " cone(s) I only have " + allCones + "...");
    }

}while(allCones !== 0);

console.log("Yay! I sold them all!");
