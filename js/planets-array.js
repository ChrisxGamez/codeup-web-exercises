(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];
    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */


    console.log('Adding "The Sun" to the beginning of the planets array.');
    planets.unshift("The Sun");
     console.log(planets);


    console.log("Adding Pluto to the beginning of the array")

    planets.push("Pluto");
    console.log(planets);


    console.log("Removing the Sun to the beginning of the array")
    planets.shift()
    console.log(planets);


    console.log("Removing Pluto to the beginning of the array")
    planets.pop();
    console.log(planets);


    console.log('Finding and logging the index of "Earth" in the planets array.');
    console.log(planets.indexOf("Earth"))

    console.log("Reversing the order of the planets array.")
    console.log(planets.reverse());

    console.log("Sorting the planets array.");
    console.log(planets.sort());


})();
