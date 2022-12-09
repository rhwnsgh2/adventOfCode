let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const head = {x: 0, y:0}
const tail = {x:0, y:0}

const parseInput = (input)=>{
    input.forEach((line)=>{
        const direction = line.split(' ')[0]
        const count = line.split(' ')[1]

        command(direction, count)
    })
}

const command = (direction, count)=>{
    
}