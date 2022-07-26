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

//create a variable to hold the count of the keys's pressed
let keyCount = 0;

//create a function to check the code matches the konamiCode
function checkCode(e)
{
    //create an array variable to capture what the user keys
    let keyPressed = keys[e.keyCode];

    //if the keyPressed is the same as the konamiCode then increment the keyCount variable
    if(keyPressed === konamiCode[keyCount])
    {
        keyCount++;

        //if keyCount matches the length of the konamiCode the user has entered the correct code
        if(keyCount === konamiCode.length)
        {
            cheatCodeActivated();
            resetKeyState();
        }
    }
    //if the keyPressed does not match konamiCode, then call resetKeySate function
    else
    {
        resetKeyState();
    }
}

//create a function that changes the html page when called
function cheatCodeActivated()
{
    $('#contra').css({
        'background-image': 'url(img/contra.png)',
        'background-repeat': 'no-repeat',
        'font-size': '100px',
        'height': '200px',
        'max-width': 'auto',
        'object-fit': 'fill'
    })

    $('h1').css({'text-align': 'center'});

    $('p').css({
        'text-align': 'center',
        'font-size' : '40px'
    }).html('You have activated the Konami Code, your player has 30 lives!!!');
}
//create a function that will reset the keyCount to 0 when called
function resetKeyState()
{
    keyCount = 0;
}