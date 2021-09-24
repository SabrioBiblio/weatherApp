import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import Select from 'react-select'
import { updateCards } from '../../actions/actions';

export default function LanguageChange({setLanguage, globalLanguage}) {

   const [selectedLang, selectedLangUpdate] = useState(globalLanguage);

   const dispatch = useDispatch();

   const options = [
      {value: 'ru', label: 'RU'},
      {value: 'en', label: 'EN'},
      {value: 'ua', label: 'UA'}
   ];

   let indexLang = 0;
   options.forEach((el, i) => {
      if(el.value === globalLanguage){
         indexLang = i;
      }
   })

   const customStyles = {
      singleValue: () => ({
         position: 'absolute',
         left: 5
      }),
      option: (provided, state) => ({
        ...provided,
        
        height: 25,
        display: 'flex',
        alignItems: 'center',
        background: state.isFocused ? '#F2F2F2' : 'white',
        color: 'black'
      }),
      control: () => ({
        // none of react-select's styles are passed to <Control />
        width: 70,
        display: 'flex',
        boxShadow: '0px 2px 3px #00000010',
      }),
      indicatorSeparator: () => ({
         display: 'none'
      }),
      menu: () => ({
         zIndex: 1,
         position: 'absolute',
         width: '100%',
         borderRadius: 'none',
         boxShadow: '0px 3px 6px #00000029',
      })
    }

   const switchEvent = (selectedLang) => {
      setLanguage(selectedLang.value)  
      selectedLangUpdate(selectedLang)
      dispatch(updateCards(selectedLang));
   }

   return (
      <>
      <Select styles={customStyles} isSearchable={false} onChange={switchEvent} value={options[indexLang]} options={options}/>
      </>
   )
}
