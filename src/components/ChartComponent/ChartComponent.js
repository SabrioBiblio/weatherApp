import React, { useState, useEffect } from 'react';

import s from './ChartComponent.module.css'
import { degreeConvert, getTimeHourly } from '../../utils/functions';

import { VictoryArea, VictoryLabel, VictoryAxis, VictoryChart } from 'victory'

export default function ChartComponent({hourly}) {

  let hourSlice = hourly.slice(0, 10);
  let timeArray = [];

  const temperatureArr = hourSlice.map(element => {
    return degreeConvert(element.temp);
  });
  
  const temperatureMin = Math.min(...temperatureArr);
  
  let newData = [];

  if(hourSlice !== null){
    newData = hourSlice.map((element, i) => {
      timeArray.push(getTimeHourly(element.dt))
      return {x: getTimeHourly(element.dt), y: degreeConvert(element.temp) , y0: temperatureMin - 2}
    })
  }
  return (
    <div className={s.ChartComponent}>
      <VictoryChart height={180}>
      <VictoryArea
      interpolation="basis"
      data={newData}
      style={{
        data: {
          fill: temperatureMin <= 0 ? '#5B8CFF' : '#FF715B',
          fillOpacity: 0.3,
          strokeWidth: 0,},
        labels: {
          fontSize: 8,
          fill: '#C5C5C5' 
        }
      }}
      labels={({ datum }  ) => datum.y}
      labelComponent={
        <VictoryLabel renderInPortal dy={-10}/>
    }
  />
  <VictoryAxis
    tickValues={timeArray}
    tickFormat={(hour, i) => {
      if(i === 0 || i === 9){
        return ''
      }else{
        return hour < 10 ? '0'+hour+':00' : hour+':00';
      }
    }}
    offsetY={temperatureMin > 0 ? 60 : 150}
    style={{
      axis: {
        stroke: "none"
      },
      tickLabels: {
        position: 'relative',
        zIndex: 1000,
        fontSize: 8,
        fill: '#C5C5C5' 
      }
    }}/>
  </VictoryChart>
  </div>
  )
}
  



  // return (
  //   <div className={s.chartTemperature}>
  //   <XYPlot width={320} height={100}>
  //     <XAxis/>
  //     <YAxis orientation='top'
  //     position='middle'
  //     width={300}
  //     tickPadding='100px'
  //     tickSizeOuter={100}/>
  //     <AreaSeries
  //       opacity={0.3}
  //       color='#FF715B'
  //       className="area-series-example"
  //       curve="curveBasis"
  //       data={newData}
  //     />
  //   </XYPlot>
  //   </div>
  // );