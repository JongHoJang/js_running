// 05. 평균 점수 구하기
// 학교에서 시험을 보았는데 전산 문제로 한 문제의 답이 전부 오답처리가 된 바람에 학생들의 점수를 전부 3점씩 올려주어야 합니다.
// scores에 있는 학생들의 점수를 반복문을 통해 3점씩 올리게 고쳐주시는데 4번 문제를 통해 만든 계산기 함수를 통해 더해주세요.

const scores = [36, 62, 72, 55, 86, 95, 92, 48, 81];

// 문제 4의 계산기
function calculate(num1, operator, num2) {
  let result;
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num1 / num2;
  }
  return result;
}

const num2 = 3;
const operator = "+";

for (let i = 0; i < scores.length; i++) {
  let result = calculate(scores[i], operator, num2);
  console.log(result);
}

// 기대값: [39, 65, 75, 58, 89, 98, 95, 51, 84]
