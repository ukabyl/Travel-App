const axios = require('axios').default;

export default class WeatherbitService {
    _baseUrl = 'https://api.weatherbit.io/v2.0/current?'
    _key = '&key=24f2d788fd92474f8742f3307a5f43e0';

    getWeather = async (lat, lon) => {
        const weatherInfo = await axios.get(this._baseUrl + `lat=${lat}&lon=${lon}` + this._key);
        return weatherInfo.data.data; 
    }
}