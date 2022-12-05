let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const formattedInput = ()=>{
    const container =containerInput()
    const actions = actionInput()
    actions.forEach((action )=>{
        moveAction(action.moveItemCount, action.fromContainer, action.toContainer, container)
    })
    console.log(container)
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
            if(item !== '   ') container[i+1].push(item)
        }  
    })
    return container
}

const actionInput = ()=>{
    const actionInputContainer = input.slice(10, input.length)

    const result = actionInputContainer.map(actionInput => {
        const splitWithWhiteSpace = actionInput.split(' ')
        const moveItemCount = splitWithWhiteSpace[1]
        const fromContainer = splitWithWhiteSpace[3]
        const toContainer = splitWithWhiteSpace[5]
        return {
            moveItemCount,
            fromContainer,
            toContainer
        }
    })

    return result;
}

const moveAction = (itemCount, from, to, container)=>{
    for(let i=0; i < itemCount; i ++){
        const removeItem = container[from].shift()
        container[to].push(removeItem)
    }
}

formattedInput()