import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';

function App() {
  const ref = useRef(null);

  function handleMouseMove(event){
    console.log(event);
  }

  function handleDrag(event){
    console.log(event.pageX, event.pageY);
    ref.current.addEventListener('mousemove', handleMouseMove);
  }

  function handleLeave(){
    ref.current.removeEventListener('mousemove', handleMouseMove);
  }

  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" height={40} width={40}/>
        <div ref={ref} id='drawer' onMouseDown={handleDrag} onMouseUp={handleLeave}>   
        </div>
    </div>
  );
}

export default App;
