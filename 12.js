// Frequency of each element in Matrix (LOOP)
let Matrix = [
    [1, 2, 3, 4, 12, 1],
    [10, 1, 1, 31, 32, 190],
    [80, 2, 3, 3, 2, 1, 1]
];

Frequency(Matrix);

function Frequency(Matrix)
{
    for (let i = 0; i < 3; i++)
    {
        for (let j = 0; j < Matrix[i].length; j++)
        {
            let freq = 0;
            for (let k = 0; k < 3; k++)
            {
                for (let m = 0; m < Matrix.length; m++)
                {
                    if (Matrix[i][j] == Matrix[k][m])
                    {
                        freq++;
                    }
                }
            }
            console.log("Frequency of", Matrix[i][j],"=", freq);       
        }
    }
}