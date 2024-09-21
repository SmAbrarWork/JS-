const Clock = document.querySelector('div')


setInterval (
function () {
    let date = new Date
    console.log(date.toLocaleTimeString());
    Clock.innerHTML = date.toLocaleTimeString()
}, 1000)
