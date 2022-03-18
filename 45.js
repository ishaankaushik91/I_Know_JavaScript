// Summation of each sub array in a matrix (LOOP)
let matrix = [
    [1, 2, 3, 4, 5],
    [10, 9, 8, 7],
    [6, 5, 4, 2]
];

Summation(matrix);

function Summation(matrix)
{
    for (let i = 0; i < matrix.length; i++)
    {
        let sum = 0;
        for (let j = 0; j < matrix[i].length; j++)
        {
            sum += matrix[i][j];
        }
        console.log("Summation =", sum);
    }
}