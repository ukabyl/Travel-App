import '../styles/main.scss';
import './materialize/materialize.js';

document.addEventListener('DOMContentLoaded', function() {
    const elem = document.getElementById('date');
    M.Datepicker.init(elem);
});