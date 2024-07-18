/* eslint-disable react-hooks/exhaustive-deps */
import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import { useState, useRef, useReducer, useCallback } from 'react'

function App() {

  // 컴포넌트 생성 이후 다시는 리렌더링되지 않도록 수정 
  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current ++,
        isDone: false,
        content: content,
        date: new Date().getTime()
      }
    })
  });

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId
    })  
  }, []);

  // 콜백함수를 그대로 생성해서 반환해줌 
  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId
    })
  }, []); // onDelete 함수를 한번 생성(마운트 할때만 생성)하고 다시는 생성하지 않도록 설정 ([] 빈 배열로 놔둠)

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

  function reducer(state, action) {
    switch(action.type) {
      case 'CREATE': return [action.data, ...state];
      case "UPDATE": return state.map((item) => 
        item.id === action.targetId
        ? {...item, isDone: !item.isDone }
        : item
      )
      case "DELETE": return state.filter((item) => item.id !== action.targetId);
      default: return state;
    }
  }

  // const [todos, setTodos] = useState(mockData);
  const [todos, dispatch] = useReducer(reducer, mockData);
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
