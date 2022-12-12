let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const commandList = (target) =>{
    const input = target.slice()
    const result = []
    
    input.forEach((inputLine) => {
        const command = inputLine.split(' ')[0]
        if(command === "noop"){
            result.push({command})
        }else {
            const variable = inputLine.split(' ')[1]
            result.push({command, variable})
        }
    })
    return result
}

console.log(commandList(input))