import './App.css';
import Countdown from 'react-countdown';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='flex'>
        </div>
        <div className='flex'>
        <div className='text'>
          <h2>stream starting soon...</h2>
          <img src='https://media1.tenor.com/images/19dbe3b9a3e64f5521ebba468076bbd1/tenor.gif?itemid=7913944' alt='crochet gif'/>  
          <h1>
            <Countdown date={Date.now() + 300000} />
          </h1>
        </div>
        </div>
        <div className='flex'>
        </div>
      </header>
    </div>
  );
}

export default App;
