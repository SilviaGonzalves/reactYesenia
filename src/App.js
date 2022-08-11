import logo from './logoyesenia.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Mi nombre : Silvia Gonzalves Fariña</h3>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mi proyecto Yesenia -Manos que brillan
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentacion de  React
        </a>
      </header>
    </div>
  );
}

export default App;
