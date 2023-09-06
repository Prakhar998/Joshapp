// App.tsx
import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';

import Quiz from './Quiz.tsx';
import StartPage from './StartPage.tsx';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage onStartQuiz={() => {
        throw new Error('Function not implemented.');
      }} />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;