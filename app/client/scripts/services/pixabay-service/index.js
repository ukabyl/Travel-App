const axios = require('axios').default;

export default class PixabayService {

    _baseUrl = 'https://pixabay.com/api/'
    _key = '&key=17362385-c593dd9b22cee48534d052eab';
    _parameters = `&image_type=photo&pretty=true&category=places&orientation=horizontal`;

    getImage = async (city) => {
        const image = await axios.get(this._baseUrl + `?q=${city}` + this._parameters + this._key);
        return image.data; 
    }

}