import { Video } from './Video';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='flex'>
          <Video />
          <img src={logo} className="App-logo" alt="logo" />
          <Video />
        </div>
        <p>stream is starting soon</p>
        <div className='flex'>
          <img src={logo} className="App-logo" alt="logo" />
          <Video />
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </header>
    </div>
  );
}

export default App;
