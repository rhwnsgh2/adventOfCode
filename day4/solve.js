let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const formatInput = ()=>{
    const result = input.map((inputLine)=>{
         return inputLine.split(',').map((item)=>{
            const splitWithHyphen = item.split('-')
            return { 
                firstValue: Number(splitWithHyphen[0]),
                lastValue :  Number(splitWithHyphen[1]),
            }
         })
    })
    return result
} // [ [{first, last}, {first, last}] , ... ]


const formattedInput = formatInput()

const sortWithLength = (list)=>{
    return list.sort((a,b)=> (a.lastValue - a.firstValue) - (b.lastValue - b.firstValue))
}
