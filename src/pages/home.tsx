import React from 'react';
import './home.scss';
import headerBg from '../images/headerBg.png';
import footerBg from '../images/footer.png';
import {Chart1} from '../components/chart-1';
import {Chart2} from '../components/chart-2';
import {Chart3} from '../components/chart-3';
import {Chart4} from '../components/chart-4';
import {Chart5} from '../components/chart-5';
import {Chart6} from '../components/chart-6';
import {Chart7} from '../components/chart-7';
import {Chart8} from '../components/chart-8';
import {Chart9} from '../components/chart-9';
import {Chart10} from '../components/chart-10';
import {Chart11} from '../components/chart-11';

export const Home = () => {
  const year = new Date().getFullYear();
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

          <div className="charts ">
            <Chart8/>
          </div>

          <div className="charts bordered">
            <Chart4/>
            <Chart5/>
            <Chart6/>
          </div>

          <div className="charts">
            <Chart7/>
          </div>
        </section>


        <section className="section3">
          <Chart9/>
          <Chart10/>
          <Chart11/>
        </section>
      </main>
      <footer style={{backgroundImage: `url(.${footerBg})`}}>
        &copy; 小康康 2020-{year}
      </footer>
    </div>
  );
};