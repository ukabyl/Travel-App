const axios = require('axios').default;

export default class GeonamesService {

    _baseUrl = 'http://api.geonames.org/searchJSON?formatted=true&q=';
    _parameters = '&username=ukabyl&style=full&maxRows=1';

    getGeoName = async (nameOfLocation) => {
        const geoInfo = await axios.get(this._baseUrl + nameOfLocation + this._parameters);
        return geoInfo.data.geonames[0];
    }
}