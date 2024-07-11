import { useState } from "react";

const useInput = () => { // 앞에 use를 붙이면 커스텀 훅을 만들 수 있음
    const [input, setInput] = useState("");

    const onChange = (e) => {
        setInput(e.target.value);
    }

    return [input, onChange];
}

export default useInput;