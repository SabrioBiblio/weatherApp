export const ADD_CARD = 'ADD_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const DEGREE_UPDATE = 'DEGREE_UPDATE';
export const UPDATE_CARDS = 'UPDATE_CARDS';
export const SET_CARDS = 'SET_CARDS';

const addCard = (payload) => {
   return {
      type: ADD_CARD,
      payload
   }
}

const setCards = (payload) => {
   return {
      type: SET_CARDS,
      payload
   }
}

const request = async (globalLanguage, coord) => {
   const require = await fetch(`https://api.openweathermap.org/data/2.5/weather?lang=${globalLanguage}&lat=${coord.lat}&lon=${coord.lon}&appid=15cd78f0f22b9d9f4119aaf4beeaa7b6`)
      const result = await require.json();
      const require2 = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lang=${globalLanguage}&lat=${coord.lat}&lon=${coord.lon}&appid=15cd78f0f22b9d9f4119aaf4beeaa7b6`)
      const result2 = await require2.json();
      const data = {
         coord: result.coord,
         dt: result.dt,
         main: result.main,
         name: result.name,
         sys: result.sys,
         timezone: result.timezone,
         weather: result.weather,
         wind: result.wind,
         hourly: result2.hourly,
         degreeSystem: 0
      }
   return data;
}

export const degreeUpdate = (payload) => {
   return {
      type: DEGREE_UPDATE,
      payload
   }
}

export const updateCards = (globalLanguage) => {
   return async (dispatch, getState) => {
      const { cards } = getState();
      const newCards = await Promise.all(cards.map(card => {
         return request(globalLanguage.value, card.coord)
      }));
      dispatch(setCards(newCards))
   }
}

export const deleteCard = (payload) => {
   return {
      type: DELETE_CARD,
      payload
   }
}

export const getCard = (globalLanguage, card) => {
   return async dispatch => {
      dispatch(addCard(await request(globalLanguage, card)))
   }
}