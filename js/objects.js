(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person =
        {
            firstName: "Julian",
            lastName: "Gutierrez"
        };

    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function ()
    {
        return `Hello from ${person.firstName} ${person.lastName}!`
    }

    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
    console.log("\b");

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach((item, index) => {
        let discount = Number(item.amount) * 0.12;
        let total = Number(item.amount) - discount;
        console.log(item.amount > 200 ? `${item.name} spent $${Number(item.amount).toFixed(2)} and got a discount of $${discount.toFixed(2)},\n`+
        `the total amount paid for the purchase was $${total.toFixed(2)}`:
        `${item.name} spent $${Number(item.amount).toFixed(2)} and did not get a discount`);
        console.log("\b")
    })

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {title: 'The Devil Wears Prada', author:{firstName : 'Lauren', lastName: 'Weisberger'}},
        {title: 'The Curious Incident of the Dog in the Night-Time', author:{firstName: 'Mark', lastName: 'Haddon'}},
        {title: 'How to Win Friends and Influence People', author:{ firstName: 'Dale', lastName: 'Carnegie'}},
        {title: 'Cloudy with a Chance of Meatballs', author:{firstName: 'Judi', lastName: 'Barrett'}},
        {title: 'Love in the Time of Cholera', author:{firstName: 'Gabriel', lastName: 'Garcia Marquez'}}
    ];

    console.log(`Title of the book: ${books[0].title}`);
    console.log(`Written by:\nFirst Name: ${books[0].author.firstName}\nLast Name: ${books[0].author.lastName}`);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    console.log("\b");

    books.forEach((item,index) =>{
        //let bookNum = 0;
        console.log(`Book # ${index + 1}\n`+
        `Title: ${item.title}\nAuthor: ${item.author.firstName} ${item.author.lastName}`);
    })

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
     console.log("\b");

     function createBook(title, firstName, lastName)
     {
         return [{theTitle: title, theFirstName: firstName, theLastName: lastName}];
     }

     function showBookInfo(info)
     {
         info.forEach((item, index) =>{
                 console.log(`Book # ${index + 1}\n`+
                     `Title: ${item.theTitle}\nAuthor: ${item.theFirstName} ${item.theLastName}`);
         });
     }

     showBookInfo(createBook("If You Really Loved Me", "Ann", "Rule"))

})();
