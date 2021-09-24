/* eslint-disable import/no-anonymous-default-export */
import { ADD_CARD, DELETE_CARD, DEGREE_UPDATE, SET_CARDS } from "../actions/actions";

const initialState = {
   cards: JSON.parse(localStorage.getItem('weather')) || []
}

export default (state = initialState, action) => {
   switch(action.type){
      case ADD_CARD:
         localStorage.setItem('weather', JSON.stringify([...state.cards, action.payload]))
         return {cards: [...state.cards, action.payload]};

      case SET_CARDS:
         localStorage.setItem('weather', JSON.stringify(action.payload))
         return {cards: action.payload};

      case DELETE_CARD:
         let newCards = state.cards.filter((card, i) => action.payload !== i)
         localStorage.setItem('weather', JSON.stringify(newCards))
         return {cards: newCards};

      case DEGREE_UPDATE:
            const newCardsDegree = state.cards.map((card, i) => {
               if(action.payload.id === i){
                  card.degreeSystem = action.payload.degreeSystem;
               }
               return card;
            })
            localStorage.setItem('weather', JSON.stringify(newCardsDegree))
            return {cards: newCardsDegree}

      default: 
         return state
   }
}