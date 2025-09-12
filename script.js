const API_KEY = "e23eaa977af66303c34d4b02a0b35411";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".intputCity");
const searchBtn = document.querySelector(".searchBtn");
const weartherIcon = document.querySelector(".weather-icon");
const cardBg = document.querySelector(".card");

async function checkWeather(city) {
    const res = await fetch(url + city + `&appid=${API_KEY}`);
    const data = await res.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°C";
    document.querySelector(".condition").innerHTML = data.weather[0].main;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"; 
    
   if(data.weather[0].main == "Clouds"){
        weartherIcon.src = "imgs/cloud.png";
        cardBg.style.backgroundImage = "url('imgs/cloud.jpg')"; 
        body.style.backgroundImage = "url('imgs/cloud.jpg')"
    }
    else if(data.weather[0].main == "Rain"){
        weartherIcon.src = "imgs/rain.png";
        cardBg.style.backgroundImage = "url('imgs/rain.jpg')"; 
        body.style.backgroundImage = "url('imgs/rain.jpg')"
    }
    else if(data.weather[0].main =="Clear"){
        weartherIcon.src = "imgs/sun.png";
        cardBg.style.backgroundImage = "url('imgs/sunny.jpg')";
        body.style.backgroundImage = "url('imgs/sunny.jpg')"
    }
    else if(data.weather[0].main =="Drizzle"){
        weartherIcon.src = "imgs/drizzle.png";
        cardBg.style.backgroundImage = "url('imgs/drizzling.jpg')"; 
        body.style.backgroundImage = "url('imgs/drizzle.jpg')"
    }
    else if(data.weather[0].main =="Snow"){
        weartherIcon.src = "imgs/snow.png";
        cardBg.style.backgroundImage = "url('imgs/snowing.jpg')"; 
        body.style.backgroundImage = "url('imgs/snowing.jpg')"
    }

    document.querySelector(".weather").style.display = "block"; 
    
}

checkWeather();

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

