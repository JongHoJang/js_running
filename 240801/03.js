// 1. <빈칸>을 작성해주세요

const obj1 = {
  value: 20,
  getValue() {
    return this.value;
  },
};
console.log(obj1.getValue()); //  출력값 20

// 2. 웹 브라우저에서 setTimeout 함수 내에서 this가 가리키는 출력값이 왜 그런지 설명해주세요
// 메서드에서 호출하고 있으니까 This는 그 안에서..
// 화살표 함수는 스코프 안에 있는 this > setTimeout은 전역에서 찾기 때문에...

const obj2 = {
  method: function () {
    console.log("첫번째 this : ", this);

    const innerMethod = () => {
      setTimeout(function () {
        console.log("두번째 this : ", this);
      });
    };
    innerMethod();
  },
};

obj2.method();
