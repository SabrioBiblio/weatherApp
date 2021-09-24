import React, {useState, useRef, useEffect} from 'react'
import { useDispatch } from 'react-redux'


import Autocomplete from "react-google-autocomplete";
import LanguageChange from '../LanguageChange/LanguageChange';
import s from './Header.module.css'
import { translate } from '../../utils/translate';
import { getCard } from '../../actions/actions';

export default function Header({setLanguage, globalLanguage}) {

   const inputRef = useRef();

   const dispatch = useDispatch()

   const [pos, posUpdate] = useState(null);
   const [isDisabled, setIsDisable] = useState(true);

   let translateWord = translate(globalLanguage);

   useEffect(() => {
      inputRef.current.addEventListener('input', () => {
         setIsDisable(true)
      });
   }, []);

   useEffect(() => {

   }, [translateWord])

   return (
      <header>
         <div className={s.headerWrapper}>
            <Autocomplete
            className={s.headerSearchInput}
            placeholder={translateWord.cityName}
            ref={inputRef}
            apiKey='AIzaSyA9bslaj5Bl5nLuQQXe8rr_PkhDvvZqzMs'
            onPlaceSelected={(places) => {
               setIsDisable(false)
               let lon = places.geometry.location.lng();
               let lat = places.geometry.location.lat();
               posUpdate({
                  lon,
                  lat,
                  degree: 0,
               }) 
             }}
            />
            <button className={s.headerSearchButton} disabled={isDisabled} onClick={() => {dispatch(getCard(globalLanguage, pos));  setIsDisable(true); inputRef.current.value='';}}>{translateWord.addButton}</button>
            <div className={s.languageSwitcherWrapper}>
               <LanguageChange setLanguage={setLanguage} globalLanguage={globalLanguage}/>
            </div>
         </div>
      </header>
   )
}
