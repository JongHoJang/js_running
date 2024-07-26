//해당 문제를 forEach로 변경하여 풀어주세요
// 1.
let arr = [10, 20, 30];

// 해당 로직을 작성하세요
let result = [];
arr.forEach(function (num) {
  result.push(num * 10);
});

// 결과 값: [100, 200, 300] 출력해주세요
console.log(result);

// 2.
let arr2 = [10, 22, 33];
// 5의 배수를 찾아 반환하세요
// 해당 로직 작성해주세요

let result2 = [];
arr2.forEach(function (num) {
  if (num % 5 === 0) {
    result2.push(num);
  }
});

console.log(result2);

// 결과값 [10]
