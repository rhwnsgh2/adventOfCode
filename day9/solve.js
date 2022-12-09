let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const moveFunction = {
    up: function(count){
        this.y += count;
    },
    down: function(count){
        this.y -= count;
    },
    left: function(count){
        this.x -= count;
    },
    right: function(count){
        this.x += count;
    }}
     


const parseInput = (input)=>{
    return input.map((line)=>{
        const direction = line.split(' ')[0]
        const count = Number(line.split(' ')[1])
        return {direction, count}
    })
}

const move = (direction, count, target)=>{
    switch(direction){
        case "U":
            target.up(count)
            break;
        case "R":
            target.right(count)
            break;
        case "D":
            target.down(count)
            break;
        case "L":
            target.left(count)
            break;
    }
}

const isJoin = (head, tail)=>{
    if((head.x - tail.x <= 1) && (head.y - tail.y <= 1)) return true
    return false  
}

const firstResult = ()=>{
    const parsedInput = parseInput(input)
    const head = {x: 0, y:0, ...moveFunction}
    const tail = {x:0, y:0, ...moveFunction}

    parsedInput.forEach(({direction, count}) => {
        move(direction, count, head)
    })
}

firstResult()