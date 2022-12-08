let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const splitListWithElement = (element, list) =>{
    const copiedList = list.slice()
    const index = copiedList.indexOf(element)

    const forwardList = copiedList.splice(index + 1)
    const behindList = copiedList.slice(0, copiedList.length - 1)
    
    return [behindList, forwardList]
}