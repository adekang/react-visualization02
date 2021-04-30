import React from 'react';
import './home.scss';
import headerBg from '../images/headerBg.png';
import {Chart1} from '../components/chart-1';
import {Chart2} from '../components/chart-2';
import {Chart3} from '../components/chart-3';
import {Chart4} from '../components/chart-4';
import {Chart5} from '../components/chart-5';
import {Chart6} from '../components/chart-6';
import {Chart7} from '../components/chart-7';

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


        <section className="section2 ">
          <div className="charts bordered">
            <Chart4/>
            <Chart5/>
            <Chart6/>
          </div>

          <div className="charts bordered">
            <Chart7/>
          </div>

          <div className="charts bordered">2</div>
        </section>


        <section className="section3">1</section>
      </main>
      <footer>123</footer>
    </div>
  );
};