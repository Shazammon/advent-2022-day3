const fs = require('fs')
const { parse } = require('path')


let data = fs.readFileSync('data.txt', 'utf-8')

const stringData = data.split(/\r?\n/)

// console.log(stringData)

function findMatches() {
    // define all variables
    let strLength = 0
    for (let i = 0; i < stringData.length; i++) {
        // find length of string and divide by two

        // for each character, compare to character of second string
        // if match is found, add to an array
        // find value of all letters in array
        // add all values together
    }
}