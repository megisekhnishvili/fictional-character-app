import React from 'react';
import { Link } from 'react-router-dom';
import harryPotterImg from './Harry-Potter.jpg'; // Add a Harry Potter image in your src folder

const MainPage = () => {
  return (
    <div>
      <h1>Harry Potter</h1>
      <img src={harryPotterImg} alt="Harry Potter" />
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
};

export default MainPage;
