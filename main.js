let inpCity = document.querySelector("#inp-city");
let addingButton = document.querySelector("#adding");
let cityResult = document.querySelector("#city-result");
let detailedDescription = document.querySelector("#detailed-description");
let description = document.querySelector("#description");
let temperature = document.querySelector("#temperature");
let minTemperature = document.querySelector("#min-temperature");
let maxTemperature = document.querySelector("#max-temperature");
let humidity = document.querySelector("#humidity");
let pressure = document.querySelector("#pressure");
let wind = document.querySelector("#wind");

APIkey = "aa9b7597c845a9a6e6047cacaab43474"

function kelvinToCelsius(kelvin) {
    return (kelvin - 273).toFixed(1);
}

function kmHourTomSec(kmHour) {
    return (kmHour * 1000 / 3600).toFixed(1);
}

function degToDirection(deg) {
    switch (true) {
        case deg == 360 || deg == 0:
            return "N"
        case deg == 90:
            return "E";
        case deg == 180:
            return "S";
        case deg < 90 && deg > 0:
            return "NE";
        case deg > 90 && deg < 180:
            return "SE";
        case deg > 180 && deg < 270:
            return "SW";
        case deg > 270 && deg < 360:
            return "NW";
        default:
            break;
    }
}

window.onload = function () {

    addingButton.addEventListener('click', function () {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inpCity.value + "&appid=3045dd712ffe6e702e3245525ac7fa38")
            .then(res => res.json()).then(data => {

                let nameOf = data['name']
                let descriptionVal = data['weather']['0']['main']
                let detailedDesc = data['weather']['0']['description']
                let temp = data['main']['temp']
                let minTemp = data['main']['temp_min']
                let maxTemp = data['main']['temp_max']
                let hum = data['main']['humidity']
                let pres = data['main']['pressure']
                let windSpeed = data['wind']['speed']
                let windDirection = data['wind']['deg']

                cityResult.innerHTML = `City: <span>${nameOf}<span>`
                description.innerHTML = `Weather condition: <span>${descriptionVal}<span>`
                detailedDescription.innerHTML = `Detailed: <span>${detailedDesc}<span`
                temperature.innerHTML = `Temperature: <span>${kelvinToCelsius(temp)} C<span>`
                minTemperature.innerHTML = `Minimum temperature: <span>${kelvinToCelsius(minTemp)} C<span>`
                maxTemperature.innerHTML = `Maximum temperature: <span>${kelvinToCelsius(maxTemp)} C<span>`
                humidity.innerHTML = `Humidity: <span>${hum}%<span>`
                pressure.innerHTML = `Pressure: <span>${pres} hPa<span>`
                wind.innerHTML = `Wind speed, direction: <span>${kmHourTomSec(windSpeed)} m/s, ${degToDirection(windDirection)}<span>`

            }).catch(err => alert('Oops! You entered wrong city name.'))
    })

}




