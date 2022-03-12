// Deleting random element from a matrix (LOOP)
let matrix = [
    [12, 31, 22, 46],
    [10, 3, 4, 1],
    [90, 99, 16, 18]
];

let row = Math.floor(Math.random() * (matrix.length - 1));
let column = Math.floor(Math.random() * 3);

Deletion(matrix, row, column);

function Deletion(matrix, r, c)
{
    for (let i = 0; i < 3; i++)
    {
        for (let j = 0; j < 4; j++)
        {
            if (i == r && j == c)
            {
                for (let k = j; k < 4; k++)
                {
                    matrix[i][k] = matrix[i][k + 1];
                }
                return console.log(matrix);
            }
        }
    }
}