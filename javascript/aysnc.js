// async를 붙여서 객체를 반환하는 함수가 아니라 promise를 반환하는 함수가 됨 
// 단순히 promise를 리턴하는 함수였다면 async 쓸모 x 
async function getData() {
    return {
        name: "김은서",
        id: "20220961"
    }
}

console.log(getData())// fulfillded promise 객체가 출력됨, promise의 데이터가 return 내용임 

// await
// aysnc 함수 내부에서만 사용이 가능한 키워드
// 비동기함수가 다 처리되기를 기다리는 역할

function printData_1() {
    getData().then((result) => {
        console.log(result);
    })
}

async function printData() {
    const data = await getData(); // data가 응답되기를 기다린 후 data에 넣어둠 
    console.log(data);
}

printData();