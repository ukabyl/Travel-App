function upperCaseArray(text) {
    var result = text.replace(/([A-Z]+)/g, ",$1").replace(/^,/, "");
    return result.split(",");
}

function _mlsToDays(mls) {
    return (mls / (60*60*24*1000)) % 365;
}

function _quantityOfDays(startDate, endDate) {
    const mls = Date.parse(endDate) - Date.parse(startDate);
    return _mlsToDays(mls);
}

function daysLeft(startDate) {
    const mls = Date.parse(startDate) - Date.now();
    return Math.ceil(_mlsToDays(mls));
}

function transformData({ weather, image, flag, geoNames, data }) {
    if(!weather) {
        return {};
    }
    return {
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
        
    }
}

export {
    upperCaseArray,
    transformData,
    daysLeft
}