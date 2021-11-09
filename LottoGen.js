// const arr = [] // const 인데 왜 문제 안생김?
//
// arr.push(1)
// arr.push(2)
//
// console.log(arr)
//------------------------------------------------
// const temp = [1,2,3]
//
// arr =temp // 이런식이면 문제생김!
//
// // const는 변수에 선언된 내용물이 바뀌면 에러나지만, 그 내용물이 가리키는 배열 안 내용물은 바껴도 상관없는것!

const arr = []

while (true) {

   // 숫자를 생성 1 -45 사이에 숫자
    const num = parseInt(Math.random()*45) +1

    console.log(num)
    //검사
    const index = arr.indexOf(num)

    console.log(`Num: ${num} Index: ${index}`)

    if(index >= 0){
        continue
    }
    const newLength = arr.push(num)

    if(newLength ===6){
        break
    }


}

console.log(arr)
