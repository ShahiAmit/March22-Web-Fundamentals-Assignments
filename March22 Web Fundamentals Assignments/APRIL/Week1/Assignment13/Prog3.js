//3. Write a program to print all even numbers less than or equal to n (n is an input which we take using prompt).
const n = prompt("Enter the No");
if(n > 0)
{
    for(let i = 1; i <= n; i++)
    {
        if(i % 2 === 0)
        {
            console.log(i);
        }
    }

}
else{
    console.log("No is not zero or less");
}