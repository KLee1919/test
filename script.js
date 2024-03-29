
let weather = {
apiKey: "f3611363280120d5e5e8245eca37100e",
fetchWeather: function  (city)  {
    fetch (
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&lang=ru&appid=" +
        this.apiKey
    )
    .then((response) => {
        if  (!response.ok) {
        alert ("No weather found.");
        throw new Error ("No weather found.");
        }
        return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    
    displayWeather: function  (data)  {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const {temp_min} = data.main;
    const {temp_max} = data.main;
    const { feels_like, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText =name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".min").innerHTML = "Мин. : " + Math.round(temp_min) + "°C";
    document.querySelector(".max").innerHTML = "Макс. : " + Math.round(temp_max) + "°C";
    document.querySelector(".temp").innerText = Math.round(feels_like) + "°C";
    document.querySelector(".humidity").innerText ="Влажность воздуха : " + humidity + "%";
    document.querySelector(".wind").innerText ="Скорость ветра : " + speed + " км/ч";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
},

search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
},
};

document.querySelector(".search button").addEventListener("click", function () {
weather.search();
});

document
.querySelector(".search-bar")
.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
    weather.search();
    }
});
