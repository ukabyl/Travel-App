// Import styles&plugins
import '../styles/main.scss';
import '../libs/materialize/materialize.js';
import './current-date.js';

// Import services
import GeonamesService from './services/geonames-service';
import WeatherbitService from './services/weatherbit-service';
import PixabayService from './services/pixabay-service';
import RestcountriesService from './services/restcountries-service';

import { formHandler } from './formHandler';
import { checkFormData } from './checkFormData';
import { errorHandler } from './errorHandler';

// Initilize services
const geonameService = new GeonamesService();
const weatherbitService = new WeatherbitService();
const pixabayService = new PixabayService();
const restcountriesService = new RestcountriesService();

// Initialize plugins&events after content loaded
document.addEventListener('DOMContentLoaded', () => {
    const datePcikers = document.querySelectorAll('.date');
    const modals = document.querySelectorAll('.modal');

    M.Datepicker.init(datePcikers);
    M.Modal.init(modals);

    // Initialize vars from DOM
    const form = document.getElementById('form');
    const fromLocation = document.getElementById('from');
    const toLocation = document.getElementById('to');
    const startDate = document.getElementById('start-date');
    const endDate = document.getElementById('end-date');    

    startDate.addEventListener('focus', () => startDate.click());
    endDate.addEventListener('focus', () => endDate.click());

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = { 
            fromLocation: fromLocation.value, 
            toLocation: toLocation.value,
            startDate: startDate.value, 
            endDate: endDate.value
        };
        
        const errors = checkFormData(data);
        errors.length > 0 ? errorHandler(errors) : formHandler(data);
        

        geonameService.getGeoName('zarafshan').then((data) => {
            weatherbitService.getWeather(data.lat, data.lng)
            .then(data => console.log(data))
            pixabayService.getImage(data.name).then(data => console.log(data));
            restcountriesService.getFlag(data.countryCode).then(data => console.log(data));
            console.log(data)
        });
    });
});