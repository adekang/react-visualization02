import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

export const Chart11 = () => {
  let data = [];
  for (let i = 0; i < 5; ++i) {
    data.push(Math.round(Math.random() * 200));
  }
  const divRef = useRef(null);
  useEffect(() => {
    const myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      legend: {
        bottom: px(10),
        textStyle: {color: 'white'},
        itemWidth: px(30),
        itemHeight: px(16)
      },
      grid: {
        x: px(20),
        x2: px(20),
        y: px(20),
        y2: px(40),
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [1, 2, 3, 4, 5, 6, 12, 15, 16],
        splitLine: {show: true, lineStyle: {color: '#073E78'}},
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {
          formatter(val) {
            return val+ '天';
          }
        }
      },
      yAxis: {
        type: 'value',
        splitLine: {lineStyle: {color: '#073E78'}},
        axisLabel: {
          formatter(val) {
            return val * 100 + '%';
          }
        }
      },
      series: [
        {
          name: '会员',
          type: 'line',
          data: [0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09].reverse()
        },
        {
          name: '非会员',
          type: 'line',
          data: [0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.10].reverse()
        },
        {
          name: '熟客',
          type: 'line',
          data: [0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.10, 0.11].reverse()
        }
      ].map(obj => ({
        ...obj,
        symbol: 'circle',
        symbolSize: px(8),
        lineStyle: {width: px(2)}
      }))
    }));


  }, []);

  return (
    <div className="到店间隔 bordered">
      <h2>到店间隔</h2>
      <div ref={divRef} className="chart">
      </div>
    </div>
  );
};