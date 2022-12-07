let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const parseInput = (rawInput) => {
    const input = rawInput.slice()

    input.forEach(line => {
        const splitWithWhiteSpace = line.split(' ')
        if(splitWithWhiteSpace[0] === '$'){
            if(splitWithWhiteSpace[1] === 'cd') {
                cdCommand()
            }else{
                lsCommand()
            }
        }
    })
}

const cdCommand = ()=>{

}

const lsCommand = ()=>{
    
}

parseInput(input)