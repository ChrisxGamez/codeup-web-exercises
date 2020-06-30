alert("Let's play a guessing game");
let guess;
do {
    guess = prompt("I chose an odd number between 1 and 50. Can you guess what it is?");
    if (guess % 2 === 0) {
        alert("No, that was an even number. Try again");
        continue;
    } else {
        console.log("Number to skip: " + guess);
        break;
    }
} while (true);

    for (let i = 1; i <= 50; i += 1) {

        if (i % 2 === 0) {
            continue;

        }   if (i != guess) {
            console.log("Here is an odd number: " + i)

        } else {
            console.log("Yikes! Skipping number " + guess)
        }
    }





