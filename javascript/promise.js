console.log("callback.js")

// 함수 내에서 동적으로 promise 생성 
function add10(num) {
    const promise = new Promise((resolve, reject) => {
        // 비동기 직접 실행하는 함수
        // executor
    
        setTimeout(() => {    
            if(typeof num === "number") { // fulfill
                resolve(num + 10);
            } else { // fail 
                reject("num이 숫자가 아닙니다");
            }
        }, 2000);
    })

    return promise;
}


const p = add10(0)
p.then((result) => {
    console.log(result);

    // const newp = add10(result)
    // newp.then((result) => {
    //     console.log(result);
    // })

    return add10(result); // p.then의 새로운 promise가 됨 

}).then((result) => { // 계속해서 then으로 연결 가능 
    console.log(result);
}).catch((error) => { // 각 체인에서 오류가 발생할 경우 
    console.log(error);
})
// then 메서드 : promise의 비동기작업이 성공했을때만 호출 
// -> 그 후에
// promise.then((value) => {  // resolve, reject의 데이터를 가져옴
//     console.log(value);
// }).catch((error) => { // 실패
//     console.log(error)
// })

// promise.catch((error) => {
//     console.log(error)
// })