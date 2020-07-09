const upperCaseArray = (text) => text.replace(/([A-Z]+)/g, ",$1").replace(/^,/, "").split(",");

const _mlsToDays = (mls) => (mls / (60*60*24*1000)) % 365;

const _quantityOfDays = (startDate, endDate) => _mlsToDays(Date.parse(endDate) - Date.parse(startDate));

const daysLeft = (startDate) => Math.ceil(_mlsToDays(Date.parse(startDate) - Date.now()));

const transformData = ({ weather, image, flag, geoNames, data }) => ({
    departure_from: data.fromLocation,
    departure_point: geoNames.name,
    country: geoNames.countryName,
    departure_time: data.startDate,
    return: data.endDate,
    time_relax: _quantityOfDays(data.startDate, data.endDate),
    days_left: daysLeft(data.startDate),
    image: image.hits[0] ? image.hits[0].largeImageURL : '',
    flag: flag,
    sunrise: weather[0].sunrise,
    sunset: weather[0].sunset,
    temp: weather[0].app_temp,
    weather_desc: weather[0].weather.description
    
});


export {
    upperCaseArray,
    transformData,
    daysLeft
}