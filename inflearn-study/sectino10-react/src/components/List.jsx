import "./List.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

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
    }

    const {totalCount, doneCount, notDoneCount} = getAnalyzedData(); // 리스트 컴포넌트가 리렌더링될때마다 계속 호출됨 (search)

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