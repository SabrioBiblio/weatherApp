import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

import CardWeather from '../CardWeather/CardWeather';
import s from './WeatherList.module.css'

export default function WeatherList({globalLanguage, cardsData, deleteCard, func}) {

  const cards = useSelector((state) => state.cards);

  // const [cardsPosition, cardsPositionUpdate] = useState(JSON.parse(localStorage.getItem('weather')) || []);

  // useEffect(() => {

  // }, [globalLanguage])

  if(cards.length === 0){
    return (
      <>
      </>
    )
  }
  return (  
    <div className={s.cardsWrapper}>
      {cards.map((data, i) => <CardWeather data={data} index={i} key={i} globalLanguage={globalLanguage} deleteCard={deleteCard}/>)}
    </div>
  )
}
