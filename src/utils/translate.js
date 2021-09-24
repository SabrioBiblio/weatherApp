export const translate = (lang) => {
   switch (lang) {
      case 'en' : 
         return {
            wind: 'Wind',
            humidity: 'Humidity',
            pressure: 'Pressure',
            fellsLike: 'Feels like',
            ms: 'm/s',
            cityName: 'City name...',
            addButton: 'Add',
         }
      case 'ru' : 
         return {
            wind: 'Ветер',
            humidity: 'Влажность',
            pressure: 'Давление',
            fellsLike: 'Чувствуется как',
            ms: 'м/с',
            cityName: 'Название города...',
            addButton: 'Добавить',
         }
      case 'ua' : 
         return {
            wind: 'Вітер',
            humidity: 'Волога',
            pressure: 'Тиск',
            fellsLike: 'Відчувається як',
            ms: 'м/с',
            cityName: 'Назва міста...',
            addButton: 'Додати',
         }
      default: 
         return {
            wind: 'Wind',
            humidity: 'Humidity',
            pressure: 'Pressure',
            fellsLike: 'Feels like',
            ms: 'm/s',
            cityName: 'City name...',
            addButton: 'Add',
         }
   }
}