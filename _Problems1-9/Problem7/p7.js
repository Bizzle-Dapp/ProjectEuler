/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
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

huntForNthPrimeNumber = (nth) => {
    let startTime = Date.now();
    if(nth < 1 || typeof nth !== "number") return console.log("Error");

    let count = 3;
    while(primeNumbers.length < nth)
    {
        isPrimeNumber(count);
        count++;
    }
    let endTime = Date.now();
    console.log("Completed in: " + (endTime - startTime) + " milliseconds.");
    console.log(primeNumbers[nth - 1]);
}

huntForNthPrimeNumber(10001);
