// console.log("Hello from external JavaScript");
//


// alert("Welcome to my Website!");

// var answer = prompt("What is your favorite color?");
// if (answer) {
//     alert("Great " + answer + " is my favorite color too!");
// }


// let color = prompt("What is your favorite color?");
// alert("Great " + color + " is my favorite color too!");


//1
// let littleMermaidDays = parseInt(prompt("How many days did you rent Little Mermaid?"));
//
// let brotherBearDays = parseInt(prompt("How many days did you rent Brother Bear?"));
//
// let herculesDays = parseInt(prompt("How many days did you rent hercules?"));
//
// alert("You owe " + (littleMermaidDays + brotherBearDays + herculesDays)*3 + " for rental charges ($3 per movie dayy).");

//2
// let googleHours = prompt("How many hours did you work for Google?");
//
// let amazonHours = prompt("How many hours did you work for Amazon?");
//
// let facebookHours = prompt("How many hours did you work for Facebook?");
//
// const googleRate = 400;
// const amazon = 380;
// const facebook = 350;
//
// let totalPay = googlePay * googleHours + amazonPay *
//     amazonHours + facebookPay *
//     FacebookHours;
//
// alert("You made $" +totalPay+ " this week.");

 //2
// let isClassOpen = confirm("Is there room in the class?");
// let isSchoolOpen = confirm("Does this class work with your schedule?");
// alert("You may register: " + (isClassOpen && isScheduleOpen));



//3

let numberItemsPurchased = parseInt(prompt("How many items did you purchase?"));
let isOfferExpired = confirm("Press OK if the offer is not expired?");
let isPremiumMember = confirm("press OK if you are a premium member");


alert("Offer Applied: " + (isOfferExpired && (numberItemsPurchased > 2 || isPremiumMember)));