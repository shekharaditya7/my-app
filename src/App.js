import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';

function App() {
  const ref = useRef(null);
  const can = useRef(null);

  function draw() {
    const canvas = document.querySelector("#canvas");

    if (!canvas.getContext) {
      return;
    }
    const ctx = canvas.getContext("2d");

    // set line stroke and line width
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 1;

    // draw a red line
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctx.stroke();
  }

  // function drawLine(ctx, begin, end, stroke = "black", width = 1) {
  //   if (stroke) {
  //     ctx.strokeStyle = stroke;
  //   }

  //   if (width) {
  //     ctx.lineWidth = width;
  //   }

  //   ctx.beginPath();
  //   ctx.moveTo(...begin);
  //   ctx.lineTo(...end);
  //   ctx.stroke();
  // }


  function handleMouseMove(event){
    console.log(event);
    draw();
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
           <canvas ref={can} id="canvas"></canvas>   
        </div>
    </div>
  );
}

export default App;
