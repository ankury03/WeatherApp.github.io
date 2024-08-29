const City = document.querySelector(".city");
const Temp = document.querySelector(".temp");
const Humidity = document.querySelector(".humidity");
const Wind = document.querySelector(".wind");
const SearchBox = document.querySelector(".search input");
const SearchBtn = document.querySelector(".search button");
const Icon = document.querySelector(".weather-icon");
const Weather = document.querySelector(".weather");
const Error = document.querySelector(".error");


const ApiKey = "6150995ad4233ab72d3862cfc776e1b2";
const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
    const response = await fetch(ApiUrl + city + `&appid=${ApiKey}`);
    if(response.status == 404){
        Weather.style.display = "none";
        Error.style.display = "block";
    }else{
    var data = await response.json();
    console.log(data);
    City.innerHTML = data.name;
    Temp.innerHTML = Math.round(data.main.temp) + "°C";
    Humidity.innerHTML = data.main.humidity + "%";
    Wind.innerHTML = data.wind.speed + " Km/h";


    if(data.weather[0].main == "Clouds"){
       Icon.src = "images/Clouds.png"
    }else if(data.weather[0].main == "Clear"){
        Icon.src = "images/Clear.png"
     }else if(data.weather[0].main == "Drizzle"){
        Icon.src = "images/Drizzle.png"
     }else if(data.weather[0].main == "Mist"){
        Icon.src = "images/Mist.png"
     }else if(data.weather[0].main == "Rain"){
        Icon.src = "images/Rain.png"
     }

    Weather.style.display = "block";
    Error.style.display = "none";
    } 
}

function Search(){
    checkWeather(SearchBox.value);
    SearchBox.value = "";
}

SearchBox.addEventListener('keyup' , e => {
    if(e.keyCode === 13){
       Search();
    }
})






