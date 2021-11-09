

const arr = ['타노스', '아이언맨', '블랙 위도우']

console.log(arr.length)

console.log(arr[0])
console.log(arr[1])
console.log(arr[2])

// arr[3] = '블랙팬서'

// 맨 마지막에 추가
const changedLength = arr.push("블랙팬서")

console.log(changedLength)
console.log(arr[3])

console.log(arr.indexOf('타노스'))
console.log(arr.indexOf('캡틴 아메리카')) // -1 -> 없단의미

console.log(arr)

arr.splice(1,1) // 1번부터 1개 삭제

console.log(arr)

// for (let i = 0; i < arr.length ; i++) {
//     console.log(i)
//     console.log(arr[i])
//     if (arr[i] === '블랙 위도우'){
//         break
//     }
// }
// 0
// 타노스
// 1
// 블랙 위도우

// for (let i = 0; i < arr.length ; i++) {
//     if (arr[i] === '블랙 위도우'){
//         break
//     }
//     console.log(i)
//     console.log(arr[i])
// }
// // 0
// // 타노스
for (var i = 0; i < arr.length ; i++) {
    if (arr[i] === '블랙 위도우') {
        continue
    }
    console.log(i)
    console.log(arr[i])
}
console.log("---------------------------------")
    console.log(i)