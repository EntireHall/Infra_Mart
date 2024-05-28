// pages/index.js
import React from 'react';
import { useText } from '../ContextApi/AuthContext'; // Corrected import path

export default function Home() {
  const { text, changeText } = useText();

  const handleClick = () => {
    changeText('New Text');
  };

  return (
    <div>
      <p>{text}</p>
      <button onClick={handleClick}>Change Text</button>
    </div>
  );
}
