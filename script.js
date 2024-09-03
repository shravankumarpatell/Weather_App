const apikey = "fdeda538d6a3707a89bb4b967e2991ba";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
let cityname;
const weatherIcon = document.querySelector(".weather-icon");


function getLocationAndWeather() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                checkWeather({ latitude, longitude });
            },
            showError
        );
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}


document.querySelector('button').addEventListener('click', function(e){
    e.preventDefault();
    cityname = document.querySelector('input').value;
    checkWeather({ city: cityname });
});



async function checkWeather({ city = null, latitude = null, longitude = null }) {
    let url;
    if (city) {
        url = `${apiUrl}&q=${city}&appid=${apikey}`;
    } else if (latitude && longitude) {
        url = `${apiUrl}&lat=${latitude}&lon=${longitude}&appid=${apikey}`;
    } else {
        alert("Please provide a city name or allow location access.");
        return;
    }

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.status === 404 || data.cod === "404") {
            alert("City not found. Please enter a valid city name.");
            return;
        }

        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.city').innerHTML = `${data.name}`;
        document.querySelector('.temp').innerHTML = `${Math.floor(data.main.temp)}°c`;
        document.querySelector('.humidity').innerHTML = `${data.main.humidity} %`;
        document.querySelector('.wind').innerHTML = `${data.wind.speed} Km/h`;

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png"
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png"
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png"
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png"
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png"
        }
    } catch (error) {
        alert("An error occurred while fetching the weather data. Please try again later.");
        console.error("Error fetching weather data:", error);
    }
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}

window.onload = getLocationAndWeather;
