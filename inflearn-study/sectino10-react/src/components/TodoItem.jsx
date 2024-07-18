/* eslint-disable react-refresh/only-export-components */
import './TodoItem.css'
import { memo } from "react"

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
    const onChangeCheckbox = () => {
        onUpdate(id);
    }

    const onClickDeleteButton = () => {
        onDelete(id);
    }

    return <div className="TodoItem">
        <input onChange={onChangeCheckbox} type="checkbox" checked={isDone}/>
        <div className="content">{content}</div>
        <div className="date">{new Date(date).toLocaleDateString()}</div>
        <button onClick={onClickDeleteButton} >삭제</button>
    </div>
}

// memo : 고차 컴포넌트 (HOC)
// 제대로 동작하지 않음 
// 새로운 객체가 들어오는 것 -> 다른 props로 인식함 -> 얕은 비교를 함 
// export default memo(TodoItem); 

// 최적화 코드를 커스텀 
// export default memo(TodoItem, (prevProps, nextProps) => {
//     // 반환 값에 따라 Props가 바뀌었는지 안 바뀌었는지 판단 
//     // T -> props가 바뀌지 않음
//     // F -> props가 바뀜

//     if(prevProps.id !== nextProps.id) return false;
//     if(prevProps.isDone !== nextProps.isDone) return false;
//     if(prevProps.content !== nextProps.content) return false;
//     if(prevProps.date !== nextProps.date) return false;
    
//     return true; // 리렌더링을 하지 마라
// }); 

export default memo(TodoItem); 