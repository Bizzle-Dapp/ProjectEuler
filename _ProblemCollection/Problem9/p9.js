/*

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a(sq) + b(sq) = c(sq)

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.

*/


let pythagoreanTripletArray = [];

isWholeNumber = (number) => {
    return ((number - Math.floor(number)) === 0)
}

// I feel i couldn't have written this without a Magnum Icecream.
findPythagoreanTripletsUpTo = (number) => {
    let pythagoreanTriplet = {
        a : 0,
        b : 0,
        c : 0
    }
    for(let i = 2; i < (number); i++)
    {
        pythagoreanTriplet.a = i;
        for(let t = (i+1); t < (number); t++)
        {
            pythagoreanTriplet.b = t;
            pythagoreanTriplet.c = (Math.sqrt((i*i) + (t*t)));
            if(isWholeNumber(pythagoreanTriplet.c))
            {
                pythagoreanTripletArray.push({a : pythagoreanTriplet.a, b : pythagoreanTriplet.b, c : pythagoreanTriplet.c});
            }
        }
    }
}

findProductOfPythagoreanTripletWhereSumOfABCIs = (number) => {
    let pythagoreanTripletSum = {};

    findPythagoreanTripletsUpTo(number);

    if(pythagoreanTripletArray.length > 0)
    {
        pythagoreanTripletArray.forEach(triplet => {
            if(triplet.a + triplet.b + triplet.c === number)
            {
                // Bingo
                pythagoreanTripletSum = triplet;
            }
        })
    }

    console.log(`Product of Triplet that have a sum of ${number} is: ` + (pythagoreanTripletSum.a * pythagoreanTripletSum.b * pythagoreanTripletSum.c) + `. They are ${pythagoreanTripletSum.a} ${pythagoreanTripletSum.b} and ${pythagoreanTripletSum.c}`);
}

findProductOfPythagoreanTripletWhereSumOfABCIs(1000);