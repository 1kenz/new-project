import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="http://kenandeniz.com.tr"
          target="_blank"
          rel="noopener noreferrer"
        >
          xkendx starting
        </a>
        <p>Starting new project</p>
        <button>Click Me</button>
      </header>
    </div>
  );
}

export default App;
