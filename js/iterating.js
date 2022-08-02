(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    var names = ['Julian', 'Miguel', 'Julius', 'Romeo'];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log("\b");
    for(var x = 0; x < names.length; x++)
    {
        console.log(names[x] + " is index " + x);
    }
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    console.log("\b");
    for(var x = 0; x < names.length; x++)
    {
        console.log(names[x]);
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    console.log("\b");
    names.forEach(element => console.log(element));
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    console.log("\b");


    function first(itemArray)
    {
        console.log(itemArray[0]);
    }

    function second(itemArray)
    {
        console.log(itemArray[1]);
    }

    function last(itemArray)
    {
        console.log(itemArray[itemArray.length - 1]);
    }
    var myArray = [1,2,3,4,5];

    first(myArray);
    second(myArray);
    last(myArray);

})();
