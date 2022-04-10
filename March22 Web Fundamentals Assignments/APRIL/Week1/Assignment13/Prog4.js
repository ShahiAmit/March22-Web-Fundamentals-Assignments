//4. Write a program to take an input from the user (num) and check whether it is a prime number or not."

const n = parseInt(prompt("Enter the No. "));
let isPrime = true;

if (n === 1) {
    console.log("1 is not prime nor composite no.");
}
else if (n > 1) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log("No is a prime number");
    } else {
        console.log("No is a not prime number");
    }
}

// check if number is less than 1
else {
    console.log("The number is not a prime number.");
}