let city = document.querySelector('.City');
let description = document.querySelector('.description');
let humidity = document.querySelector('.humidity');
let wind = document.querySelector('.wind');

let Weather = {
    ApiKey: 'a39a8b26d2738bcabb43c4f03d70f626',
    fetchWather: function (City) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${this.ApiKey}`)
            .then((res) => res.json())
            .then((data) => this.Data(data))
    },

    Data: function (data) {
        let { name } = data;
        city.innerHTML = `Weather of ${name}`
        description.innerHTML = `${data.weather[0].description}`
        humidity.innerHTML = `Humidity ${data.main.humidity}%`
        wind.innerHTML = `Wind Speed ${data.wind.speed} km/h`

    },
    Search: function () {
        this.fetchWather(document.querySelector('.search').value)
    }
}
document.querySelector(".SearchBar button").addEventListener("click", function () {
    Weather.Search();
})

document.querySelector(".SearchBar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        Weather.Search();
    }
})

const date = new Date();

const format = {
    weekend: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
    
}

document.querySelector(".Date").innerHTML = `${date.toLocaleString('en-GB', format)}`;