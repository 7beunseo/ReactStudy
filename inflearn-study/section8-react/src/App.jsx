import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import { useState, useRef } from 'react'

function App() {

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current ++, // 하나 만들때마다 1 증가
      isDone: false,
      content: content,
      date: new Date().getTime()
    }

    // todos.push(newTodo); -> 상태 변화 함수를 호출해야만 한다. 
    setTodos([newTodo, ...todos])
  }

  const onUpdate = (targetId) => {
    // todos State 값들 중에
    // targetID와 일치하는 ID를 갖는 투두 아이템의 isDone 변경
    
    // 인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 바꾼 새로운 배열 
    setTodos(todos.map((todo) => {
      /*
      if(todo.id === targetId) {
        return {
          ...todo,
          isDone: !todo.isDone
        }
      }
      return todo;
    })) */

      return todo.id === targetId 
      ? { ...todo, isDone: !todo.isDone }
      : todo
      
    }))}

  const onDelete = (targetId) => {
    // 인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열 
    setTodos(todos.filter((todo) => todo.id !== targetId));
  }

  const mockData = [
    {
      id: 0,
      isDone: false,
      content: "React 공부하기",
      date: new Date().getTime()
    },
    {
      id: 1,
      isDone: true,
      content: "빨래하기",
      date: new Date().getTime()
    },
    {
      id: 2,
      isDone: false,
      content: "노래 연습하기",
      date: new Date().getTime()
    },
  ]

  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3); // id 값 저장 

  return (
    <div className='App'>
      <Header />
      <Editor onCreate={onCreate}/>
      <List onUpdate={onUpdate} todos={todos} onDelete={onDelete}/>
    </div>
  )
}

export default App
