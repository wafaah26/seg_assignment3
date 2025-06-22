import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function generateDigits(level, style) {
  const length = level === 'easy' ? 5 : level === 'medium' ? 8 : 12;
  const baseMap = { decimal: 10, binary: 2, octal: 8, hex: 16 };
  const base = baseMap[style];
  const digits = [];
  for (let i = 0; i < length; i++) {
    const max = base - 1;
    const rand = Math.floor(Math.random() * (max + 1));
    digits.push(style === 'decimal' ? rand.toString() : rand.toString(base).toUpperCase());
  }
  return digits;
}

function GameScreen() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);
  const [digits, setDigits] = useState([]);

  useEffect(() => {
    const level = localStorage.getItem('level');
    const style = localStorage.getItem('style');
    const newDigits = generateDigits(level, style);
    setDigits(newDigits);
    localStorage.setItem('correctDigits', JSON.stringify(newDigits));

    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev === 1) {
          clearInterval(timer);
          navigate('/recall');
        }
        return prev - 1;
      });
    }, 1000);
  }, [navigate]);

  return (
    <div className="fullscreen-centered">
      <div className="memory-box">
        <h3>Memorize the Sequence</h3>
        <h1 className="display-4 mt-4">{digits.join(' ')}</h1>
        <p className="mt-3">You have {countdown} seconds...</p>
      </div>
    </div>
  );

}

export default GameScreen;