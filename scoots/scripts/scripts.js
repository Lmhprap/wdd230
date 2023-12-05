//To hide-uhide toggle button

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}


//To display current date 

const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
};
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);

//TO GET CURRENT WEATHER
//const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5604473&appid=ecc2a14865c0e91eab93612d2db7f58c&units=imperial";
const apiKey = '409f49352438f14dff06e48ea197cb14';
const latitude = 20.50038;
const longitude = -86.94272;

const APIurl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

const forecastGrid = document.getElementById('weatherforecast');

fetch(APIurl)
    .then(response => response.json())
    .then(data => {
        const forecastData = data.list;

        const groupedData = {};
        forecastData.forEach(forecast => {
            const date = forecast.dt_txt.split(' ')[0];
            if (!groupedData[date]) {
                groupedData[date] = forecast;
            }
        });

        let counter = 0;
        Object.keys(groupedData).forEach(date => {
            if (counter >= 3) {
                return;
            }

            const forecast = groupedData[date];

            const forecastCard = document.createElement('div');
            forecastCard.classList.add('forecast-card');

            const dateElement = document.createElement('p');
            dateElement.textContent = getDayName(date);
            dateElement.classList.add('headline');
            forecastCard.appendChild(dateElement);

            const temperature = document.createElement('p');
            temperature.textContent = Math.round(forecast.main.temp) + '°F';
            forecastCard.appendChild(temperature);


            const weatherIconSpan = document.createElement('span');
            let weatherIcon = forecast.weather[0].icon;
            weatherIconSpan.innerHTML = `<img class="weather-forcast-img" alt="${temperature.textContent}" src="https://openweathermap.org/img/w/${weatherIcon}.png">`;
            forecastCard.appendChild(weatherIconSpan);

            forecastGrid.appendChild(forecastCard);

            counter++;
        });
    })
    .catch(error => {
        console.log('Error:', error);
    });

function getDayName(dateString) {
    const date = new Date(dateString);
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return daysOfWeek[date.getDay()];
}