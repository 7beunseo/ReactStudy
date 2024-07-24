import { useReducer, useRef, createContext } from 'react'
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
    case "DELETE": return state.filter((item) => String(item.id) !== String(action.id));
    default: return state;
  }
}

// 새로운 context 생성
const DiaryStaetContext = createContext();
const DiaryDispatchContext = createContext();

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
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id
    })
  }

  return (
    <>

    <Header 
      title={"Header"}
      leftChild={<Button text={"Left"} />}
      rightChild={<Button text={"Right"} />}
    />
      
      <DiaryStaetContext.Provider value={data}> {/* 하위에 일기 데이터 공급 */}
        <DiaryDispatchContext.Provider
          value={({
            onCreate, onUpdate, onDelete
          })}
          >
          <Routes> {/* Route 컴포넌트만 들어갈 수 있음 */}
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} /> {/* 동적 경로 */}
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/param-test" element={<ParamTest /> } /> {/* param test : 라우터에 설정할 내용은 없음 */}
            <Route path="*" element={<NotFound />}  />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStaetContext.Provider>
    </>
  )
}

export default App
