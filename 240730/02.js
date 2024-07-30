// async await 를 사용한 코드로 변경해보기

const API_URL = "https://open.api.com/v1/data";
const WRONG_URL = "https://open.api.com/v1/wrong";

async function getData(url) {
  await setTimeout(() => {
    try {
      if (url === API_URL) {
        console.log("성공");
      } else {
        throw "실패";
      }
    } catch (error) {
      console.error(error);
    }
  }, 3000);
}

getData(API_URL);
getData(WRONG_URL);
