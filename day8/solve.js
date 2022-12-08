let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const splitListWithElement = (element, list) =>{
    const copiedList = list.slice()
    const index = copiedList.indexOf(element)

    const forwardList = copiedList.splice(index + 1)
    const behindList = copiedList.slice(0, copiedList.length - 1)
    
    return [behindList, forwardList]
}

const hasEqualOrLargerNumber = (number, list) =>{
    let result = false
    
    list.forEach((item)=>{
        if(number <= item) result =  true 
    })

    return result
}

const inputList = input.map((line)=>{
    return line.split('').map(Number)
})

const listCompareFunction = (list)=>{
    return list.reduce((prev, curr) =>  {
        const [behindList, forwardList] = splitListWithElement(curr, list)
        console.log(hasEqualOrLargerNumber(curr, forwardList))
        if(!hasEqualOrLargerNumber(curr, behindList) || !hasEqualOrLargerNumber(curr, forwardList)) return prev + 1;
        return prev;
    }, 0)
}

console.log(listCompareFunction([1,2,3,4,5]))
// console.log(inputList)