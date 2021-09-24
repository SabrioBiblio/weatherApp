import { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import WeatherList from "./components/WeatherList/WeatherList";
import { setStorage } from "./utils/functions";

function App() {

  const [userPosition, posUpdate] = useState([]);
  const [globalLanguage, setGlobalLanguage] = useState(localStorage.getItem('language') || 'en');
  // const [cardsPosition, cardsPositionUpdate] = useState(JSON.parse(localStorage.getItem('weather')) || []);
  const [cardsData, cardsDataUpdate] = useState([]);

  // const cardsInit = () => {
  //   async function getDataPositions() {
  //     return await Promise.all(cardsPosition.map(async card => {
  //       let data = [];
  //       await fetch(`https://api.openweathermap.org/data/2.5/weather?lang=${globalLanguage}&lat=${card.lat}&lon=${card.lon}&appid=15cd78f0f22b9d9f4119aaf4beeaa7b6`)
  //       .then(response => response.json())
  //       .then(wheather => data.push(wheather))
  //       await fetch(`https://api.openweathermap.org/data/2.5/onecall?lang=${globalLanguage}&lat=${card.lat}&lon=${card.lon}&appid=15cd78f0f22b9d9f4119aaf4beeaa7b6`)
  //       .then(response => response.json())
  //       .then(wheather => data.push(wheather.hourly))
  //       return data
  //     }))
  //   }
  //   getDataPositions().then(data => {cardsDataUpdate(data)});
  // }

  // const func = (id, degreeSystem) => {
  //   let newCards = cardsPosition;
  //   [...newCards][id].degree = degreeSystem;

  //   cardsPositionUpdate(newCards)
  //   setStorage('weather', [...cardsPosition])
  // }

  // const addCard = (position) => {
  //   setStorage('weather', [...cardsPosition, position])
  //   cardsPositionUpdate([...cardsPosition, position])
  // }
  // const deleteCard = (id) => {
  //   const newCards = cardsPosition.filter((card, i) => {
  //     if(i !== id){
  //       return card;
  //     }
  //   })
  //   setStorage('weather', newCards)
  //   cardsPositionUpdate(newCards);
  // }
  

  // useEffect(() => {
  //   if(!Object.keys(userPosition).length){
  //     let promPosition = new Promise(function(resolve) {
  //       navigator.geolocation.getCurrentPosition((pos) => {
  //         let lon = pos.coords.longitude;
  //         let lat = pos.coords.latitude;
  //         resolve({lon, lat})
  //       })
  //     })
  //     promPosition.then((res) => {
  //       posUpdate([res]);
  //     })
  //   }
  // }, [userPosition]);

  // useEffect(() => {
  //   localStorage.setItem('weathers', JSON.stringify(cardsArr))
  // }, [cardsArr]);

  useEffect(() => {

  }, [cardsData])

  // useEffect(() => {
  //     cardsInit();
  // }, [globalLanguage, cardsPosition])


  const setLanguage = (language) => {
    localStorage.setItem('language', language)
    setGlobalLanguage(language)
  }

  return (
    <div className="container">
      <Header setLanguage={setLanguage} globalLanguage={globalLanguage} /*addCard={addCard}*//>
      <WeatherList globalLanguage={globalLanguage} userPosition={userPosition} cardsData={cardsData} /*deleteCard={deleteCard}*//>
    </div>
  );
}

export default App;
