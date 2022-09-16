"use strict";

let arrayOfNames = ['Julian', 'Anthony', 'Mia', 'Juan', 'Amida'];

for(let i of arrayOfNames)
{
    console.log(i);
}

let test = [
    {car: "ford", animal: 'bear'},
    {car: "dodge", animal: 'cat'},
    {car: "chevy", animal: 'dog'}
]

for(let list of test)
{
    // if(list.car === 'dodge')
    console.log(list)
}