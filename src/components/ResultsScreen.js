import React from 'react';
import { useNavigate } from 'react-router-dom';

function ResultsScreen() {
  const navigate = useNavigate();
  const correct = JSON.parse(localStorage.getItem('correctDigits')) || [];
  const input = localStorage.getItem('userInput')?.split('') || [];
  let score = 0;
  correct.forEach((val, i) => {
    if (val === input[i]) score++;
  });

  return (
    <div className="fullscreen-centered">
      <div className="memory-box">
        <h3>Results</h3>
        <p><strong>Correct sequence:</strong> {correct.join(' ')}</p>
        <p><strong>Your input:</strong> {input.join(' ')}</p>
        <h4 className="mt-3">Your score: {score} / {correct.length}</h4>
        <button className="btn btn-primary mt-4 w-100" onClick={() => navigate('/')}>Play Again</button>
      </div>
    </div>
  );

}

export default ResultsScreen;
