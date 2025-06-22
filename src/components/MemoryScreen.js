import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MemoryScreen() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    localStorage.setItem('userInput', input);
    navigate('/result');
  };

  return (
    <div className="fullscreen-centered">
      <div className="memory-box">
        <h3>Enter the digits you remember</h3>
        <input
          type="text"
          className="form-control mt-3"
          placeholder="Type digits here..."
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button className="btn btn-success mt-4 w-100" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );

}

export default MemoryScreen;