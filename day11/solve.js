let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// input을 원숭이 객체 배열로 만들기
// 원숭이 객체는 아래와 같이 생김.
// {
//     items: [],
//     operation: function(){},
//     test: function(){},
//     trueAction : function(){},
//     falseAction :function(){},
// }

// input 파싱해서 객체로 만들기

const makeMonkeyList = (input) => {
    const monkeyList = []
    input.forEach((line, index) => {
        if(line.includes('Monkey')){
            const monkey = {}
            for(let i=1; i < 6; i++){
                const sliceInput = input[index+i].split(":")[1]
                switch(i){
                    case 1:
                        monkey.items = sliceInput.split(',').map((item)=> Number(item.trim()))
                        break;
                    case 2:
                        const operator = sliceInput.split(' ')[4]
                        if(sliceInput.split(' ')[5] === 'old'){
                            if(operator === '*'){
                                monkey.operation = (old) => old * old
                            }else if(operator === '+'){
                                monkey.operation = (old) => old + old
                            }
                        }else{
                            const value = Number(sliceInput.split(' ')[5])
                            if(operator === '*'){
                                monkey.operation = (old) => old * value
                            }else if(operator === '+'){
                                monkey.operation = (old) => old + value
                            }
                        }
                        break;
                    case 3:
                        const value = Number(sliceInput.split(' ')[3])
                        monkey.test = (old) => old % value === 0
                        break;
                    case 4:
                        const trueTarget = Number(sliceInput.split(' ')[4])
                        monkey.trueAction = (value) => addToList(trueTarget, value)
                        break;
                    case 5:
                        const falseTarget = Number(sliceInput.split(' ')[4])
                        monkey.falseAction = (value) => addToList(falseTarget, value)
                        break;
                }
            }
            console.log(monkey)
        }
    })
}

makeMonkeyList(input)