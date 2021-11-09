const readline = require('readline-sync');
// 1ft 3.5$
// 1ft = 30.48cm
// 300 * 200

// 창문 -> 가로 *2 세로 *2 -> 전체 샷시 길이

// 길이 cm-> ft
try {
    console.log('1피트당 샷시의 가격은 얼마인가요?')
// const perFeet = readline.prompt() // 자바면 여기 문자열이면 에러날수 있음
    const perFeet = parseFloat(readline.prompt()) // 요게 좀 더 나음

} catch(e) {
    console.log('다시해')
}

console.log('가로길이는 얼마인가요? cm')
const width = parseInt(readline.prompt())

console.log('세로길이는 얼마인가요? cm')
const height = parseInt(readline.prompt())

const totalLength = 2*(width + height)

let totalFeet = totalLength / 30.48

totalFeet = Math.ceil(totalFeet)

const totalPay = totalFeet * perFeet

console.log(`총 ${totalPay} $ 입니다.`)

// 가로길이를 실수로 피트를 입력하면, 수정이 안됨. 프로그램을 아래에서 위로는 못하게하나?
// 이를 위해 예외처리 사용 해야함