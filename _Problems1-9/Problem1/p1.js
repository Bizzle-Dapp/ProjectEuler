/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/ 

sumOfAllMultiplesOf = (values, maximumValue) => {
    // I'm just interested
    let numberOfMultiplesFound = 0;
    // The actual answer we're looking for
    let totalSum = 0;
    // Let's make sure that we actually have some numbers to work with
    if(values.length > 0)
    {
        // For every whole number below maximumValue
        for(i = 1; i < maximumValue; i++)
        {
            // Declare that this has not yet been deemed a match
            let isMultiple = false;
            // For each value to check
            values.forEach((value, index) => {
                // If the remainder from the division is naught, it's a match
                if(i % value === 0)
                {
                    isMultiple = true;
                }
            })
            // If isMultiple increase sum by our iterative value and also increase the number of matches we've found
            if(isMultiple)
            {
                totalSum += i;
                numberOfMultiplesFound++;
            }
        };
        
    }
    console.log("Multiples Found: " + numberOfMultiplesFound + " TotalSum: " + totalSum);
}

sumOfAllMultiplesOf([3, 5], 1000);
