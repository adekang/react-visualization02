import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

export const Chart2 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      color: ['#0dfdea', '#ff6f5d'],
      xAxis: {
        show: false
      },
      yAxis: {show: false},
      legend: {show: false},
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: true, position: 'inside', textStyle: {color: 'white', fontSize: px(10)},
            formatter(options) {
              return options.value * 100 + '%';
            }
          },
          labelLine: {show: false},
          itemStyle: {
            borderColor: '#0F113A',
            borderWidth: px(4)
          },
          data: [
            {value: 0.4, name: '女'},
            {value: 0.6, name: '男'},
          ]
        }
      ]
    }));
  }, []);

  return (
    <div className="bordered 男女比例">
      <h2>男女比例分析</h2>
      <div className="chart">
        <div className="main" ref={divRef}/>
        <div className="text">2.461万</div>
      </div>
    </div>
  );
};