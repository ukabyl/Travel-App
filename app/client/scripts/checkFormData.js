import { upperCaseArray, daysLeft } from "./utils";

// Check form data in handling for any errors
const checkFormData = (data) => {
    const errors = [];

    Object.keys(data).forEach((key) => {
        console.log(data)
        if ( data[key].length === 0 ) {
            const arrayOfField = upperCaseArray(key);
            const formattedField = arrayOfField.map(text => text.toLowerCase());
            const field = formattedField.join(' ');

            errors.push(`<p>Please fill in <span class="error-field">${field}</span> field.</p>`)
        }
    });

    if(data['startDate'].length !== 0 && data['endDate'].length !== 0) {
        const startDateInMs = Date.parse(data['startDate']);
        const endDateInMs = Date.parse(data['endDate']);
        const rest = endDateInMs - startDateInMs;
        rest < 0 ? errors.push(`<p>Your dates shoudn't be <span class="error-field">start date ${data['startDate']}</span> and <span class="error-field">end date ${data['endDate']}</span></p>`) : null;
        daysLeft(data['startDate']) < 0 ? errors.push(`<p>You can't choose <span class="error-field">start date ${data['startDate']}</span>. It's past. </p>`) : null;
    }

    return errors;
}

export { checkFormData };