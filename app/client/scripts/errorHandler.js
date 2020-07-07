const errorsModal = document.getElementById('errors');
const errorFields = document.getElementById('error-fields');
M.Modal.init(errorsModal);


const errorHandler = (errors) => {
    errorFields.innerHTML = '';
    const errorModalInstance = M.Modal.getInstance(errorsModal);

    if (errors.length !== 0 && Array.isArray(errors)) {
            errors.forEach(error => errorFields.innerHTML += `${error}`);
            errorModalInstance.open();
    } else if(typeof errors === 'string') {
        errorFields.innerHTML += `<p>${errors}</p>`;
        errorModalInstance.open();
    }
}

export { errorHandler };