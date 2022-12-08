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

const emptyResultList = inputList.map(()=> false)

const result = ()=>{
    const input = inputList
    const emptyList = emptyResultList

    console.log(input)
}

const getVisibleList = (list)=>{
    let currentMaxValue = 0
    return list.map((value)=>{
        if(value >= currentMaxValue){
            currentMaxValue = value
            return true
        } 
        return false
    })
}