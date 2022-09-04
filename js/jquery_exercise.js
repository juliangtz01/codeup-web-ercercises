"use strict";

//----SELECTORS EXERCISE SECTION------

// window.onload = $(function() {
//     alert( 'The DOM has finished loading!' );
// });

// $('*').css('border', '1px solid #F00');

//create a variable and assign jQuery code to hold the innerHTML of element 'p'
// var x = ($('p').text());

//create an alert and pass the (typeof x) to display the result
// alert(typeof x);

//----ID SELECTOR EXERCISE-----

//3. Use jQuery to select an element by the id.
// Alert the contents of the element.
//create an alert and pass x to display the result
// alert(x);

//4. Update the jQuery code to select and alert a different id.
// x = $('#id-two').text();
// alert(x);

//5. Use the same id on 2 elements. How does this change the jQuery selection?
// x = $('#id-one').text();
// alert(x);
//even if there are two id's with the same name, only one will display on alert

//----CLASS SELECTOR EXERCISE-----

//3. Using jQuery, create a border around all elements with the class codeup that is 1 pixel wide and red.
// $('.codeup').css('border', '1px solid red');

//4. Remove the class from one of the elements.
// Refresh and test that the border has been removed.

//The border was removed from the element without the class codeup

//5. Give another element an id of codeup. Does this element get a border now?

//The id element with the name codeup does not get a red border


//----Element SELECTOR EXERCISE-----

//2. Using jQuery, set the font-size of all li elements to 20px.
// $('li').css('font-size', '20px');

//3. Craft selectors that highlight all the h1, p, and li elements.
// $('h1, p, li').css('background-color', 'yellow');

//Create a jQuery statement to alert the contents of your h1 element(s)
// alert($('h1').text());

//----MOUSE EVENT EXERCISE SECTION------

//Remove your custom jQuery code from previous exercises.

// Add jQuery code that will change the background color of an h1 element when clicked.
$('h1').click(function() {
    $(this).css('background-color', 'blue');
});

// Make all paragraphs have a font size of 18px when they are double clicked.
$('p').dblclick(function(){
    $(this).css('font-size', '18px');
});

// Set all li text color to red when the mouse is hovering; reset to black when it is not.

$('li').hover(
    function()
    {
        $(this).css('background-color', 'red')
    },
    function()
    {
        $(this).css('background-color', 'white')
    }
);



