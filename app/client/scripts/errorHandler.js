const errorsModal = document.getElementById('errors');
const errorFields = document.getElementById('error-fields');
M.Modal.init(errorsModal);

const errorHandler = (errors) => {
    if (errors.length !== 0 && Array.isArray(errors)) {
            errorFields.innerHTML = '';
            errors.forEach(error => errorFields.innerHTML += `${error}`);
            M.Modal.getInstance(errorsModal).open()
    }
}

export { errorHandler };