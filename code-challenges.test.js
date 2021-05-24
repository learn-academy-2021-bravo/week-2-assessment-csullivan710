// ASSESSMENT 2: Coding practical questions with Jest

 const { it, test, expect } = require("@jest/globals")
 const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisible by three"
//create your desription
//define function of description


//set expectations 
//  describe("divisible", () => {
//     test("returns divisible by three", () =>{
//         expect(divisibleByThree(num1)).toEqual("divisible by three")
//         expect(divisibleByThree(num2)).toEqual("divisible by three")
//         expect(divisibleByThree(num3)).not.toBe("divisible by three")
//     })
// })

// b) Create the function that makes the test pass.
//make your variable
//make function to equal divisible by three
//return if its divisible by three
// log results
 
// const divisibleByThree = (num) => {
//      if (num % 3 ==0 0){
//      return "${num}divisible by three"
//      }else{
//          "${num} is not divisible by three"
//      }
//     }
 




// // --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// // a) Create a test with expect statements for each of the variables provided.

 //var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// / Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

//var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
//put inn describe and function name
//establish your test
//list expectations
//  fdescribe("toUpperCase", () => {
//      test("returns first letter of each word capitalized", () => {
//         expect(toUpperCase(["streetlamp", "potato", "teeth", "conclusion", "nephew"])).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
//         expect(toUpperCase(["temperature", "database", "chopsticks", "mango", "deduction"])).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
//      })
//  })



// // // // b) Create the function that makes the test pass
// // //make function to take in an array
// // //make loop to capitalize each first letter of strings
// // //return new array
// // //log results
// const toUpperCase = (array) => {
//     return array.map((elem) => {
//         return elem.charAt(0).toUpperCase() + elem.slice(1);
//     })
// }

    

 









// // --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// // a) Create a test with expect statements for each of the variables provided.
//establish definition
//write in expected returns for each vowerltester
 var vowelTester1 = "learn"
// // // Expected output: 1
  var vowelTester2 = "academy"
// // // Expected output: 0
  var vowelTester3 = "challenge"
// // // Expected output: 2
fdescribe("vowelFinder", () => {
    test("returns index of first vowel", () => {
        expect(vowelFinder(vowelTester1)).toEqual(1)
        expect(vowelFinder(vowelTester2)).toEqual(0)
        expect(vowelFinder(vowelTester3)).toEqual(2)
    })
 })




// // // b) Create the function that makes the test pass

// //creat a function called vowelTester
// //check through each char to find if it is a vowel
// //return index when it finds vowel
const vowelFinder = (str) => {
    for (let i=0; i < str.length; i++){
        if (
            str[i] ==="a" ||
            str[i] ==="e" ||
            str[i] ==="i" ||
            str[i] ==="o" ||
            str[i] ==="u" 
        ) {
            return i;
        }
    }
}
    
