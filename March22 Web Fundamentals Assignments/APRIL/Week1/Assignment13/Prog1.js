// 1. Take 3 inputs from the user and show minimum of the three.

const x = prompt("Enter Value for x");
const y = prompt("Enter Value for y");
const z = prompt("Enter Value for z");
if(x < y && x < z)
{
    console.log("x is minimum");
}
else if(y < x && y < z)
{
    console.log("y is minimum");
}
else{
    console.log("z is minimum");
}