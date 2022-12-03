let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const isLowerCase = (char) =>{
    return char === char.toLowerCase()
}
console.log(isLowerCase("A") === false)
console.log(isLowerCase("a") === true)

const changeCharToValue = (char)=>{
    if(isLowerCase(char)){
        return char.charCodeAt() - 96
    } else{
        return char.charCodeAt() - 38
    }
}
console.log(changeCharToValue("a") === 1)
console.log(changeCharToValue("z") === 26)
console.log(changeCharToValue("A") === 27)
console.log(changeCharToValue("Z") === 52)

const splitWithLength = (text)=>{
    const firstValue = text.slice(0, text.length / 2)
    const secondValue = text.slice( -(text.length / 2))
    return [firstValue, secondValue]
}

console.log(splitWithLength("AAABBB")) // ["AAA","BBB"]

const findValueInText = (char, text) => {
    return text.includes(char)
}

console.log(findValueInText("A","CCDD") === false)
console.log(findValueInText("A","CCAA") === true)

const splitTextWithChar = (text) => {
    return text.split('',text.length)
}

const firstResult = ()=>{
    const value = input.reduce((prev, curr)=>{
        const splittedArray = splitWithLength(curr);

        const charListInFirstArray = splitTextWithChar(splittedArray[0])
        const duplicatedChar = charListInFirstArray.find((char)=>
            findValueInText(char, splittedArray[1])
        )

        return prev + changeCharToValue(duplicatedChar)
    }, 0)

    console.log(value)

}

firstResult()

