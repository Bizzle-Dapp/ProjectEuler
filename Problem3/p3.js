/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

let primeNumbers = [2];

isPrimeNumber = (number) => {
    // Assume the number is prime. Innocent until proven guilty.
    let isPrime = true;
    // For every prime number the program already knows, try and divide the number.
    primeNumbers.forEach((prime) => {
        if(number % prime === 0)
        {
            isPrime = false;
        }
    })
    // If we still believe this to be a prime number, add it to our array of prime numbers for a later date
    if(isPrime && (!primeNumbers.includes(number)))
    {
        primeNumbers.push(number);
    }
    return isPrime;
}

largestPrimeFactorOf = (number) => {
    let primeFactors = [];
    let sequence = 3; // Begin at the first odd prime number
    let currentValue = number;
    let startTime =  Number(Date.now());
    while(currentValue > 0 && sequence < (currentValue / 2))
    {
        if(isPrimeNumber(sequence))
        {
            if(currentValue % sequence === 0)
            {
                if(!primeFactors.includes(sequence))
                {
                    primeFactors.push(sequence);
                }
                currentValue = (currentValue / sequence);
                sequence = 3;
            }
            else
            {
                sequence+= 2;
            }
        }
        else
        {
            sequence+= 2;
        }
    }
    primeFactors.push(currentValue);
    let endTime = Number(Date.now());
    primeFactors.sort((a,b) => {return b-a});
    console.log("Completed in: " + (endTime - startTime) + " milliseconds.");
    console.log(primeFactors[0]);
}

largestPrimeFactorOf(600851475143);