import '../styles/main.scss';
import './materialize/materialize.js';
import './current-date.js';
import GeonamesService from './services/geonames-service';
import WeatherbitService from './services/weatherbit-service';
import PixabayService from './services/pixabay-service';
import RestcountriesService from './services/restcountries-service';

const geonameService = new GeonamesService();
const weatherbitService = new WeatherbitService();
const pixabayService = new PixabayService();
const restcountriesService = new RestcountriesService();

geonameService.getGeoName('zarafshan').then((data) => {
    weatherbitService.getWeather(data.lat, data.lng)
    .then(data => console.log(data))
    pixabayService.getImage(data.name).then(data => console.log(data));
    restcountriesService.getFlag(data.countryCode).then(data => console.log(data));
    console.log(data)
});

document.addEventListener('DOMContentLoaded', function() {
    const datePcikers = document.querySelectorAll('.date');
    var modals = document.querySelectorAll('.modal');

    M.Datepicker.init(datePcikers);
    M.Modal.init(modals);
});