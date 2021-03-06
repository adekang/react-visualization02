import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

export const Chart5 = () => {
  const divRef = useRef(null);
  const data = [
    {value: 8, name: '门店卫生'},
    {value: 4, name: '门店卫生'},
    {value: 8, name: '门店卫生'},
    {value: 2, name: '门店卫生'},
    {value: 6, name: '门店卫生'},
    {value: 8, name: '门店卫生'},
    {value: 4, name: '门店卫生'},
    {value: 6, name: '门店卫生'},
  ];
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      grid: {
        x: px(25),
        y: px(30),
        x2: px(40),
        y2: px(40),
        width: '85%',
      },
      xAxis: {
        data: data.map(i => i.name),
        axisTick: {show: false},
        axisLine: {
          lineStyle: {color: '#083B70'}
        },
        axisLabel: {
          formatter(val) {
            if (val.length > 2) {
              const array = val.split('');
              array.splice(2, 0, '\n');
              return array.join('');
            } else {
              return val;
            }
          }
        },
      },

      yAxis: {
        splitLine: {show: false},
        axisLine: {
          show: true,
          lineStyle: {color: '#083B70'}
        },

      },
      series: [{
        type: 'bar',
        data: data.map(i => i.value),
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: '#0A97FB'
        }, {
          offset: 1,
          color: '#1E34FA'
        }]),
      }]
    }));
  }, []);

  return (
    <div className="巡店报表">
      <h2>巡店报表</h2>
      <div className="chart">
        <div className="main" ref={divRef}/>
      </div>
    </div>
  );
};