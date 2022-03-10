// All primes in Arithmetic Series (LOOP)
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
    /* 
        Taking common difference as 7 in the Sequence
    */
    for (let first = 10; first <= 1000; first+=7)
    {
        if (PrimeCheck(first))
        {
            console.log(first);
        }
    }
}
Generate();