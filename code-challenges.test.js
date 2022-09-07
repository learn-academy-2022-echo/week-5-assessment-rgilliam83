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
    

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// b) Create the function that makes the test pass.

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// b) Create the function that makes the test pass.
