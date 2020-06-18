/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

isDivisibleBySequence = (number, maxValue) => {
    for(i = maxValue; i > 1; i--)
    {
        if(number % i !== 0)
        {
            return false;
        }
    }
    return true;
}

smallestNumberDivisibleBy = (maxValue) => {
    let answer = 0;
    let startTime = Date.now();
    for(t = 1; t < Infinity; t++)
    {
        // I just discovered some nasty javascript functionality here. If this for loops internal variable shares a name with the for loop in the method of the if 
        // statement, it acts like a var declaration, ignoring scope and entering an endless loop where one resets the others value on repeat.
        // Go ahead, rename t to i and watch it bounce from 20 to 21 back to 20 for the rest of time.
        // <3 Javascript
        if(isDivisibleBySequence(t,maxValue))
        {
            answer = t;
            break;
        }
    }
    let endTime = Date.now();
    console.log("Completed in: " + (endTime - startTime) + " milliseconds.");
    console.log(answer);
}

smallestNumberDivisibleBy(20);