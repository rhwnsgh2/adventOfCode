let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

const MARKER = 4;

const firstSubmit = () =>{
    let result = 0;
    for(let i=0; i <input.length; i++){
        const compareString = input.slice(i, i+MARKER);
    }
}

const isUniqCharacterString = (inputString) =>{
    for(let i=0; i< inputString.length; i++){
        const sliceString = inputString.slice(i+1, inputString.length)
        if(sliceString.includes(inputString[i])) return false;
    }
    return true;
}

console.log(isUniqCharacterString("aaaa"))
console.log(isUniqCharacterString("abcd"))
console.log(isUniqCharacterString("dadada"))
firstSubmit()