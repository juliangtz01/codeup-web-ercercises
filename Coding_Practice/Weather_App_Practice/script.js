const timeE1 = document.getElementById('time');
const dateE1 = document.getElementById('date');
const currentWeatherItemsE1 = document.getElementById('current-weather-items');
const timeZone = document.getElementById('time-zone');
const countryE1 = document.getElementById('country');
const weatherForecastE1 = document.getElementById('weather-forecast');
const currentTempE1 = document.getElementById('current-temp');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct',
                'Nov', 'Dec'];

const API_KEY = '25f3f6e380d02ecb447f74d5ba536b0a';

setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour % 12: hour;
    const minutes = time.getMinutes();
    const ampm = hour > 12 ? 'PM' : 'AM';

    timeE1.innerHTML = hoursIn12HrFormat + ':' + minutes + ' ' + `<span id="am-pm">${ampm}</span>`

    dateE1.innerHTML = days[day] + ', ' + date + ' ' + minutes + ' ' + `<span id="am-pam">${ampm}</span>`
},1000);

getWeatherData();

function getWeatherData()
{
    navigator.geolocation.getCurrentPosition((success) =>{
        console.log(success);

        let {latitude, longitude} = success.coords;

        //had to use a different API, because the one used on the youtube exercise is for a pid subscription. Some display items may or may show with the new API.
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {
            console.log(data);
            showWeatherData(data);
        })
    })
}

function showWeatherData(data)
{
    let {accuracy, pressure, sunrise, sunset, wind_speed} = data.coords;

    currentWeatherItemsE1.innerHTML =
        `<div class="weather-item">
\t\t\t\t\t\t<div>Humidity</div>
\t\t\t\t\t\t<div>${accuracy}</div>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="weather-item">
\t\t\t\t\t\t<div>Pressure</div>
\t\t\t\t\t\t<div>${pressure}</div>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="weather-item">
\t\t\t\t\t\t<div>Wind Speed</div>
\t\t\t\t\t\t<div>${wind_speed}</div>
\t\t\t\t\t</div>`
}