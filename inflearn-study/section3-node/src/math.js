// math 모듈

export function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

// export { add, sub }

// export default를 해주면 math 모듈의 디폴트 값이 됨
// import를 할 때 {} 중괄호 없이 불러줌  
export default function multiply(a, b) {
    return a * b;
}