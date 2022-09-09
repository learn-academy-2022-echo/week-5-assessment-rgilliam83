// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// const { exportAllDeclaration } = require("@babel/types")
// const { it } = require("node:test")

// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

//PSEUDO Code:
    // create describe function. Call it codedMessage
    // create the it function with the description "Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e'  to  3, 'i' to 1, and 'o' to 0."
    // state desired outcomes with expect statements contained declared variables


describe("codedMessage", () => {
    it("Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {

    
const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

            expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
            expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
            expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
})
})

// yarn run v1.22.19
// warning package.json: No license field
// $ /Users/learnacademy/Desktop/week-5-assessment-rgilliam83/node_modules/.bin/jest
//  FAIL  ./code-challenges.test.js
//   codedMessage
//     ✕ Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

//   ● codedMessage › Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

//     ReferenceError: codedMessage is not defined

//       31 | // Expected output: "3cc3ntr1c"
//       32 |
//     > 33 |             expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
//          |             ^
//       34 |             expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
//       35 |             expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
//       36 | })

//       at Object.expect (code-challenges.test.js:33:13)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.163 s
// Ran all test suites.
// error Command failed with exit code 1.
// info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

// b) Create the function that makes the test pass.

// Pseudo Code:
// define codedMessage function, setting string as paramater 
// declare varriables arrayOne and arrayTwo
// .split method will allow the string to switch to the expected array
// use .map method to iterate through entire array
// use if/else if/else conditional to replacement is needed as it pertains to each index
//.join will return expected string

const codedMessage = (string) => {
        let arrayOne= string.split('')
        let arrayTwo= arrayOne.map ((value) => {
        if (value.toUpperCase() === "A"){
           return value = 4 
        }else if (value.toUpperCase() === "E"){
           return value = 3
        }else if (value.toUpperCase() === "I"){
           return value = 1
       }else if (value.toUpperCase() === "O"){
           return value = 0
       }else{
   return value 
   }
    })
   return arrayTwo.join('')
   }

//    yarn run v1.22.19
// warning package.json: No license field
// $ /Users/learnacademy/Desktop/week-5-assessment-rgilliam83/node_modules/.bin/jest
//  PASS  ./code-challenges.test.js
//   codedMessage
//     ✓ Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0. (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.173 s
// Ran all test suites.
// ✨  Done in 0.52s.
    

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

//PSEUDO Code:
    // create describe function. Call it allWords
    // create the it function with the description "Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter"
    // state desired outcomes with expect statements contained declared variables


describe("allWords", () => {
    it("Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter", () => {

        const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
        const letterA = "a"
        // Expected output: ["Mango", "Apricot", "Peach"]
        const letterE = "e"
        // Expected output: ["Cherry", "Blueberry", "Peach"]

        expect(allWords(fruitArray, letterA)).toEqual((["Mango", "Apricot", "Peach"]))
        expect(allWords(fruitArray, letterE)).toEqual((["Cherry", "Blueberry", "Peach"]))

    })
})

// yarn run v1.22.19
// warning package.json: No license field
// $ /Users/learnacademy/Desktop/week-5-assessment-rgilliam83/node_modules/.bin/jest
//  FAIL  ./code-challenges.test.js
//   codedMessage
//     ✓ Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0. (1 ms)
//   allWoods
//     ✕ Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter (1 ms)

//   ● allWoods › Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter

//     ReferenceError: allWords is not defined

//       128 |         // Expected output: ["Cherry", "Blueberry", "Peach"]
//       129 |
//     > 130 |         expect(allWords(fruitArray)).toEqual((["Mango", "Apricot", "Peach"]))
//           |         ^
//       131 |         expect(allWords(fruitArray)).toEqual((["Cherry", "Blueberry", "Peach"]))
//       132 |
//       133 |     })

//       at Object.expect (code-challenges.test.js:130:9)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total
// Snapshots:   0 total
// Time:        0.194 s
// Ran all test suites.
// error Command failed with exit code 1.
// info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

// b) Create the function that makes the test pass.

// Pseudo code:
    // declare allWords function
    // establish expected parameters
    // emplement .filter function to cycle through fruitArray 
    // establish return using .include for values that contain specified letter

fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

letterA = "a"
// # Expected output: ["Mango", "Apricot", "Peach"]
letterE = "e"
// # Expected output: ["Cherry", "Blueberry", "Peach"]

const allWords = (array, letter) => {
    return array.filter (word => {
    return word.toLowerCase().includes(letter)
   })
  }

//   yarn run v1.22.19
// warning package.json: No license field
// $ /Users/learnacademy/Desktop/week-5-assessment-rgilliam83/node_modules/.bin/jest
//  PASS  ./code-challenges.test.js
//   codedMessage
//     ✓ Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0. (1 ms)
//   allWords
//     ✓ Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.173 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.56s.

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

//PSEUDO Code:
    // create describe function. Call it fullHouse
    // create the it function with the description "Create a function that takes in an array of 5 numbers and determines whether or not the array is a 'full house'"
    // state desired outcomes with expect statements contained declared variables


describe("fullHouse", () =>{
    it("Create a function that takes in an array of 5 numbers and determines whether or not the array is a 'full house'", () => {

        const hand1 = [5, 5, 5, 3, 3]
        // Expected output: true
        const hand2 = [5, 5, 3, 3, 4]
        // Expected output: false
        const hand3 = [5, 5, 5, 5, 4]
        // Expected output: false
        const hand4 = [7, 2, 7, 2, 7]
        // Expected output: true

        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
        expect(fullHouse(hand4)).toEqual(true)


    })
})


// yarn run v1.22.19
// warning package.json: No license field
// $ /Users/learnacademy/Desktop/week-5-assessment-rgilliam83/node_modules/.bin/jest
//  FAIL  ./code-challenges.test.js
//   codedMessage
//     ✓ Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0. (1 ms)
//   allWords
//     ✓ Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter
//   fullHouse
//     ✕ Create a function that takes in an array of 5 numbers and determines whether or not the array is a 'full house'

//   ● fullHouse › Create a function that takes in an array of 5 numbers and determines whether or not the array is a 'full house'

//     ReferenceError: fullHouse is not defined

//       223 |         // Expected output: true
//       224 |
//     > 225 |         expect(fullHouse(hand1)).toEqual(true)
//           |         ^
//       226 |         expect(fullHouse(hand2)).toEqual(false)
//       227 |         expect(fullHouse(hand3)).toEqual(false)
//       228 |         expect(fullHouse(hand4)).toEqual(true)

//       at Object.expect (code-challenges.test.js:225:9)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 2 passed, 3 total
// Snapshots:   0 total
// Time:        0.194 s
// Ran all test suites.
// error Command failed with exit code 1.
// info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.



// b) Create the function that makes the test pass.

//create an object which holds the count of each of the value.
//establish parameters for arr
//generate for loop that takes in argument which will interate through each index position of array
    //establish new varible countObj
    //countObj will take in the index position of array adding each index to be evaluated together to determine full house is obtained
    //based on conditionals
//set conditionals to return expected boolean response using higher order function .value
//


//To check full house
const fullHouse = (arr) => {
    let countObj = {}
    for(let i of arr){
      countObj[i] = (countObj[i] || 0) + 1;
    }
    let vals = Object.values(countObj);
    if((vals[0] === 2 && vals[1] === 3) || (vals[1] === 2 && vals[0] === 3)){
      return true;
    }
    return false;
  }
  
//   yarn run v1.22.19
// warning package.json: No license field
// $ /Users/learnacademy/Desktop/week-5-assessment-rgilliam83/node_modules/.bin/jest
//  PASS  ./code-challenges.test.js
//   codedMessage
//     ✓ Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0. (1 ms)
//   allWords
//     ✓ Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter
//   fullHouse
//     ✓ Create a function that takes in an array of 5 numbers and determines whether or not the array is a 'full house'

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.177 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.79s.
  