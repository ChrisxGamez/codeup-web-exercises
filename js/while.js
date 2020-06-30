// let i = 2
// while (i <= 65536) {
//     i+=2;
//     console.log(i);
// }





var allCones = Math.floor(Math.random() * 50) + 50;

do {
    let cones = Math.floor(Math.random() * 5) + 1;
    if (cones <= allCones) {
        allCones = allCones - cones;
        console.log(" cones sold...")
    } else {
        console.log("Cannot sell you " + cones + " cones I only have " +
            allCones + "...")
    }

} while (allCones > 0);

console.log("Yay! I sold them all");






