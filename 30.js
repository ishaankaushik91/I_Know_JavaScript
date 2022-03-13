// Generating random number until a prime is encountered (LOOP)
let number = Math.floor(Math.random() * 10000000);

while (PrimeCheck(number) == 0)
{
    number = Math.floor(Math.random() * 10000000);
}
console.log(number);

function PrimeCheck(number)
{
    for (let i = 2; i < number; i++)
    {
        if (number % i == 0)
        {
            return 0;
        }
    }
    return 1;
}