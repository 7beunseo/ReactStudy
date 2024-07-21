import { React } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Diary from './pages/Diary'
import New from './pages/New'
import NotFound from './pages/NotFound'
import ParamTest from './pages/ParamTest'
import { getEmotionImage } from './util/get-emition-image'

/*
/ : 모든 일기를 조회하는 Home 페이지
/new : 새로운 일기를 조회하는 New 페이지 
/diary : 일기를 상세히 조회하는 Diary 페이지 
*/
function App() {
  // 특정 위치로 옮겨야 할 경우에는 nav 함수를 사용하자 
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  }

  return (
    <>
    <div>
      <img src={getEmotionImage(1)} />
      <img src={getEmotionImage(2)} />
      <img src={getEmotionImage(3)} />
      <img src={getEmotionImage(4)} />
      <img src={getEmotionImage(5)} />
    </div>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
      </div>

      <button onClick={onClickButton}>
        Nav 페이지로 이동
      </button>
      
      <Routes> {/* Route 컴포넌트만 들어갈 수 있음 */}
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} /> {/* 동적 경로 */}
        <Route path="/param-test" element={<ParamTest /> } /> {/* param test : 라우터에 설정할 내용은 없음 */}
        <Route path="*" element={<NotFound />}  />
      </Routes>
    </>
  )
}

export default App
