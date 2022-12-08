let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const splitListWithElement = (element, list) =>{
    const copiedList = list.slice()
    const index = copiedList.indexOf(element)

    const forwardList = copiedList.splice(index + 1)
    const behindList = copiedList.slice(0, copiedList.length - 1)
    
    return [behindList, forwardList]
}

const hasLargerNumber = (number, list) =>{
    list.forEach((item)=>{
        if(item < number) return true 
    })

    return false
}

const inputList = input.map((line)=>{
    return line.split('').map(Number)
})

console.log(inputList)