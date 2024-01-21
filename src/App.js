import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="w-8 h-8 ">
      <header >
        <img src={logo} className='h-2' alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
