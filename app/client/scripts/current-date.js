const todayElement = document.getElementById('today');

setInterval(() => {
    const today = new Date(Date.now()).toLocaleString();
    todayElement.textContent = today;
}, 1000)