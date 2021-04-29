import React from 'react';
import './home.scss';
import headerBg from '../images/headerBg.png';
import {Chart1} from '../components/chart-1';
import {Chart2} from '../components/chart-2';
import {Chart3} from '../components/chart-3';

export const Home = () => {
  return (
    <div className="home">
      <header style={{backgroundImage: `url(.${headerBg})`}}/>
      <main>
        <section className="section1">
          <Chart1/>
          <Chart2/>
          <Chart3/>
        </section>
        <section className="section2">1</section>
        <section className="section3">1</section>
      </main>
      <footer>123</footer>
    </div>
  );
};