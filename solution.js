const fs = require('fs')
const { parse } = require('path')


let data = fs.readFileSync('data.txt', 'utf-8')

const stringData = data.split(/\r?\n/)

// console.log(stringData)

function findMatches() {
    // define all variables
    let strLength = 0
    let match = false
    let runsack = ''
    for (let i = 0; i < stringData.length; i++) {
        // find length of string and divide by two
        runsack = stringData[i]
        console.log(runsack)
        strLength = runsack.length / 2

        // console.log(strLength) 
        // for each character, compare to character of second string
        // for (let j = 0; j < strLength; j++) {
        //     while (match === false) {
        //         console.log(stringData[j])
        //     }
        // }
        // if match is found, add to an array
        // find value of all letters in array
        // add all values together
    }
}
findMatches()