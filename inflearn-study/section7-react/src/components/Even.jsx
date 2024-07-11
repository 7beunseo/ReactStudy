import { useEffect } from "react";

const Even = () => {
    useEffect(() => {
        // useEffect가 반환하는 함수를 클린업, 정리함수라고 함 
        // useEffect가 끝날 때 실행됨 
        // 메모리 최적화 작업 진행 
        return () => {
            console.log("unmount")
        };
    }, []); // 마운트 될 때 실행 
    return <div>짝수입니다</div>
}

export default Even;