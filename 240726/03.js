const student = {
  name: "yuno",
  age: "30",
  skill: ["javascript"],
  address: {
    city: "seoul",
  },
};

// 얕은 복사를 수행하여 shallowCopy를 만들어주세요.
const shallowCopy = student;

// 깊은 복사를 수행하여 deepCopy를 만들어주세요.
const deepCopy = JSON.parse(JSON.stringify(student));

// 얕은 복사 객체와 원본 객체를 비교하여 출력해주세요
console.log(
  "1. 원본 객체(student)와 얕은 복사 객체가 같을까요? > 같다 : 얕은 객체와 원본 객체가 동일한 객체를 참조"
);
console.log(shallowCopy === student); //

// 얕은 복사 객체의 address와 원본 객체의 address를 비교하여 출력해주세요.
console.log(
  "2. 원본 객체의 address와 얕은 복사 객체의 address가 같을까요? > 네, 같은 객체를 참조했기 때문에 같습니다. > 같습니다"
);

// 깊은 복사 객체와 원본 객체를 비교하여 출력해주세요.
console.log("3. 원본 객체(student)와 깊은 복사 객체가 같을까요? > 다르다");
console.log(deepCopy === student);

// 깊은 복사 객체의 address와 원본 객체의 address를 비교하여 출력해주세요.
console.log(
  "4. 원본 객체의 address와 깊은 복사 객체의 address가 같을까요? > 다르다 : 완전히 독립적인 메모리 공간을 가지고 있습니다."
);

2;
// 동일한 student로 진행합니다.

// 얕은 복사한 객체에 배열요소 변경 javascript -> js으로 변경해주세요
shallowCopy.skill = ["js"];
console.log(shallowCopy);
console.log(student);

// 깊은 복사 객체의 주소 속성을 변경하세요 (예: city를 "busan"으로 변경)
deepCopy.address.city = "busan";
console.log(deepCopy);
console.log(student);
// 결과 확인
console.log("5. 원본 객체(student):", student);
console.log("6. 얕은 복사된 객체(shallowCopy):", shallowCopy);
console.log("7. 깊은 복사된 객체(deepCopy):", deepCopy);

/* 1~7번까지 출력값을 출력해보고 적어주세요
1. true
2. true
3. false
4. false
5. {
  name: 'yuno',
  age: '30',
  skill: [ 'js' ],
  address: { city: 'seoul' }
}
6. {
  name: 'yuno',
  age: '30',
  skill: [ 'js' ],
  address: { city: 'seoul' }
}
7. {
  name: 'yuno',
  age: '30',
  skill: [ 'javascript' ],
  address: { city: 'busan' }
}
*/
