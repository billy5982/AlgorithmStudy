//runjs
const fs = require("fs");
 // node.js의 fs 모듈을 사용해 파일을 읽어온다

const input = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number); 

// fs 모듈을 사용해 (`/dev/stdin`)안에 있는 파일을 읽어서 input에 넣는다
// 읽어 온 값은 array로 저장된다
// 입력받은 걸 코딩하기 편하게 바꿔서 쓰면 된다
// 입력 값 가져오기 + 데이터 정제

let a = input[0];
let b = input[1];

//input에 저장된 값을 바꿔서 사용하면 된다

console.log(a + b); // 출력