import { errorHandler } from './errorHandler';

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

const formHandler = async (data) => {
    try {
        const geoNames = await geonameService.getGeoName(data.toLocation);
        if(!geoNames) {
            throw new Error('No such country or city!');
        } 

        const weather = await weatherbitService.getWeather(geoNames.lat, geoNames.lng);
        const image = await pixabayService.getImage(geoNames.name);
        const flag = await restcountriesService.getFlag(geoNames.countryCode);
    
    } catch(e) {
        errorHandler(e.message);
    }
    // geonameService.getGeoName(data.toLocation).then((data) => {
    //     weatherbitService.getWeather(data.lat, data.lng)
    //     .then(data => console.log(data))
    //     pixabayService.getImage(data.name).then(data => console.log(data));
    //     restcountriesService.getFlag(data.countryCode).then(data => console.log(data));
    //     console.log(data)
    // });
}

export { formHandler };