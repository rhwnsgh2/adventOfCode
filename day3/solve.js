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
