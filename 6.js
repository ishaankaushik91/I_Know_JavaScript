// Summation of all primes in Arithmetic Progression (LOOP)
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

function Generate()
{
    let sum = 0;
    for (let start = 10; start <= 1000; start+=7)
    {
        if (PrimeCheck(start))
        {
            sum += start;
        }
    }
    return sum;
}

console.log(Generate());