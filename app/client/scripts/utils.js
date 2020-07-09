// Split an uppercase styled text to an array
const upperCaseArray = (text) => text.replace(/([A-Z]+)/g, ",$1").replace(/^,/, "").split(",");

// Convert milleseconds to days
const _mlsToDays = (mls) => (mls / (60*60*24*1000)) % 365;

// Count a quantity of days from start date to end date
const _quantityOfDays = (startDate, endDate) => _mlsToDays(Date.parse(endDate) - Date.parse(startDate));

// Count quantity of days from current date to start date
const daysLeft = (startDate) => Math.ceil(_mlsToDays(Date.parse(startDate) - Date.now()));

// Transform form data for server request and save in this 
const transformData = ({ weather, image, flag, geoNames, data }) => {
    if(!weather) {
        return {}
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
    
};


export {
    upperCaseArray,
    transformData,
    daysLeft
}