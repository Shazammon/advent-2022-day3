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
    let matchArr = []
    for (let i = 0; i < stringData.length; i++) {
        // find length of string and divide by two
        runsack = stringData[i]
        // console.log(runsack)
        strLength = runsack.length / 2

        // console.log(strLength) 
        // for each character, compare to character of second string
        
        while (match === false) {
            let compOneItemNum = 0
            // console.log(runsack[j])
            for (let j = 0; j < strLength; j++) {
            
            if (runsack[compOneItemNum] === runsack[j+strLength]) {
                    match = true
                    // if match is found, add to an array
                    matchArr.push(runsack[compOneItemNum])
                    console.log(runsack[compOneItemNum])
                    break;
                }
            }
        compOneItemNum += 1
        }
    match = false

    // find value of all letters in array
    // add all values together
    }
}

findMatches()