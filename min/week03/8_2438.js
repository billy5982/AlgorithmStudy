//별찍기
const input = require('fs').readFileSync('/dev/stdin').toString();

let star = '';
for(let i=0; i< Number(input); i++){
    star += `*`
    console.log(star);
}