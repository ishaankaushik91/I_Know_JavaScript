// Summation of all primes in matrix (LOOP)
let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

console.log(Summation(matrix));

function Summation(matrix)
{
    let sum = 0;
    for (let i = 0; i < matrix.length; i++)
    {
        for (let j = 0; j < matrix[i].length; j++)
        {
            if (PrimeCheck(matrix[i][j]))
            {
                sum += matrix[i][j];
            }
        }
    }
    return sum;
}

function PrimeCheck(number)
{
    for (let k = 2; k < number; k++)
    {
        if (number % k == 0)
        {
            return 0;
        }
    }
    return 1;
}