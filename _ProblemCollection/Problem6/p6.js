/*
Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/


square = (number) => {
    return (number * number);
}

findDifferenceBetweenSumOfSquaresAndSquareOfSum = (upToNumber) => {
    let startTime = Date.now();
    let sumOfSquare = 0;
    let sum = 0;
    // Get the sum of the squares and the sum
    for(let i = 1; i <= upToNumber; i++)
    {
        sumOfSquare+=square(i);
        sum+=i;
    }
    // Square the sum
    sum = square(sum);

    let output = sum > sumOfSquare ? (sum - sumOfSquare) : (sumOfSquare - sum);
    let endTime = Date.now();
    console.log("Completed in: " + (endTime - startTime) + " milliseconds.");
    console.log(output);
}

findDifferenceBetweenSumOfSquaresAndSquareOfSum(100);