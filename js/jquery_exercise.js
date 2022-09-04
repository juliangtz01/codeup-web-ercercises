"use strict";

// window.onload = $(function() {
//     alert( 'The DOM has finished loading!' );
// });


// $('*').css('border', '1px solid #F00');

//create a variable and assign jQuery code to hold the innerHTML of element 'p'
var x = ($('p').text());

//create an alert and pass the (typeof x) to display the result
// alert(typeof x);

//3. Use jQuery to select an element by the id.
// Alert the contents of the element.
//create an alert and pass x to display the result
alert(x);

//4. Update the jQuery code to select and alert a different id.
x = $('#id-two').text();
alert(x);

//5. Use the same id on 2 elements. How does this change the jQuery selection?
x = $('#id-one').text();
alert(x);
//even if there are two id's with the same name, only one will display on alert



// $('li').css('background-color', 'yellow').css('display', 'inline');




