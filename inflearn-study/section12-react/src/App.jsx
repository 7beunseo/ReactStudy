import { useReducer, useRef, createContext, useEffect, useState } from 'react'
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
    createdDate: new Date("2024-07-24").getTime(),
    emotionId: 2,
    content: "2번 일기 내용",
  },
  {
    id: 3,
    createdDate: new Date("2024-06-24").getTime(),
    emotionId: 3,
    content: "3번 일기 내용",
  },
]

// 새로운 context 생성
export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function reducer(state, action) {
  let nextStage;
  switch(action.type) {
    case "INIT": {
      // 로컬 스토리지에 한번 더 보관할 필요가 없음 (어차피 같은 값임)
      return action.data;
    }
    case "CREATE": {
      nextStage = [action.data, ...state];
      break;
    }
    case "UPDATE": {
      nextStage = state.map((item) => 
        String(item.id) === String(action.data.id) ? action.data : item
      );
      break;
    } 
    case "DELETE": {
      nextStage = state.filter((item) => String(item.id) !== String(action.id));
      break;
    }
    default: nextStage = state;
  }
  
  localStorage.setItem("diary", JSON.stringify(nextStage));
  return nextStage;
}

function App() {
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

   useEffect(() => {
    const storedData = localStorage.getItem("diary");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      if (Array.isArray(parsedData)) {
        let maxId = 0;
        parsedData.forEach((item) => {
          if (Number(item.id) > maxId) {
            maxId = Number(item.id);
          }
        });
        idRef.current = maxId + 1;

        dispatch({
          type: "INIT",
          data: parsedData
        });
        setIsLoading(false);
      }
      else {
        setIsLoading(false);
      }
    }
    else {
      setIsLoading(false);
    }
  }, []);

  // 로컬스토리지에 데이터를 저장하는 방법 
  // localStorage.setItem("test", "hello"); // 키 값과 value 값을 지정함 
  // 주석처리해도 사라지지 않음  
  // localStorage.setItem("person", JSON.stringify({name: "김은서"})) // 객체를 그대로 로컬 스토리지에 보관하면 안됨, 객체를 문자열 형태로 바꿔야 함 

  // 로컬스토리지에서 값 불러오기 
  console.log(JSON.parse(localStorage.getItem("person"))) // 다시 객체 형태로 변환, undeifind이면 안됨 

  // 로컬스토리지에서 값 삭제 
  localStorage.removeItem("test");

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

  if(isLoading) {
    return <div>데이터 로딩 중입니다 ...</div>
  }

  return (
    <>
      <DiaryStateContext.Provider value={data}> {/* 하위에 일기 데이터 공급 */}
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
      </DiaryStateContext.Provider>
    </>
  )
}

export default App
