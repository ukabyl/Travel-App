const axios = require('axios').default;

export default class RestcountriesService {
    _baseUrl = 'https://restcountries.eu/rest/v2/alpha/';

    getFlag = async (code) => {
        const data = await axios.get(this._baseUrl + code)
        return data.data.flag;
    }
}