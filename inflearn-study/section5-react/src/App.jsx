import './App.css'
import Header from './compoments/Header.jsx';
import Main from './compoments/Main.jsx';
import Footer from './compoments/Footer.jsx';
import Button from "./compoments/Button.jsx"

function App() {
  // ... 연산자와 함께 사용하여 개별로 컴포넌트의 props에 전달해주게 됨 
  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2, 
    c: 3
  };

  return (
    <>
      <Button {...buttonProps}/>   {/* 객체 형태로 전달 */}
      <Button text={"카페"}/>

      {/* 컴포넌트를 props로 전달할 수도 있음 - children이라는 props로 전달됨 */}
      <Button text={"블로그"}>
        <Header />
      </Button>
    </>
  )
}

export default App
