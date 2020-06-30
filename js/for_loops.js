2.
let showMultiplicationTable = function (num) {
    for (let i = 1; i <= 10; i++) {
        console.log(num + " x " + i + ' = ' + (i * num));
    }
}
showMultiplicationTable(7);

3.
for (let i = 0; i < 10; i++) {
    var x = Math.floor(Math.random() * 180) + 20;
    if (x % 2 === 0) {
        console.log(x + " is even")
    } else {
        console.log(x + " is odd")
    }
}


4.
for(i = 1; i <= 9; i++) {
    console.log(String(i).repeat(i))
}



5.
    for (let i = 105; i > 0; i-=5) {
        // if (i % 5 === 0)
            console.log(i);
    }