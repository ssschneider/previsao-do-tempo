const key = "1cbd024db12a7d81b93e38ee7891e6b7";
const btn = document.getElementById("btn-search")

const loadData = (data) => {
    document.querySelector("h2").innerHTML = `Temperatura em ${data.name}`
    document.querySelector(".temperature").innerHTML = `${Math.floor(data.main.temp)}ºC`
    document.querySelector(".description img").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    document.querySelector(".description p").innerHTML = `${data.weather[0].description}`
    document.querySelector(".humidity").innerHTML = `Umidade: ${data.main.humidity}%`
}

const searchCity = async(city) => {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`)
    const response = await data.json()
    loadData(response);
}

const handleClick = () => {
    let city = document.getElementById("input-cidade").value
    searchCity(city)
}

btn.addEventListener("click", () => handleClick())

searchCity("rio de janeiro")