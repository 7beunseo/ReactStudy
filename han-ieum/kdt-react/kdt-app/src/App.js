import './App.css';
import Logo from './components/Logo';
import Paragraph from './components/Paragraph';
import Board from './components/Board'
import Counter from './components/Counter'

import {useEffect, useState} from "react";

function App() {
  const name = "리엑트";
  const showLink = false;
  const showLogo = "show";
  const names = ["React", "Vue", "Angular"]

  const articles = [{
      id: 1,
      title: "안녕하세요1",
      author: "김은서"
    },{
      id: 2,
      title: "안녕하세요2",
      author: "김은서"
    },{
      id: 3,
      title: "안녕하세요3",
      author: "김은서"
    },{
      id: 4,
      title: "안녕하세요4",
      author: "김은서"
    },{
      id: 5,
      title: "안녕하세요5",
      author: "김은서"
    },
  ]

  // 분기
  const [visible, setVisible] = useState(false);
  // count
  const [totalCount, setTotalCount] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`You onClicked ${count} times`)
  }, [count]) // count의 변화를 감지

  useEffect(() => {
    console.log("Component Loaded")
    const handleScroll = () => {
      console.log(window.scrollY)
    }

    document.addEventListener("scroll", handleScroll) // 전략적인 이벤트를 사용할 때 쓸 수 있음 
    return () => document.removeEventListener('scroll', handleScroll) // return으로 반환한 함수는 컴포넌트가 제거될 때 실행됨 
  }, []) // 컴포넌트가 처음 로드될 때 실행

  return (
    <div>
      <div>
        You onClicked {count} times
      </div>
      <button onClick={() => setCount(count + 1)}>+</button>
 
      <div style={{height: 10000}}></div>
      {/*
      totalCount : {totalCount}
      <Counter 
        onIncreate={(count) => setTotalCount(totalCount + 1)}
        onDecrease={(count) => setTotalCount(totalCount - 1)}
      />
      <Counter 
        onIncreate={(count) => setTotalCount(totalCount + 1)}
        onDecrease={(count) => setTotalCount(totalCount - 1)}
      />
      <Counter 
        onIncreate={(count) => setTotalCount(totalCount + 1)}
        onDecrease={(count) => setTotalCount(totalCount - 1)}
      />

      <button onClick={() => setVisible(!visible)}>Toggle</button>
      {visible ? 
        (<h1>논리곱 연산자를 통해 쉽게 JSX 렌더링 여부를 결정할 수 있습니다.</h1>

        ) : null}

        {visible ? <Board articles={articles}/> : <p>게시판을 보려면 Toggle 버튼 클릭</p>}

      <div className="App">
        <header className="App-header">
         */}
          {/* 3항연산자 */}
          {/*
          <Logo/>
          {
            showLogo === "show" ? (
              <Logo size={100}/> 
          
            ) : (
              <h1>REACT</h1>
            )
          }

          <Paragraph size={14} color={"blue"}>
            Edit <code>src/App.js</code> and save to reload.
          </Paragraph>
          */}
          {/*true일때만 실행*/}
          {/*
          { showLink && (
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn {name}
          </a>
          )}

          <ul>
            {
              names.map(item => (
                <li key={item}>{item}</li>
              ))
            }
          </ul>
        </header>
        
      </div>
      <span>TEST</span>
      */}
    </div>
  );
}

export default App;
