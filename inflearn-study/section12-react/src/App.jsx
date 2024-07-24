import { act, useReducer, useRef } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Diary from './pages/Diary'
import New from './pages/New'
import NotFound from './pages/NotFound'
import ParamTest from './pages/ParamTest'
import Edit from './pages/Edit'

import Button from './components/Button'
import Header from './components/Header'

/*
/ : 모든 일기를 조회하는 Home 페이지
/new : 새로운 일기를 조회하는 New 페이지 
/diary : 일기를 상세히 조회하는 Diary 페이지 
*/

const mockData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    emotionId: 2,
    content: "2번 일기 내용",
  },
  {
    id: 3,
    createdDate: new Date().getTime(),
    emotionId: 3,
    content: "3번 일기 내용",
  },
]

function reducer(state, action) {
  switch(action.type) {
    case "CREATE": return [action.data, ...state];
    case "UPDATE": return state.map((item) => 
      String(item.id) === String(action.data.id) ? action.data : item
    );
  }
}

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(4);
   
  // 새로운 일기 추가
  const onCreate =(createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content
      }
    })
  }

  // 기존 일기 수정
  // 변경하고자 하는 값 모두 매개변수로 받음 
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch(
      {
        type: "UPDATE",
        data: {
          id, createdDate, emotionId, content
        }
      }
    )
  }

  // 기존 일기 삭제

  return (
    <>
    <button
      onClick={() => {
        onCreate(new Date().getTime(), 1, "Hello")
      }}>
        일기 추가 테스트
      </button>

      <button
        onClick={(() => {
          onUpdate(1, new Date().getTime(), 3, "수정된 일기입니다.");
        })}
        >일기 수정 테스트</button>

    <Header 
      title={"Header"}
      leftChild={<Button text={"Left"} />}
      rightChild={<Button text={"Right"} />}
    />
      
      <Routes> {/* Route 컴포넌트만 들어갈 수 있음 */}
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} /> {/* 동적 경로 */}
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/param-test" element={<ParamTest /> } /> {/* param test : 라우터에 설정할 내용은 없음 */}
        <Route path="*" element={<NotFound />}  />
      </Routes>
    </>
  )
}

export default App
