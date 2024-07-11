// import { useState } from "react";

const Viewer = ({ count }) => {
    // const [count, setCount] = useState(0);
    // props는 부모에서 자식 관계로만 전달할 수 있음 

    return (
        <div>
            <div>현재 카운트 : </div>
            <h1>{count}</h1>
        </div>
    )
}

export default Viewer;