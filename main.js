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
                let wndspd = data['wind']['speed']

                cityResult.innerHTML = `City: <span>${nameOf}<span>`
                description.innerHTML = `Weather condition: <span>${descriptionVal}<span>`
                detailedDescription.innerHTML = `Detailed: <span>${detailedDesc}<span`
                temperature.innerHTML = `Temperature: <span>${temp} K<span>`
                minTemperature.innerHTML = `Minimum temperature: <span>${minTemp} K<span>`
                maxTemperature.innerHTML = `Maximum temperature: <span>${maxTemp} K<span>`
                humidity.innerHTML = `Humidity: <span>${hum}%<span>`
                pressure.innerHTML = `Pressure: <span>${pres} hPa<span>`
                wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`

            }).catch(err => alert('Oops! You entered wrong city name.'))
    })

}




