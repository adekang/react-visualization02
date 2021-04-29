import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';

export const Chart4 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      color: ['#0dfdea', '#ff6f5d', '#2dff9e'],
      xAxis: {
        show: false
      },
      yAxis: {show: false},
      legend: {show: false},
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}'
      },
      series: [
        {
          name: '巡店问题',
          type: 'pie',
          radius: ['50%', '70%'],
          roseType: 'radius',
          label: {
            show: false
          },

          data: [
            {value: 10, name: '待整改'},
            {value: 6, name: '待修复'},
            {value: 3, name: '已完成'},
          ]
        },
      ]
    }));
  }, []);

  return (
    <div className="bordered 巡店问题">
      <h2>巡店问题分析</h2>
      <div className="chart">
        <div className="main" ref={divRef}/>
        <div className="text01">21个全部问题</div>
      </div>
    </div>
  );
};