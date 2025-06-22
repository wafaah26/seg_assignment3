import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import GameScreen from './components/GameScreen';
import MemoryScreen from './components/MemoryScreen';
import ResultsScreen from './components/ResultsScreen';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/game" element={<GameScreen />} />
        <Route path="/recall" element={<MemoryScreen />} />
        <Route path="/result" element={<ResultsScreen />} />
      </Routes>
    </Router>
  );
}

export default App;