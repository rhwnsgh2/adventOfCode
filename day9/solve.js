let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const moveFunction = {
    up: function(){
        this.y += 1;
    },
    down: function(){
        this.y -= 1;
    },
    left: function(){
        this.x -= 1;
    },
    right: function(){
        this.x += 1;
    }}
     


const parseInput = (input)=>{
    return input.map((line)=>{
        const direction = line.split(' ')[0]
        const count = Number(line.split(' ')[1])
        return {direction, count}
    })
}

const move = (direction, target)=>{
    switch(direction){
        case "U":
            target.up()
            break;
        case "R":
            target.right()
            break;
        case "D":
            target.down()
            break;
        case "L":
            target.left()
            break;
    }
}

const isJoin = (head, tail)=>{
    if((Math.abs(head.x - tail.x)  <= 1) && (Math.abs(head.y - tail.y) <= 1)) return true
    return false  
}

const isSameLine = (head, tail) =>{
    if(head.x === tail.x || head.y === tail.y) return true
    return false
}

const getDirection = (direction, head, tail) => {
    if(direction === "R" || direction === "L"){
        return head.y - tail.y > 0 ? "U" : "D" 
    }else{
        return head.x - tail.x > 0 ? "R" : "L" 
    }
}

const firstResult = ()=>{
    const parsedInput = parseInput(input)
    const head = {x: 0, y:0, ...moveFunction}
    const tail = {x:0, y:0, ...moveFunction}
    const result = new Set()
    parsedInput.forEach(({direction, count}) => {
        for(let i=0; i < count; i++){
            move(direction, head)
            if(!isJoin(head, tail)){
                move(direction, tail)
                if(!isSameLine(head, tail)){
                    move(getDirection(direction, head, tail), tail)
                }
                result.add(JSON.stringify({x: tail.x, y: tail.y}))
                console.log(head.x, head.y, tail.x, tail.y, {direction, count})
            }
        }
    })
    console.log([...result].length)
}

// firstResult()


const secondSubmit = ()=>{
    const parsedInput = parseInput(input)
    const mainArray = []
    const result = new Set()

    const main = {x: 0, y:0, ...moveFunction}
    for(let i=0; i < 10; i++){
        mainArray.push({...main})
    }

    parsedInput.forEach(({direction, count}) => {
        for(let i=0; i < count; i++){
            move(direction, mainArray[0])

            mainArray.reduce((prev,curr) => {
                if(!isJoin(prev, curr)){
                    if(!isSameLine(prev, curr)){
                        let xDirection, yDirection;
                        yDirection = prev.y - curr.y > 0 ?  "U" : "D";
                        xDirection = prev.x - curr.x > 0 ?  "R" : "L";

                        move(yDirection, curr)
                        move(xDirection, curr)
                    }else {
                        let d;
                        if(prev.x === curr.x){
                            d = prev.y - curr.y > 0 ? "U" : "D"
                        }else {
                            d = prev.x - curr.x > 0 ? "R" : "L"
                        }
                        move(d, curr)
                    }
                }
                return curr
            })

            result.add(JSON.stringify({x: mainArray[mainArray.length - 1].x, y: mainArray[mainArray.length - 1].y})) 
        }

        // if(JSON.stringify(lastArray) !== JSON.stringify(mainArray.length -1)){
        //     result.add(JSON.stringify({x: mainArray[mainArray.length - 1].x, y: mainArray[mainArray.length - 1].y})) 
        // }
    })

    console.log([...result].length)
}
secondSubmit()