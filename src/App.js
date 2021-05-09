import { Video } from './Video';
// import logo from './logo.svg';
import './App.css';
import Countdown from 'react-countdown';

// const renderer = ({ hours, minutes, seconds }) => (
//   <span>
//     {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
//   </span>
// );

function App() {
  const time = '5:00'
  return (
    <div className="App">
      <header className="App-header">
        <div className='flex'>
          {/* <img src={logo} className="App-logo" alt="logo" />    */}
          <Video />
          <Video />   
          <Video />   
          <Video flip/>
          <Video flip/> 
          {/* <img src={logo} className="App-logo" alt="logo" />       */}
        </div>
        <div className='flex'>
          {/* <img src={logo} className="App-logo" alt="logo" />    */}
          <Video />
        <div className='text'>
          <p>stream starting soon</p>
          <h1>
            <Countdown date={Date.now() + 300000} />
          </h1>
        </div>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <Video flip/> 
        </div>
        <div className='flex'>
          {/* <img src={logo} className="App-logo" alt="logo" />    */}
          <Video />
          <Video />
          <Video flip/> 
          <Video flip/> 
          <Video flip/> 
          {/* <img src={logo} className="App-logo" alt="logo" />    */}
        </div>
      </header>
    </div>
  );
}

export default App;
