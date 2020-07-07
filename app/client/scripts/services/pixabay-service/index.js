export default class PixabayService {

    _baseUrl = 'https://pixabay.com/api/'
    _key = '&key=17362385-c593dd9b22cee48534d052eab';
    _parameters = `&image_type=photo&pretty=true&category=places&orientation=horizontal`;

    getImage = async (city) => {
        const image = await fetch(this._baseUrl + `?q=${city}` + this._parameters + this._key)
            .then(data => data.json())
            .then(data => data);
        return image; 
    }

}