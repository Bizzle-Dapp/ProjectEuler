/*

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.

*/

// The answer to this will very likely exceed javascripts highest number. Expecting the first run to return "Infinity"

let primeNumbers = [2];

isPrimeNumber = (number) => {
    // Assume the number is prime. Innocent until proven guilty.
    let isPrime = true;
    // For every prime number the program already knows, try and divide the number.
    if(isPrime)
    {
        for(let prime of primeNumbers){
            if(number % prime === 0)
            {
                isPrime = false;
                break;
            }
        };
    }
    // If we still believe this to be a prime number, add it to our array of prime numbers for a later date
    if(isPrime)
    {
        primeNumbers.push(number);
    }
    return isPrime;
}

findSumOfAllPrimeNumbersLessThan = (number) => {
    let sumOfPrimesBelow = 2;

    for(let i = 3; i <= number; i+=2)
    {
        if(isPrimeNumber(i)){ sumOfPrimesBelow += i; }
    }
    console.log(`Total Primes: ${primeNumbers.length}`)
    console.log(`${sumOfPrimesBelow}`);
}

findSumOfAllPrimeNumbersLessThan(2000000);

