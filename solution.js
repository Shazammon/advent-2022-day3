const fs = require('fs')
const { parse } = require('path')


let data = fs.readFileSync('data.txt', 'utf-8')

const stringData = data.split(/\r?\n/)

const letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// console.log(stringData)

function findMatches() {
    // define all variables
    let strLength = 0
    let match = false
    let runsack = ''
    let matchArr = []
    let letterValue = 0
    let sumOfPriorities = 0
    for (let i = 0; i < stringData.length; i++) {
        // find length of string and divide by two
        runsack = stringData[i]
        // console.log(runsack)
        strLength = runsack.length / 2

        // console.log(strLength) 

        // for each character, compare to character of second string
        let compOneItemNum = 0
        while (match === false) {
            // console.log(runsack[j])
            for (let j = 0; j < strLength; j++) {
            
            if (runsack[compOneItemNum] === runsack[j+strLength]) {
                    match = true
                    // if match is found, add to an array
                    matchArr.push(runsack[compOneItemNum])
                    // console.log(runsack[compOneItemNum])
                    break;
                }
            }
        compOneItemNum += 1
        }
        match = false

    }
    // find value of all letters in array
    for (let k = 0; k < matchArr.length; k++) {
        console.log(matchArr[k])
        letterValue = letterArray.indexOf(matchArr[k]) + 1
        console.log(letterValue)
        sumOfPriorities = sumOfPriorities + letterValue
    }
    // add all values together
    // console.log(matchArr)
    return sumOfPriorities
}

// console.log(findMatches())

function badgeFunction() {
    let badgeArr = []
    // upper for loop 
    for (let i = 0; i < stringData.length/3; i+3) {
        runsackOne = stringData[i] 
        runsackTwo = stringData[i+1] 
        runsackThree = stringData[i+2]
        let match = '' 
        for (let j = 0; j < runsackOne.length; j++) {
            let charOne = runsackOne[j]
            for (let k = 0; k < runsackTwo.length; k++) {
                if (runsackOne[charOne] === runsackTwo[k]) {
                    match = runsackOne[charOne]
                    for (let l = 0; l < runsackThree.length; l++) {
                        if (match === runsackThree[l]) {
                            badgeArr.push(match)
                            break;
                        }
                    }
                }
            }
            charOne += 1
        }
    }

}

badgeFunction()
