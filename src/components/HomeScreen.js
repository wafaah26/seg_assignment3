import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomeScreen() {
  const [level, setLevel] = useState('easy');
  const [style, setStyle] = useState('decimal');
  const navigate = useNavigate();

  const handleStart = () => {
    localStorage.setItem('level', level);
    localStorage.setItem('style', style);
    navigate('/game');
  };

  return (
    <div className="fullscreen-centered">
      <div className="card">
        <h2 className="text-center mb-4">🧠 Memory Challenge</h2>

        <div className="form-group">
          <label>Select Level:</label>
          <select
            className="form-control"
            value={level}
            onChange={e => setLevel(e.target.value)}
            style={{ backgroundColor: '#eef2f3' }}
          >
            <option value="easy">Easy (5 digits)</option>
            <option value="medium">Medium (8 digits)</option>
            <option value="hard">Hard (12 digits)</option>
          </select>
        </div>

        <div className="form-group mt-3">
          <label>Select Number System:</label>
          <select
            className="form-control"
            value={style}
            onChange={e => setStyle(e.target.value)}
            style={{ backgroundColor: '#eef2f3' }}
          >
            <option value="decimal">Decimal (0–9)</option>
            <option value="binary">Binary (0–1)</option>
            <option value="octal">Octal (0–7)</option>
            <option value="hex">Hexadecimal (0–9, A–F)</option>
          </select>
        </div>

        <button className="btn btn-primary mt-5 w-100" onClick={handleStart}>
          Start Game
        </button>
      </div>
    </div>
  );
}

export default HomeScreen;
