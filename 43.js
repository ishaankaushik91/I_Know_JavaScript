// Considering only nth duplicate in an Array (LOOP)
let Array = [1, 2, 3, 2, 3, 3, 4, 4, 5, 3];

Duplicate(Array);

function Duplicate(Array)
{
    let count = 0;
    for (let i = 0; i < Array.length; i++)
    {
        for (let j = i + 1; j < Array.length; j++)
        {
            if (Array[i] == Array[j])
            {
                count++;
                break;
            }
        }
        if (count == 2)
        {
            console.log(Array[i]);
            break;
        }
    }
}