//b4ca6b8e69cdc3d2ffbb06540b1c55e9
const Api_key = "b4ca6b8e69cdc3d2ffbb06540b1c55e9";
const feels = document.querySelector(".feels");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const pressure = document.querySelector(".pressure");
const input = document.querySelector("#input");
const cityy  = document.querySelector('.city');
const weather_icon = document.querySelector(".weather-condition");
const temp = document.querySelector(".temp");
const search_btn = document.querySelector("#search");
const dateTime = document.querySelector(".date-time");


async function weather(city) {
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_key}&units=metric`;
    
    
    const res =  await fetch(url);
    const data = await res.json();
    // console.log(data);
    cityy.innerHTML = city;
    wind.innerHTML = `Wind: ${data.wind.speed} Km/h`;
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
    pressure.innerHTML = `Pressure: ${data.main.pressure}`;
    temp.innerHTML =  `${Math.round(data.main.temp)}` + "°C";
    feels.innerHTML = `${Math.round(data.main.feels_like)}` + "°C";

    if(data.weather[0].main == 'Clouds')weather_icon.src = 'img/haze.png';
         else if(data.weather[0].main == "Rain"){
            weather_icon.src = 'img/drizzle.png';
         }
         else if(data.weather[0].main == "Drizzle"){
            weather_icon.src = 'img/weather-app.png';
         }
         else if(data.weather[0].main == "Mist"){
            weather_icon.src = 'img/haze.png';
         }
         else if(data.weather[0].main == "Clear"){
            weather_icon.src = 'img/sun.png';
        }





    

}


search_btn.addEventListener('click',()=>{
    
    weather(input.value);
})


