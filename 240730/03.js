// 3. PromiseAll 다뤄보기 (빈칸 채우기)
// 세 개의 setTimeout 비동기 함수를 각각 직렬, 병렬로 호출하는 코드입니다. 아래의 코드를 보고 < 빈칸 > 부분을 각각 채워주시고, 그렇게 생각하는 이유도 내용으로 적어주세요. (총 빈칸 3개)

function task1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 1 Complete");
    }, 1000);
  });
}

function task2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 2 Complete");
    }, 2000);
  });
}

function task3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 3 Complete");
    }, 3000);
  });
}

async function runTasksSequential() {
  console.time("Sequential");
  try {
    const result1 = await task1();
    console.log(result1);
    const result2 = await task2();
    console.log(result2);
    const result3 = await task3();
    console.log(result3);
  } catch (error) {
    console.error("Error:", error);
  }
  console.timeEnd("Sequential");

  // 예상되는 대략적인 시간과 그 이유 < 빈칸 1 >
  // 각각의 독립적인 await이기 때문에 result1이 끝나면 2, 3이 호출되기때문에 6초 후에 출력이 끝남
}

async function runTasksParallel() {
  console.time("Parallel");
  try {
    // 병렬로 promise들을 한 번에 처리하는 코드
    const results = await Promise.all([task1(), task2(), task3()]); //< 빈칸 2 >
    results.forEach((result) => console.log(result));
  } catch (error) {
    console.error("Error:", error);
  }
  console.timeEnd("Parallel");
  // 예상되는 대략적인 시간과 그 이유 < 빈칸 3 >
  // 모든 task의 시간을 기다렸다가 한번에 출력이 되기 때문에 제일 오래 걸리는 task3의 시간인 3초 후에 출력
}

// 함수 호출
runTasksSequential().then(() => runTasksParallel());
