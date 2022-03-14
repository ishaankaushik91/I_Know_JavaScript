// Making frequency of array elements prime (LOOP)
let array = [1, 2, 3, 2, 3, 1, 4, 4, 4, 4, 10, 10, 1,];

for (let j = 0; j < array.length; j++)
{
    let frequency = 0;
    for (let k = 0; k < array.length; k++)
    {
        if (array[j] == array[k])
        {
            frequency++;
        }
    }

    while (PrimeCheck(frequency) == 0)
    {
        frequency += 1;
    }
    console.log(frequency);
}

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