import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

export const Chart6 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    const myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      series: [{
        type: 'gauge',
        xAxis: {show: false},
        yAxis: {show: false},
        legend: {show: false},
        pointer: {show: false},
        startAngle: 90,
        endAngle: -270,
        radius: "65%",
        progress: {
          show: true,
          overlap: false,
          roundCap: true,
          clip: false,
          itemStyle: {
            borderWidth: px(1),
          }
        },
        axisLine: {
          lineStyle: {
            width: px(30),
            opacity: 0.1
          }
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false,
        },
        data: [{
          value: 20,
          name: 'Perfect',
          detail: {
            show: false
          },
          title: {
            show: false
          }
        },
          {
            value: 40,
            name: 'Good',
            detail: {
              show: false
            },
            title: {
              show: false
            }
          },
          {
            value: 60,
            name: 'Commonly',
            detail: {
              show: false
            },
            title: {
              show: false
            }
          }
        ],

      }]
    }));
  }, []);

  return (
    <div className="店内考评">
      <h2>店内考评</h2>
      <div className="chart">
        <div className="main" ref={divRef}/>
      </div>
    </div>
  );
};