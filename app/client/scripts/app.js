// Import styles&plugins
import '../styles/main.scss';
import '../libs/materialize/materialize.js';
import './current-date.js';

import { formHandler } from './formHandler';
import { checkFormData } from './checkFormData';
import { errorHandler } from './errorHandler';

// Initialize plugins&events after content loaded
document.addEventListener('DOMContentLoaded', () => {
    const datePcikers = document.querySelectorAll('.date');
    const modals = document.querySelectorAll('.modal');

    M.Datepicker.init(datePcikers);
    M.Modal.init(modals);

    // Initialize vars from DOM
    const form = document.getElementById('form');
    const fromLocation = document.getElementById('from');
    const toLocation = document.getElementById('to');
    const startDate = document.getElementById('start-date');
    const endDate = document.getElementById('end-date');    

    startDate.addEventListener('focus', () => startDate.click());
    endDate.addEventListener('focus', () => endDate.click());

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = { 
            fromLocation: fromLocation.value, 
            toLocation: toLocation.value,
            startDate: startDate.value, 
            endDate: endDate.value
        };
        
        const errors = checkFormData(data);
        if(errors.length > 0) {
            return errorHandler(errors);
        } else {
            formHandler(data);
        }
    });
});