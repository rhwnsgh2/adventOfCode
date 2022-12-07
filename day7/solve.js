let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const parseInputToCommandList = (rawInput) => {
    const input = rawInput.slice()
    let pathHistory = []
    let lsResult = []
    let directory = {}

    const pathHistoryToName = (pathHistory)=>{
        const pathHistoryToText = pathHistory.join('/') + '/';
        if(pathHistoryToText.slice(0,2) === '//') {
            return pathHistoryToText.slice(1,pathHistoryToText.length)
        }
        return pathHistoryToText
    }

    input.forEach((line, index) => {
        const splitWithWhiteSpace = line.split(' ')
        if(splitWithWhiteSpace[0] === '$'){
            if(lsResult.length > 0){
                directory[pathHistoryToName(pathHistory)] = lsResult
                lsResult=[]
            }

            if(splitWithWhiteSpace[1] === 'cd') {
                pathHistory = cdCommand(pathHistory, splitWithWhiteSpace[2])
            }
        }else if(splitWithWhiteSpace[0] === "dir"){
            lsResult.push({
                type : "dir",
                name: pathHistoryToName(pathHistory) + splitWithWhiteSpace[1] +'/'
            })
        }else{
            lsResult.push({
                type:"file",
                name: splitWithWhiteSpace[1],
                size: Number(splitWithWhiteSpace[0])
            })
        }
        if(input.length-1 === index){
            directory[pathHistoryToName(pathHistory)] = lsResult
        }
    })

    return directory
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



const firstSubmit = ()=>{
    const directories = parseInputToCommandList(input)
    
    const getDirectoryFileSize = (directory) =>{
        return directory.reduce((prev,curr)=>{
            if(curr.type === "file"){
                return prev + curr.size
            }else if(curr.type === "dir"){
                return prev + getDirectoryFileSize(directories[curr.name])
            }
        }, 0)
    }
    
    const result = Object.keys(directories).reduce((prev,curr)=> { 
        console.log(curr)
        const totalSize = getDirectoryFileSize(directories[curr])
        if(totalSize <= 100000) {
            console.log(curr, totalSize)
            return prev + totalSize
        }
        return prev 
    },0)

    console.log(result)
}

firstSubmit()

const secondSubmit = ()=>{
    const directories = parseInputToCommandList(input)
    
    const getDirectoryFileSize = (directory) =>{
        return directory.reduce((prev,curr)=>{
            if(curr.type === "file"){
                return prev + curr.size
            }else if(curr.type === "dir"){
                return prev + getDirectoryFileSize(directories[curr.name])
            }
        }, 0)
    }

    const totalSize = 70000000
    const wantSize = 30000000
    const availableSize = totalSize - getDirectoryFileSize(directories['/'])

    const result = []
    Object.keys(directories).forEach((directory)=> { 
        const directorySize = getDirectoryFileSize(directories[directory])
        if(directorySize > wantSize - availableSize) {
            result.push(directorySize)
        }
    },0)
    console.log(result.sort((a,b)=> a-b)[0])
}

secondSubmit()