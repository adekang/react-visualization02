import React from 'react';


export const Chart3 = () => {
  return (
    <div className="bordered 客流峰值">
      <h2>客流峰值分析</h2>
      <div className="upPart">
        <h3>总人数：<span>81270人</span></h3>
        <div className="upPart1">
          <p>上午（8：00-11：00）</p>
          <div/>
        </div>
        <div>
          <p>中午（11：00-14：00）</p>
          <div className="upPart2"/>
        </div>
        <div>
          <p>下午（14：00-17：00）</p>
          <div className="upPart3"/>
        </div>
        <div>
          <p>晚上（17：00-21：00）</p>
          <div className="upPart4"/>
        </div>
      </div>
    </div>
  );
};