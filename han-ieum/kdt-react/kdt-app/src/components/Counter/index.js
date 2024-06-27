// Counter 컴포넌트 기능
// 1. 증가되는 기능
// 2. 부모 컴포넌트에게 메세지를 전달하는 기능

import React, { useState } from 'react';
import PropTypes from 'prop-types'

function Counter({ onIncreate, onDecrease }) {
    const [count, setCount] = useState(0); // hook

    const handleIncrease = () => {
        setCount(count + 1);
        if(onIncreate) {
            onIncreate(count + 1)
        }
    } 

    const handleDecrease = () => {
        setCount(count - 1);
        if(onDecrease) {
            onDecrease(count - 1)
        }
    }

    return (
        <div>
            <span style={{ fontSize: 40 }}>{count}</span>
            <button onClick={handleIncrease}>+</button>
            <button onClick={handleDecrease}>-</button>
        </div>
    )
}
Counter.propTypes = {
    onChange: PropTypes.func, // 함수 타입의 prop으로 수정
};
export default Counter;