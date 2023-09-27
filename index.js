// create an array that will pull out the odd number elements from an array
// create an arrays using the values given in the 4 examples from the only odds tab of workshop 14
// maybe write a code that takes out all odd nubmers ending in 1 3 5 7 9

const numbersArr = [2, 4, 6, 8, 11, 20, 15, 22]

const oddNumbers = numbersArr.filter(function (number) {
    return number % 2 !== 0;
});

console.log(oddNumbers);


const numbers2Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const oddnumbers2 = numbers2Arr.filter(function (number) {
    return number % 2 !==0;
});

console.log(oddnumbers2);

const numbers3Arr = [70, 42, 55, 81, 21, 91, 34]

const oddnumbers3 = numbers3Arr.filter(function (number) {
    return number % 2 !==0;
});

console.log(oddnumbers3);

const numbers4Arr = [2, 4, 6, 8, 10, 11, 12]

const oddnumbers4 = numbers4Arr.filter(function (number) {
    return number % 2 !==0;
});

console.log(oddnumbers4);

// create a code that accepts a string of lowercase letters and Print the word followed by how many consonants and vowels it has
// a loop will need to be made that checks for consonants and lists how many there were in the input array
// a loop will need to be made that checks for vowels and lists how many there were in the input array
// write a code so that the expected results look like "input array" has x consonants and x vowels


const count = (inputstring) => {

    let vow = 0;
    let cons = 0;

    for(let i =0; i < inputstring.length; i++){
        let ele = inputstring[i];
        if(ele == 'a' || ele == 'e' || ele == 'i' || ele == 'o' || ele == 'u')

        vow += 1;
        else
        cons += 1;
    };
    console.log(`${inputstring}` +" " + "has" + " " + `${cons}` + " " + "consonants and" + " " + `${vow}` + " " + "vowels")
    
}
count("hello")
count("ukelele")
count("awesome")
count("onomonopia")
count("textbook")

// create a reverse array, follow example given in block 14 lecture notes
// there is probably a better way to write this code, with the amount of time before the deadline this was effective in giving the desired output
const countdown = [1,2,3];

for(let index = countdown.length -1; index >= 0; index--) {
    console.log(countdown[index]);
};

// unsure how to make the output horizontal for each countdown versus vertical, have tried a few different codes but they seem to all output vertically

const countdown1 = [1,3,5,7,9,11];

for(let index = countdown1.length -1; index >= 0; index--) {
    console.log(countdown1[index]);
};

const countdown2 = [20,50,30,60,200];

for(let index = countdown2.length -1; index >= 0; index--) {
    console.log(countdown2[index]);
};

const countdown3 = [1,-1,2,-3,5,-8,13];

for(let index = countdown3.length -1; index >= 0; index--) {
    console.log(countdown3[index]);
};

// refer to past lecture for assistance with FizzBuzz
// set range to 100 per instructions
// if multiple of 3 print Fizz
// if mulitple of 5 print Buzz
// if mulitple of 15 3 * 5 print FizzBuzz

// if else code was the cleanest and simpliest for me to grasp after researching multiple ways to complete fizz buzz, multiple attempts were
// made before getting clean output without showing both the number and result of Fizz Buzz or both

    for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            console.log("FizzBuzz");
        } else if ( i % 3 === 0) {
            console.log("Fizz");
        } else if ( i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }


