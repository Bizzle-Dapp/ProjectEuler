/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/


isPalindrome = (number) => {
    // Convert number to string
    let convertedNumber = String(number);
    // Convert to array for reversal
    let convertNumberToArray = String(number).split('');
    // Prepare our reversed "number"
    let reversedNumber = "";
    convertNumberToArray.reverse().map((c) => {
        reversedNumber += c;
    })
    // Compare
    return (convertedNumber === reversedNumber);
}

findLargestPalindrome = (minValue, maxValue) => {
    let startTime = Date.now();
    let largestPalindrome = 0;
    for(i = minValue; i <= maxValue; i++)
    {
        for(l = minValue; l <= maxValue; l++)
        {
            if(isPalindrome((i*l)) && (i*l) > largestPalindrome)
            {
                largestPalindrome = (i*l);
            }
        }
    }
    let endTime = Date.now();
    console.log("Completed in: " + (endTime - startTime) + " milliseconds.");
    console.log("Largest Palindrome: " + largestPalindrome)
}

findLargestPalindrome(100, 999)