let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const isLowerCase = (char) =>{
    return char === char.toLowerCase()
}

console.log(isLowerCase("A") === false)
console.log(isLowerCase("a") === true)
