// Inserting all elements of matrix2 in matrix1 at random index (RECURSION)
let matrix1 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
  ];
  
  let matrix2 = [
    [9, 10, 11, 12, 13],
    [14, 15, 16, 18],
  ];

Traversal(0, matrix2, matrix1);

function Insertion(index, matrix, position)
{
    if (index >= position)
    {
        for (let j = 0; j < matrix[index].length; j++)
        {
            matrix[index][j + 1] = matrix[index][j];
        }
        return Insertion(index - 1, matrix, position);
    }
}

function Traversal(index, matrix2, matrix1)
{
    if (index < matrix2.length)
    {
        for (let j = 0; j < matrix2[index].length; j++)
        {
            let randRow = Math.floor(Math.random() * (matrix1.length));
            let randColumn = Math.floor(Math.random() * 3);
            Insertion(randRow, matrix1, randColumn);
            matrix1[randRow][randColumn] = matrix2[index][j];
        }
        return Traversal(index + 1, matrix2, matrix1);
    }
    console.log(matrix1);
}