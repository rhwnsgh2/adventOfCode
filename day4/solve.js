let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const formatInput = ()=>{
    const result = input.map((inputLine)=>{
         return inputLine.split(',').map((item)=>{
            const splitWithHyphen = item.split('-')
            return { 
                firstValue: splitWithHyphen[0],
                lastValue :  splitWithHyphen[1],
            }
         })
    })
    return result
} // [ [{first, last}, {first, last}] , ... ]

formatInput()