export default class Ui {
    buildUi(data) {
        const _contentModal = document.getElementById('content');
        const _contentFields = document.getElementById('content-fields');
        const _contentModalInstance = M.Modal.getInstance(_contentModal);
        _contentFields.innerHTML = `
            <h1 class="content__title">Your trip</h1>
            <div class="country-info">
                    <img src="${data.flag}" />
                    <span>${data.country}</span>
            </div>
            <ul>
                <li>Your trip to <span>${data.departure_point}</span> is <span>${data.days_left}</span> days away</li>
                <li>Departure from: <span>${data.departure_from}</span></li>
                <li>Departure time: <span>${data.departure_time}</span></li>
                <li>Return: <span>${data.return}</span></li>
                <li>Time relax <span>${data.time_relax}</span> days</li>
                <li>Temperature: ${data.temp} Celsius. <span>${data.weather_desc}</span>. Sunrise on <span>${data.sunrise}</span>. Sunset on <span>${data.sunset}</span></li>
            </ul>
            ${data.image.length !== 0 ? `<img src="${data.image}" class="content__picture">` : ''} 
        `;
        
        _contentModalInstance.open();
    }
}

const ui = new Ui();
const listContent = document.getElementById('list-of-trips-content');

export const buildList = () => {
    const trips = JSON.parse(localStorage.getItem('trips'));
    let lists = '';
    if (!trips) {
        listContent.innerHTML = `<h2 class="no-trips">No trips, sorry.</h2>`
    }
    trips.forEach(trip => {
        lists += `
        <li class="collection-item avatar">
            <i class="list-icon material-icons circle" style="background-image: url(${trip.flag})">
            </i>
            <span class="title">${trip.departure_point}</span>
            <p>Celsius ${trip.temp}<br>
                Departure time ${trip.startDate}
            </p>
            <button class="btn btn-small secondary-content" data-id="${trip.departure_point}"><i class="material-icons">open</i></button>
        </li>
        `
    })
    listContent.innerHTML = lists;
    const listOfTripsButtons = document.querySelectorAll('.secondary-content');
    listOfTripsButtons.forEach(list => {
        list.addEventListener('click', () => {
            trips.forEach(trip => {
                if (trip.departure_point === list.dataset.id) {
                    ui.buildUi(trip);
                }
            })
        })
    })

}   