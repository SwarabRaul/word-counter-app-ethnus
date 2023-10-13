import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const wordCount = text.split(/\s+/).filter(word => word !== '').length;

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const goToIndexPage = () => {
    window.location.href = 'https://swarabraul.github.io/React-Ethnus-IndexPage/';
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
      <button onClick={goToIndexPage}>Back to Index Page</button>
    </div>
  );
}

export default App;
