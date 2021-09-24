import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Header from "./components/Header/Header";
import WeatherList from "./components/WeatherList/WeatherList";
import { setStorage } from "./utils/functions";
import { getUserPosition } from "./actions/actions";

function App() {

  const dispatch = useDispatch()

  const [globalLanguage, setGlobalLanguage] = useState(localStorage.getItem('language') || 'en');

  useEffect(() => {
    dispatch(getUserPosition(globalLanguage))
  }, [])

  const setLanguage = (language) => {
    localStorage.setItem('language', language)
    setGlobalLanguage(language)
  }

  return (
    <div className="container">
      <Header setLanguage={setLanguage} globalLanguage={globalLanguage}/>
      <WeatherList globalLanguage={globalLanguage}/>
    </div>
  );
}

export default App;
