let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const parseInput = (rawInput) => {
    const input = rawInput.slice()

    const result = []
    let lsResult = []
    input.forEach(line => {
        const splitWithWhiteSpace = line.split(' ')
        if(splitWithWhiteSpace[0] === '$'){
            if(lsResult.length > 0){
                result.push(lsResult);
                lsResult = []
            }

            if(splitWithWhiteSpace[1] === 'cd') {
                result.push(cdCommand)
            }else{
                result.push(lsCommand)
            }
        }else if(splitWithWhiteSpace[0] === "dir"){
            lsResult.push({
                type : "dir",
                name: splitWithWhiteSpace[1]
            })
        }else{
            lsResult.push({
                type:"file",
                name:splitWithWhiteSpace[1],
                size: Number(splitWithWhiteSpace[0])
            })
        }
    })
    return result
}

const cdCommand = (target)=>{
    return target
}

const lsCommand = ()=>{

}

console.log(parseInput(input))