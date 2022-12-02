let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const OPPONENT = {
    A:"ROCK",
    B:"PAPER",
    C:"SCISSOR",
}
const RESULT ={
    X:"LOSE",
    Y:"DRAW",
    Z:"WIN"
}
const SCORE = {
    ROCK : "1",
    PAPER : "2",
    SCISSOR : "3"
}

const getChosenValueScore = (chosen) =>{
    return Number(SCORE[chosen])
}

const judgementScore = (result) =>{
    switch(result){
        case "WIN":
            return Number(6)
        case "LOSE":
            return Number(0)
        case "DRAW":
            return Number(3)
    }
}

const format = (input)=>{
    return input.map((item)=>{
        const splitItem = item.split(' ')
        return {opponent : OPPONENT[splitItem[0]], result: RESULT[splitItem[1]]}
    })
}//{ opponent: 'ROCK', result: "WIN" }

const judgement = (opponent, me) =>{
    switch(opponent){
        case "ROCK":
            if(me === "ROCK") return "DRAW"
            if(me === "SCISSOR" ) return "LOSE"
            if(me === "PAPER") return "WIN"
        case "SCISSOR":
            if(me === "ROCK") return "WIN"
            if(me === "SCISSOR" ) return "DRAW"
            if(me === "PAPER") return "LOSE"
        case "PAPER":
            if(me === "ROCK") return "LOSE"
            if(me === "SCISSOR" ) return "WIN"
            if(me === "PAPER") return "DRAW"
    }
}

const result = ()=>{
    const formattedInput = format(input)

    console.log(formattedInput.reduce((acc, curr) => {
        const judgeScore = judgementScore(curr.result)
        const me = ["ROCK","SCISSOR","PAPER"].find(value => judgement(curr.opponent, value) === curr.result)
        const chosenScore = getChosenValueScore(me)
        return acc + judgeScore + chosenScore
    }, 0))
}

result()