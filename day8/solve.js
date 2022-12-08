let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const splitListWithIndex = (index, list) =>{
    const copiedList = list.slice()
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

const emptyResultList = inputList.map((input)=> input.map(()=>false))

const firstSubmit = ()=>{
    const input = inputList

    const resultList = emptyResultList

     input.forEach((horizontalList, yIndex) => {
        horizontalList.forEach((item,xIndex) => {
            if(resultList[yIndex][xIndex] !== true){
                const [horizontalListForward, horizontalListBehind] = splitListWithIndex(xIndex, horizontalList)
                
                const verticalList = [];
                for(let i=0; i< input.length; i++){
                    verticalList.push(input[i][xIndex])
                }
    
                const [verticalListForward, verticalListBehind] = splitListWithIndex(yIndex, verticalList)
    
                const result = [horizontalListForward, horizontalListBehind, verticalListForward, verticalListBehind].reduce((prev, curr) =>{
                    if(prev === false){
                        return !hasEqualOrLargerNumber(item, curr)
                    }
                    return prev;
                }, false)

                resultList[yIndex][xIndex] = result
            }
        })
    })
    
    console.log(resultList.reduce((prev,curr)=>{
        return prev + curr.reduce((prev, curr) => {
            if(curr) return prev + 1
            return prev
        })
    },0))

}

firstSubmit()