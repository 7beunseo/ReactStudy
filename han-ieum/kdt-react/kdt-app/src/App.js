import './App.css';
import Logo from './components/Logo';
import Paragraph from './components/Paragraph';

function App() {
  const name = "리엑트";
  const showLink = false;
  const showLogo = "show";
  const names = ["React", "Vue", "Angular"]

  return (
    <div>
      <div className="App">
        <header className="App-header">
          {/* 3항연산자 */}
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
          
          {/*true일때만 실행*/}
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
    </div>
  );
}

export default App;
