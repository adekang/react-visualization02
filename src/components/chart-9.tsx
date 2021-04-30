import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

export const Chart9 = () => {
  const divRef = useRef(null);
  const colors = ['#F46064', '#F38E1C', '#1CDB7C'];
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      color: colors,
      xAxis: {show: false},
      yAxis: {show: false},

      series: [
        {
          startAngle: -20,
          type: 'pie',
          radius: ['30%', '80%'],
          center: ['40%', '50%'],
          avoidLabelOverlap: false,
          label: {
            show: true, position: 'outside', textStyle: {color: 'white', fontSize: px(12)},
            distanceToLabelLine: 0,
            formatter(options) {
              return options.value * 100 + '%';
            }
          },
          labelLine: {show: true, length: 0},
          roseType: 'area',
          itemStyle: {
            shadowBlur: px(200),
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          },
          data: [
            {value: 0.36, name: '新顾客'},
            {value: 0.20, name: '熟客'},
            {value: 0.18, name: '会员'},
          ]
        }
      ]
    }));
  }, []);

  return (
    <div className="顾客类型 bordered">
      <h2>顾客类型分析</h2>
      <div className="chart" ref={divRef}>
      </div>
    </div>
  );
};