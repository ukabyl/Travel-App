export default class GeonamesService {

    _baseUrl = 'http://api.geonames.org/searchJSON?formatted=true&q=';
    _parameters = '&username=ukabyl&style=full&maxRows=1';

    getGeoName = async (nameOfLocation) => {
        const geoInfo = await fetch(this._baseUrl + nameOfLocation + this._parameters)
            .then(data => data.json())
            .then(data => data.geonames[0]);
        return geoInfo; 
    }
}