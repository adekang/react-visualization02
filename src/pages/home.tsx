import React from 'react';
import './home.scss';
import headerBg from '../images/headerBg.png';
import {Chart1} from '../components/chart-1';

export const Home = () => {
  return (
    <div className="home">
      <header style={{backgroundImage: `url(.${headerBg})`}}/>
      <main>
        <section className="section1 bordered">
          <Chart1/>
          <Chart1/>
          <Chart1/>
        </section>
        <section className="section2">1</section>
        <section className="section3">1</section>
      </main>
      <footer>123</footer>
    </div>
  );
};