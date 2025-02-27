import React, { useState } from 'react';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Comments from './pages/Comments';
import MovieInfo from './pages/MovieInfo';

function App() {
  const [page, setPage] = useState('login');

  const handleNavigate = (targetPage) => {
    setPage(targetPage);
  };

  let content;
  if (page === 'login') {
    content = <Login onNavigate={handleNavigate} />;
  } else if (page === 'signup') {
    content = <Signup onNavigate={handleNavigate} />;
  } else {
    content = (
      <div>
        <MovieInfo />
        <Comments onNavigate={handleNavigate} />
      </div>
    );
  }

  return (
    <div>
      <h1>Milestone 3</h1>
      {content}
    </div>
  );
}

export default App;
