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
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=3530103&units=imperial&APPID=f231a64fe0bf673894728e2e53615a71";
//Go fetch it and then wait for a response.
fetch(apiURL)
	.then((response) => response.json())
	.then((weatherInfo) => {
		//Once it comes back, display it to the console.
		console.log(weatherInfo);

		//	currently weather
		document.getElementById("currentWeather").innerHTML = weatherInfo.weather[0].main;
		//	current temperature
		document.getElementById("currentTemp").innerHTML = weatherInfo.main.temp.toFixed(1) + " ºF";
		//	highest temperature
		//document.getElementById("maxTemp").innerHTML = weatherInfo.main.temp_max.toFixed(1) + " ºF";
		//	feels like
		document.getElementById("feelsLike").innerHTML = weatherInfo.main.feels_like.toFixed(1) + " ºF";
		//	humidity
		document.getElementById("humidity").innerHTML = weatherInfo.main.humidity.toFixed(1) + "%";
		//	wind speed
		document.getElementById("windSpeed").innerHTML = weatherInfo.wind.speed.toFixed(1) + " mph";

	}); //end of "then" fat arrow function

//TO GET THREE-DAYS FORECAST
const day = new Date();

const todayDayNumber = day.getDay();

let forecastDayNumber = todayDayNumber;

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=3530103&appid=ecc2a14865c0e91eab93612d2db7f58c&units=imperial";

fetch(apiURL2)
	.then((response) => response.json())
	.then((weatherInfo) => {

		let mylist = weatherInfo.list;

		let forecastDayNumber = todayDayNumber;
	
				
		//let townName = document.getElementById("townName").textContent = weatherInfo.city.name + ": Five Days Forecast";
		
		for (i = 0; i < mylist.length-20; i++) { // → 12, 20
		
			let time = mylist[i].dt_txt;
			if (time.includes('18:00:00')) {
				
				forecastDayNumber += 1;
				if (forecastDayNumber === 7) {
					forecastDayNumber = 0;
				}
				
				let theDayName = document.createElement("span");
				theDayName.textContent = weekday[forecastDayNumber];

				let theTemp = document.createElement("p");
				theTemp.textContent = Math.round(weatherInfo.list[i].main.temp) + "\xB0 F";

				let iconcode = weatherInfo.list[i].weather[0].icon;
				let iconPath = "https://openweathermap.org/img/w/" + iconcode + ".png";
				let theIcon = document.createElement("img");
				
				theIcon.src = iconPath;

				let theDay = document.createElement("div");
				theDay.appendChild(theDayName);
				theDay.appendChild(theTemp);
				theDay.appendChild(theIcon);

				document.getElementById('weatherforecast').appendChild(theDay);
			
			} // end if
		} //end for

	}); //end of "then" fat arrow function