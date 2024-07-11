import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import Even from './components/Even'
import { useState, useEffect, useRef } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  // 1. 마운트 : 탄생 -> 빈 배열 전달 
  useEffect(() => {
    console.log("mount");
  }, [])

  // 2. 업데이트 : 변화, 리렌더링 -> 배열 작성해주지 않음 
  useEffect(() => {
    if (!isMount.current) { // flag 변수를 사용해서 update 체크 
      isMount.current = true;
      return;
    }
    console.log("update");
  })

  // 3. 언마운트 : 죽음 

  // side effect -> 원하는 값이 바뀌었을때만 콜백 함수를 실행시킬 수 있다 
  useEffect(() => {
    console.log(`count ${count} / input ${input}`)
  }, [count, input])
  // 의존성 배열
  // dependency array
  // deps 

  const onClickButton = (value) => {
    setCount(count + value); // 비동기 -> 함수의 완료 시간의 차이 발생 
  }

  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <input value={input} onChange={(e) => {
          setInput(e.target.value)
        }} />
      </section>

      <section>
        <Viewer count={count}/>
        {count %2 === 0 ? <Even/> : null}
      </section>

      <section>
        <Controller onClickButton={onClickButton}/>
      </section>
    </div>
  )
}

export default App
