let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let answer = ''
for(let i=1; i<= Number(input[0]); i++){
    console.log(`Case #${i}:`, Number(input[i].split(" ")[0])+Number(input[i].split(" ")[1]) )
};
