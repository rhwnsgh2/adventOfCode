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

// firstSubmit()

const countUntilEqualOrLarge = (number, list)=>{
    let result = 0;
    let i=0;
    for(; i< list.length; i++){
        if(list[i] >= number){
            break;
        }
        result ++;
    }

    const slicedList = list.slice(i)

    if(slicedList.length > 0){
        let compareNumber = number-1; 
        let li = [];
        slicedList.forEach((item)=> {
            if(item > compareNumber){
                compareNumber = item;
                li.push(item)
            }
        })
        result += li.length
    }
    return result
}

const secondSubmit = ()=>{
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
                horizontalListForward.reverse()
                verticalListForward.reverse()

                const result = [horizontalListForward, horizontalListBehind, verticalListForward, verticalListBehind].reduce((prev, curr) =>{   
                    if(curr.length === 0) return prev
                    const functionResult = countUntilEqualOrLarge(item, curr)
                    // console.log("test", item, curr, functionResult)
                    return prev * functionResult
                }, 1)

                resultList[yIndex][xIndex] = result
            }
        })
    })
    console.log(resultList)
    console.log(resultList.flat().sort((a,b)=>b-a))
    // console.log(JSON.stringify(resultList) === JSON.stringify([[4,2,2,1],[2,1,2,1],[2,2,1,1]]))
}

secondSubmit()