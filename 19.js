// Deleting random element from array (RECURSION)
let array = [10, 21, 23, 12, 199, 12345, 101, 89, 188];
let position = Math.floor(Math.random() * (array.length - 1));

Deletion(position, array);

function Deletion(p, array)
{
    if (p < array.length)
    {
        array[p] = array[p + 1];
        return Deletion(p + 1, array);
    }
    console.log(array);
}