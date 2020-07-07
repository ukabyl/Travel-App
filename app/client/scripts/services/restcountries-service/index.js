export default class RestcountriesService {
    _baseUrl = 'https://restcountries.eu/rest/v2/alpha/';

    getFlag = async (code) => {
        const flag = await fetch(this._baseUrl + code)
            .then(data => data.json())
            .then(data => data.flag);

        return flag;
    }
}