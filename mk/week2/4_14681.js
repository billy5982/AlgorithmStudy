const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux"? "/dev/stdin": __filename.split("/").pop().slice(0, -3) + ".txt" ).toString()
.trim().split('\n').map((item)=>Number(item))

let [A,B] = input;
if(A>0&&B>0){
    console.log(1)
}else if(A<0&&B>0){
    console.log(2)
}else if(A<0&&B<0){
    console.log(3)
}else if(A>0&&B<0){
    console.log(4)
}

