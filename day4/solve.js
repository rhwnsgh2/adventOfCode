let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sortWithLength = (list)=>{
    return list.sort((a,b)=> (a.lastValue - a.firstValue) - (b.lastValue - b.firstValue))
}
const formatInput = ()=>{
    const result = input.map((inputLine)=>{
        const formattedList = inputLine.split(',').map((item)=>{
            const splitWithHyphen = item.split('-')
            return { 
                firstValue: Number(splitWithHyphen[0]),
                lastValue :  Number(splitWithHyphen[1]),
            }
         })

        const sortedList = sortWithLength(formattedList)
        return sortedList
    })
    return result
} // [ [{short, long}, {short, long}] , ... ]





const firstSubmit = ()=>{
    const formattedInput = formatInput()
    const result = formattedInput.reduce((prev,curr)=>{
        if(curr[0].firstValue >= curr[1].firstValue && curr[0].lastValue <= curr[1].lastValue){
            return prev + 1
        }
        return prev
    },0)
    
    console.log(result)
}

firstSubmit()