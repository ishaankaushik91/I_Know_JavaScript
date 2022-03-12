// Deleting random element from array (LOOP)
let array = [10, 21, 23, 12, 199, 12345, 101, 89, 188];
let position = Math.floor(Math.random() * (array.length - 1));

Deletion(array);

function Deletion(array)
{
    for (let i = 0; i < array.length; i++)
    {
        if (i == position)
        {
            for (let j = position; j < array.length; j++)
            {
                array[j] = array[j + 1];
            }
        }
    }
    console.log(array);
}