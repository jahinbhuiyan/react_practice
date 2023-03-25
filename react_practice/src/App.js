import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import React from 'react';

function App() {

  const title= 'Welcome to the new BLOG';
  const likes = 50;

  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
        <p>Liked {likes} times</p>
      </div>
    </div>
  );
}

export default App;
