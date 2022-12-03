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