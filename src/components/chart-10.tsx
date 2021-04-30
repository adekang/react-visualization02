import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

export const Chart10 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({

      legend: {
        data: ['当前门店', '企业平均'],
        itemWidth: px(14),
        itemHeight: px(8),
        top: '0%',
        left: '8%',
        textStyle: {
          fontSize: px(8),
          color: '#FFF'
        }
      },
      grid: {
        x: px(15),
        x2: px(15),
        y: px(30),
        y2: px(5),
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['一次', '二次', '三次', '四次', '五次'],
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {
          fontSize: px(12)
        }
      },
      yAxis: {
        type: 'value',
        axisLine: {show: false},
        splitLine: {lineStyle: {color: '#183e72'}},
        axisLabel: {
          fontSize: px(12)
        }
      },
      series: [
        {
          name: '总数',
          type: 'line',
          smooth: true,
          data: [1500, 900, 1800, 1200, 1800],
          itemStyle: {
            color: '#78a3ff'
          },
          symbolSize: px(6)
        },
        {
          name: '非会员',
          type: 'line',
          smooth: true,
          data: [900, 400, 1200, 600, 1200],
          itemStyle: {
            color: '#6eef9b'
          },
          symbolSize: px(6)
        },
        {
          name: '会员',
          type: 'line',
          smooth: true,
          data: [100, 500, 100, 450, 600],
          itemStyle: {
            color: '#fbd336'
          },
          symbolSize: px(6)
        }]
    }));
  }, []);

  return (
    <div className="bordered 到店频次">
      <h2>到店频次分析</h2>
      <div ref={divRef} className="chart">
      </div>
    </div>
  );
};