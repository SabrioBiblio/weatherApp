export const degreeConvert = (degree, to) => {
   const KELVIN = 273.15;

   switch (to){
      case 0: 
         return Math.floor((degree - KELVIN)) > 0 ? '+' + Math.floor((degree - KELVIN)) : Math.floor((degree - KELVIN)) < 0 ? '-' + Math.floor((degree - KELVIN)) : Math.floor((degree - KELVIN));
      case 1: 
         return Math.floor((degree - KELVIN) * 9/5 + 32) > 0 ? '+' + Math.floor((degree - KELVIN) * 9/5 + 32) : Math.floor((degree - KELVIN) * 9/5 + 32) < 0 ? '-' + Math.floor((degree - KELVIN) * 9/5 + 32) : Math.floor((degree - KELVIN) * 9/5 + 32);
      default:
         return Math.floor((degree - KELVIN));
   }
}

export const getTimeHourly = (time) => {

   let date = new Date(time * 1000);
   let hours = date.getHours();
   return hours;
}

export const setStorage = (to, data) => {
   localStorage.setItem(to, JSON.stringify(data))
}

export const getDate = (time, language) => {

   const getLocale = (lang) => {
      switch(lang){
         case 'ua': 
            return 'uk-UA';
         case 'en':
            return 'en-US'
         case 'ru':
            return 'ru-RU'
         default:
            return'en-US'
      }
   }

   const date = new Date(time * 1000)
   const dayName = date.toLocaleString(getLocale(language), {weekday: 'short'});
   const day = date.toLocaleString(getLocale(language), { day: 'numeric' });
   const month = date.toLocaleString(getLocale(language), { month: 'long' });
   const hours = this < 10 ? '0' + date.getUTCHours() : date.getUTCHours();
   const min = this < 10 ? '0' + date.getUTCMinutes() : date.getUTCMinutes();

   return `${dayName}, ${day} ${month}, ${hours}:${min}`
}

