// Inserting element at random index in array (LOOP)
let array = [1, 2, 43, 1, 12, 10, 22];
let position = Math.floor(Math.random() * (array.length - 1));

Insertion(array, 1000, position);

function Insertion(array, number, pos)
{
    for (let i = 0; i < array.length; i++)
    {
        if (i == pos)
        {
            for (let j = array.length - 1; j >= pos; j--)
            {
                array[j + 1] = array[j];
            }
            array[pos] = number;
            console.log(array);
            return;
        }
    }
}