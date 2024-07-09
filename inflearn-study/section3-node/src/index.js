// const moduleData = require("./math");
// const { add, sub } = require("./math");
/*
import { add, sub } from "./math.js"; // 확장자까지 작성해주어야함 
import mul from "./math.js"; // default는 중괄호 없이 임포트
*/
import mul, { add, sub } from "./math.js"; // 동일 경로에서 한번에 임포트
import randomColor from 'randomcolor'
// console.log(moduleData);

console.log("안녕 node.js");

console.log(add(1,2));
console.log(sub(1,2));
console.log(mul(1,2));
console.log(randomColor)