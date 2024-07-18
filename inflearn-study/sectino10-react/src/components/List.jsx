import "./List.css";
import TodoItem from "./TodoItem";
import { useState, useMemo } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
    const [search, setSearch] = useState("")

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    const getFillteredData = () => {
        if(search === "") {
            return todos;
        }
        return todos.filter((todo) => todo.content.toLowerCase().includes(search.toLowerCase())) // 참이 되는 값만 필터링 
    }

    const filteredTodos = getFillteredData();

    // 최적화
    /*
    const getAnalyzedData = () => {
        console.log("getAnalyzedData 호출!");
        const totalCount = todos.length;
        // todo들 중에 된 것들만 저장 
        const doneCount = todos.filter((todo) => todo.isDone).length // todo의 length가 길어질 수록 시간이 오래 걸림 
        // 완료되지 않은 todo
        const notDoneCount = totalCount - doneCount;

        return {
            totalCount,
            doneCount,
            notDoneCount
        }
    } */

    // useMemo 사용
    const {totalCount, doneCount, notDoneCount} = useMemo(() => {
        const totalCount = todos.length;
        // todo들 중에 된 것들만 저장 
        const doneCount = todos.filter((todo) => todo.isDone).length // todo의 length가 길어질 수록 시간이 오래 걸림 
        // 완료되지 않은 todo
        const notDoneCount = totalCount - doneCount;

        // 그대로 반환 
        return {
            totalCount,
            doneCount,
            notDoneCount
        }
    }, [todos])
    // 두번째 배열이 의존성 배열, deps임 
    // deps에 포함된 값이 변경되었을 때만 콜백함수를 다시 실행함 
    // 해당 콜백이 반환하는 값을 그대로 반환함 

    // const {totalCount, doneCount, notDoneCount} = getAnalyzedData(); // 리스트 컴포넌트가 리렌더링될때마다 계속 호출됨 (search)

    return <div className="List">
        <h4>Todo List 🌱</h4>
        <div>total: {totalCount}</div>
        <div>done: {doneCount}</div>
        <div>notDone: {notDoneCount}</div>

        <input 
            value={search}
            onChange={onChangeSearch}
            placeholder="검색어를 입력하세요" 
        />
        <div className="todos_wrapper">
            {filteredTodos.map((todo) => {
                return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete} />
            })}
            
        </div>
    </div>
}

export default List;