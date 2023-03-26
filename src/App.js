import React, { useState } from 'react';
import RandomColor from './My Components/RandomColor';

function App() {
  const [colors, setColors] = useState([]);

  function handleClick() {
    const newColor = generateRandomColor();
    setColors([...colors, newColor]);
  }

  function generateRandomColor() {
    let newColor = '#';
    let str = '0123456789abcdef';

    for (let i = 0; i < 6; i++) {
      newColor += str[Math.floor(Math.random() * 16)];
    }

    return newColor;
  }

  return (
    <div>
      <button onClick={handleClick} style={{ backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px', border: 'none',cursor:'pointer',display:'flex',margin:'auto' }}>Generate Color!</button>

      {colors.map((color, index) => (
        <RandomColor key={index} color={color} />
      ))}
    </div>
  );
}

export default App;
