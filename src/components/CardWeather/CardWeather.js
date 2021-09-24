import { React, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import s from "./CardWeather.module.css"
import { translate } from '../../utils/translate';
import { degreeConvert, getDate } from '../../utils/functions'
import spiner from '../../images/spiner.svg'
import ChartComponent from '../../ChartComponent/ChartComponent';
import { deleteCard, degreeUpdate } from '../../actions/actions';

export default function CardWeather({data, globalLanguage, index}) {


   const dispatch = useDispatch()

   useEffect(() => {

   }, [globalLanguage]);

   let translateWord = translate(globalLanguage);

   const { main: {temp, feels_like, pressure, humidity}, weather: [{description, icon}], name, sys: {country}, wind: {speed}, dt, timezone, hourly, degreeSystem } = data;

   return ( 
      <div className={s.cardWeatherWrapper}>
         <div className={s.cardWeatherHeader}>
            <div>
               <div>
                  <h2 className={s.cityName}>{name}, {country}</h2>
                  <span className={s.cardWeatherDate}>{getDate(dt + timezone , globalLanguage)}</span>
            </div>
            </div>
            <span className={s.cardWeatherTerm}><img src={`http://openweathermap.org/img/wn/${icon}.png`} alt="" /><p>{description[0].toUpperCase() + description.slice(1)}</p></span>
         </div>
         <ChartComponent hourly={hourly}/>
         <div className={s.cardWeatherProps}>
            <div className={s.cardWeatherDegreeWrapper}>
               <div className={s.cardWeatherDegree}>
                  <span>{degreeConvert(temp, degreeSystem)}</span>
                  <div className={s.cardWeatherDegreeSwitcher}>
                     <span onClick={() => {dispatch(degreeUpdate({id: index, degreeSystem: 0})); degreeConvert(temp, degreeSystem)}} className={!degreeSystem ? s.degreeActive : null}>°C</span> | <span onClick={() => {dispatch(degreeUpdate({id: index, degreeSystem: 1})); degreeConvert(temp, degreeSystem)}} className={degreeSystem ? s.degreeActive : null}>°F</span>
                  </div>
               </div>
               <p className={s.cardWeatherFeels}>{translateWord.fellsLike}: {degreeConvert(feels_like, degreeSystem)} C</p>
            </div>
            <div className={s.cardWeatherParams}>
               <p>{translateWord.wind}: <span>{Math.round(speed)} {translateWord.ms}</span></p>
               <p>{translateWord.humidity}: <span>{humidity}%</span></p>
               <p>{translateWord.pressure}: <span>{pressure}Pa</span></p>
            </div>
         </div>
         <span className={s.cardWeatherClose} onClick={() => dispatch(deleteCard(index))}>×</span>
      </div>
   )
}
