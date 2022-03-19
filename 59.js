// Summation from m to n (RECURSION)
function Summation(start)
{
    if (start <= 100)
    {
        return start + Summation(start + 1);
    }
    return 0;
}

console.log(Summation(10));