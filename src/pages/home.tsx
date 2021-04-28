import React from 'react';
import './home.scss';
import headerBg from '../images/headerBg.png';

console.log(headerBg);

export const Home = () => {
  return (
    <div className="home">
      <header style={{backgroundImage: `url(.${headerBg})`}}/>
    </div>
  );
};