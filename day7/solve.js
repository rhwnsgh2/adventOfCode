let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const parseInputToCommandList = (rawInput) => {
    const input = rawInput.slice()

    const result = []
    let lsResult = []
    input.forEach(line => {
        const splitWithWhiteSpace = line.split(' ')
        if(splitWithWhiteSpace[0] === '$'){
            if(lsResult.length > 0){
                result.push({type: "lsResult", result : lsResult});
                lsResult = []
            }

            if(splitWithWhiteSpace[1] === 'cd') {
                result.push({type:"cd", target : splitWithWhiteSpace[2]})
            }
            // else{
            //     result.push({type:"ls"})
            // }
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


const cdCommand = (currentPath, target) =>{
    const path = currentPath.slice();

    if(target === '..'){
        path.pop()
    }else{
        path.push(target)
    }

    return path
}

const getCurrentPath = (pathHistory) => {
    if(pathHistory.length === 0){
        return '/'
    }
    return pathHistory[pathHistory.length - 1]
}

const createDirectoryWithCommandList = (commandList)=>{
    let pathHistory = []
    let directory = {}
    commandList.forEach((command)=>{
        if(command.type === 'cd'){
            pathHistory = cdCommand(pathHistory, command.target)
        }else if(command.type === 'lsResult'){
            const currentPath = getCurrentPath(pathHistory)
            directory[currentPath] = command.result
        }
    })

    return directory
}

const main = ()=>{
    const commandList = parseInputToCommandList(input)
    const directory = createDirectoryWithCommandList(commandList)
}