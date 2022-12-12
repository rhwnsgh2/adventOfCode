let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const commandList = (target) =>{
    const input = target.slice()
    const result = []
    
    input.forEach((inputLine) => {
        const command = inputLine.split(' ')[0]
        if(command === "noop"){
            result.push({name : command})
        }else if(command === "addx"){
            const variable = inputLine.split(' ')[1]
            result.push({name: command, variable : Number(variable)})
        }
    })
    return result
}

const executeCommand = (command, cycle) => {
    if(command.name === "addx"){
        cycle.push((value)=> value)
        cycle.push((value) =>{ return value + command.variable })
    } else{
        cycle.push((value)=> value)
    }
}

const firstSubmit = ()=>{
    const commands = commandList(input)

    const cycle = [(value)=> value]
    commands.forEach((command) => executeCommand(command, cycle))

    let list = [20,60,100,140,180,220]
    let answer = 0;

    cycle.reduce((prev, curr, index)=> {
        if(list.includes(index)) {
            answer += index * prev
        }
        
        return curr(prev)
    },1)

    console.log(answer)
}

firstSubmit()