// 1. 빈칸 채우기 문제
// 아래 내용에서 빈 칸에 들어갈 항목들을 채워주시고 왜 그렇게 생각했는지 본인의 생각을 간단하게 1줄 정도 같이 적어주세요.


1. let uninitialized;
console.log(uninitialized);
// 결과값 < undefined >
// 할당된 값이 없어서 undefined가 나옵니다. 


2. < const > apple = "사과";
apple = "바나나";
// TypeError: Assignment to constant variable
// const 인 경우 선언 후 값을 변경 할 수 없습니다. let으로 작성했다면 변경이 가능합니다.


3. let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]);
// 결과값 < 19 >
// 인덱스는 0부터 시작하기 때문에 4번째에 있는 19가 출력됩니다.


4. let mySchedule = "";
console.log(mySchedule || false); // < false >
console.log(!!mySchedule); // < false >
// 빈문자는 falsy한 값이므로 false OR false가 되어 두번째 연산자인 false가 나옵니다.
// false > true > false가 되어 false가 나옵니다.
