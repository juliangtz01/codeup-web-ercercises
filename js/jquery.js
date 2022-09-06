//create an array variable to hold the keys needed to look for
let keys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
};

//create an array variable to hold the correct Konami Code
let konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b','a'];

//add an event listener with jQuery to log the keys being pressed with the checkCode function
$(document).keydown(checkCode);