// Converting all non to forced primes in Array (LOOP)
let Array = [10, 12, 13, 14, 16, 18, 21, 100];

Convert(Array);

function Convert(arr)
{
    for (let i = 0; i < arr.length; i++)
    {
        while (PrimeCheck(arr[i]) == 0)
        {
            arr[i] += 1;
        }
    }
    console.log(arr);
}

function PrimeCheck(number)
{
    for (let j = 2; j < number; j++)
    {
        if (number % j == 0)
        {
            return 0;
        }
    }
    return 1;
}