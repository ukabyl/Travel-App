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
    console.log('weather', weather)
    console.log('image',image)
    console.log('flag',flag)
    console.log('geoNames',geoNames)
    console.log('data',data)
    // `Your trip to ${trip.city} is ${daysLeft} days away`
    return {
        departure_point: data.fromLocation,
        departure_point: geoNames.name,
        country: geoNames.countryName,
        departure_time: data.startData,
        return: data.endDate,
        time_relax: _quantityOfDays(data.startDate, data.endDate),
        days_left: daysLeft(data.startDate),
        image: image.hits[0].largeImageURL,
        flag: flag,
        sunrise: weather[0].sunrise,
        sunset: weather[0].sunset,
        temp: weather[0].app_temp
        
    }
}

export {
    upperCaseArray,
    transformData,
    daysLeft
}