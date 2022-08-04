(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split('|');

    planetsArray.forEach(function(planetArray)
    {
        console.log(planetArray);
    });

    console.log("\b");

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    planetsArray.forEach(function(planet)
    {
        console.log(planet + "<br>");
    });

    console.log("\b");

    planetsArray.forEach(function(planets)
    {
        console.log("<ul>" + "<li>" + planets + "</li></ul>");
    });


})();
