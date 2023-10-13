// 21BAI1225 - Swarab Raul

import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const wordCount = text.split(/\s+/).filter(word => word !== '').length;

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const goToGoogle = () => {
    window.location.href = 'https://www.google.com';
  };

  return (
    <div className="App">
      <h1>Responsive Word Counter</h1>
      <textarea
        placeholder="Type or paste your text here..."
        rows="6"
        value={text}
        onChange={handleTextChange}
      />
      <p>Word Count: {wordCount}</p>
      <button onClick={goToGoogle}>Back to Google</button>
    </div>
  );
}

export default App;
