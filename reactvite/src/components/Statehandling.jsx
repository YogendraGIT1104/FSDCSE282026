
import React, { useState } from "react";
import cat from "../assets/angry-cat-png.png";

function StateHandling() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [count, setCount] = useState(50);
  const [catheight, setCatheight] = useState(200);
  const [catwidth, setCatwidth] = useState(200);
  const [catAngle,setcatAngle]=useState(90);

  function increment() {
    setCount( count + 20);
  }

  function decrement() {
    setCount(count - 20);
  }

  function change() {
    setRed(Math.floor(Math.random() * 256));
    setGreen(Math.floor(Math.random() * 256));
    setBlue(Math.floor(Math.random() * 256));
  }

  function changeHeight() {
    setCatheight(catheight + 20);
  }
   function changeWidth() {
     setCatwidth(catwidth + 20);
   }

    function rotateImg(){
      setcatAngle(catAngle+90);
   }

  return (
    <div>
      <h2>Change BG</h2>

      <div
        style={{
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          border: "2px solid white",
          height: "200px",
          width: "300px",
        }}
      >
        <img src={cat} height={catheight} width={catwidth} style={{ transform: `rotate(${catAngle}deg)` }} />
      </div>

      <div>
        <button onClick={changeHeight}>Increase Cat Height</button> 
        <button onClick={changeWidth}>Increae Cat Width</button>
        <button onClick={rotateImg}>Image Rotate</button>
      </div>
      <div>
        <button onClick={change}>Change BG Color</button>
      </div>
      <p>
        Color code: {red}, {green}, {blue}, Height: {catheight}
      </p>

      <h2>Count: {count}</h2>           

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default StateHandling;

