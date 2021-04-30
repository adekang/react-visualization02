import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

export const Chart8 = () => {

  let data = [];
  // @ts-ignore
  let now: Date = +new Date(2012, 9, 3);
  const oneDay = 24 * 3600 * 1000;
  let value = Math.random() * 1000;
  for (let i = 0; i < 1000; i++) {
    data.push(randomData());
  }

  function randomData() {
    now = new Date(+now + oneDay);
    value = value + Math.random() * 21 - 10;
    return {
      name: now.toString(),
      value: [
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
        Math.round(value)
      ]
    };
  }

  const divRef = useRef(null);
  useEffect(() => {
    const myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      grid: {
        x: px(20),
        x2: px(20),
        y: px(10),
        y2: px(10),
        containLabel: true
      },
      tooltip: {
        trigger: 'axis',
        formatter: function (params) {
          params = params[0];
          let date = new Date(params.name);
          return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
        },
        axisPointer: {
          animation: false
        }
      },
      xAxis: {
        type: 'time',
        splitLine: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
          show: false
        }
      },
      series: [{
        name: '模拟数据',
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        data: data,
      }]
    }));

    setInterval(function () {

      for (let i = 0; i < 5; i++) {
        data.shift();
        data.push(randomData());
      }

      myChart.setOption({
        series: [{
          data: data
        }]
      });
    }, 1000);

  }, []);


  return (
    <div className="历年统计 bordered">
      <h2>历年统计</h2>
      <div className="chart">
        <div className="main" ref={divRef}/>
      </div>
    </div>
  );
};