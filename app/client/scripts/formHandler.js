import { errorHandler } from './errorHandler';
import { transformData } from './utils';

import Ui from './ui';

// Import services
import GeonamesService from './services/geonames-service';
import WeatherbitService from './services/weatherbit-service';
import PixabayService from './services/pixabay-service';
import RestcountriesService from './services/restcountries-service';

// Initilize services
const geonameService = new GeonamesService();
const weatherbitService = new WeatherbitService();
const pixabayService = new PixabayService();
const restcountriesService = new RestcountriesService();

const ui = new Ui();

const formHandler = async (data) => {
    try {
        const geoNames = await geonameService.getGeoName(data.toLocation);
        if(!geoNames) {
            throw new Error('No such country or city!');
        } 

        const weather = await weatherbitService.getWeather(geoNames.lat, geoNames.lng);
        const image = await pixabayService.getImage(geoNames.name);
        const flag = await restcountriesService.getFlag(geoNames.countryCode);

        const transformedData = transformData({
            weather,
            image,
            flag,
            geoNames,
            data
        });

        ui.buildUi(transformedData);
        const res = await fetch('http://localhost:8080/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(transformedData)
        });
        const trips = await res.json();
        localStorage.setItem('trips', JSON.stringify(trips));
    
    } catch(e) {
        errorHandler(e.message);
    }
}

export { formHandler };