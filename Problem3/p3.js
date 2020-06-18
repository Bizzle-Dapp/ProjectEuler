/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

isPrimeNumber = (number) => {
    let isPrime = true;
    for(i = number; i > 0; i--)
    {
        if(i != 1 && i != number && number % i === 0)
        {
            isPrime = false;
        }
    }
    return isPrime;
}

largestPrimeFactorOf = (number) => {
    let primeFactors = [];
    let sequence = 2; // Begin at the first prime number
    let currentValue = number;
    console.log("started at: " + new Date().toTimeString())
    while(currentValue > 0)
    {
        
        
        if(isPrimeNumber(sequence))
        {
            if(number % sequence === 0)
            {
                if(!primeFactors.includes(sequence))
                {
                    primeFactors.push(sequence);
                    sequence++;
                }
                currentValue = (number / sequence);
            }
            else
            {
                sequence++;
            }
        }
        else
        {
            sequence++;
        }
    }
    console.log("finished at: " + new Date().toTimeString())
    console.log(primeFactors.toString());
}


largestPrimeFactorOf(600851475143);