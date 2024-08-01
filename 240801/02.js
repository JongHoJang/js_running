// 1. 출력값과 출력되는 값의 이유를 설명해주세요
// yuno는 글로벌 스코프로 접근이 가능, 그리고 myName 안에 있는 name의 변수가 yuno2이므로 a를 실행했을때 function myName의 name을 호출
var name = "yuno";

function myName() {
  var name = "yuno2";
  function a() {
    console.log(name);
  }
  return a();
}

myName();

// 2. 출력값과 출력되는 값의 이유를 설명해주세요
// var는 함수 스코프 > 결국 함수 전체에서 동일하게 취급 > if 문에서 2로 재 할당 되었으니 2가 호출
function test() {
  var x = 1;

  if (true) {
    var x = 2;
  }

  console.log(x);
}

test();

// 3.화살표 함수와 일반함수의 this의 출력할 값이 다른 이유를 설명해주세요.
// 화살표 함수는 this가 정의된 위치에서의 this 값을 그대로 사용
// 일반 함수에서는 함수가 호출될때 this가 결정 > 전역객체

const nameObj = {
  name: "yuno",
  method: function () {
    const arrow = () => {
      console.log(`화살표 함수 : ${this.name}`);
    };
    function normal() {
      console.log(`일반 함수 : ${this.name}`);
    }
    arrow();
    normal();
  },
};

nameObj.method();
