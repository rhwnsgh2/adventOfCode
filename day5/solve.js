let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const formattedInput = ()=>{
    console.log(containerInput())
}

const containerInput = ()=>{
    const textChunkSize = 3;
    const container = {}
    const inputContainer = input.slice(0,8)
    inputContainer.forEach(line => {
        for(let i=0; i < line.length /4 ; i++){
            const whiteSpace = i
            const item = line.slice(i*textChunkSize+whiteSpace, ((i+1) * textChunkSize)+whiteSpace)
            if(!container[i+1]){
                container[i+1] = []
            }
            if(item !== '   ') container[i+1].unshift(item)
        }  
    })
    return container
}

formattedInput()