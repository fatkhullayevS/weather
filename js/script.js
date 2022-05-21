const api={
    key: '48b153121aff5783ad362dc67ad486b2',
    baseUrl: 'https://api.openweathermap.org/data/2.5/',
};

const searchBox = document.querySelector('.search-box');

searchBox.addEventListener('keypress', setQuery);

function setQuery(e){
    if(e.keyCode == 13){
        getResults(searchBox.value);
        // console.log(searchBox.value);
    }
}

function getResults (query) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${api.key}&units=metric`)
    .then((weather) => {
        return weather.json();
    })
    .then(displayResults);

}


function displayResults(e){
    let city = document.querySelector('.location .city');
    city.innerHTML = `${e.name} ${e.sys.country}`;

    let now = new Date();
    let dateW = now.getDate()
    let monthW = now.getMonth()
    let yearW = now.getFullYear()
    let dayW = now.getDay()

    let date = document.querySelector('.date');
    let month =document.querySelector('.month');
    let year =document.querySelector('.fullYear');
    let day = document.querySelector('.day')
    let weather = document.querySelector('.weather')
    let desc = document.querySelector('.weather_desc')
    let temMax = document.querySelector('.temp_max')
    let temMin = document.querySelector('.temp_min')
    let temp = document.querySelector('.temp')

    temp.innerHTML = `${Math.ceil(e.main.feels_like)}°C`
    temMax.innerHTML = `${Math.ceil(e.main.temp_max)}°C/`
    temMin.innerHTML = `${Math.ceil(e.main.temp_min)}°C`

    let we = e.weather.map(e => {
        weather.innerHTML = e.main
    })

    let descri = e.weather.map(e => {
        desc.innerHTML = e.description

    })

    date.innerHTML = dateW
    month.innerHTML = monthW + 1
    year.innerHTML = yearW
    if (dayW == 1) {
        day.innerHTML = 'Monday'
    }else if(dayW == 2){
        day.innerHTML = 'Tuesday'
    }else if(dayW == 3){
        day.innerHTML = 'Wednesday'
    }else if(dayW == 4){
        day.innerHTML = 'Thursday'
    }else if(dayW == 5){
        day.innerHTML = 'Friday'
    }else if(dayW == 6){
        day.innerHTML = 'Saturday'
    }else if(dayW == 7){
        day.innerHTML = 'Sunday'
    }


}
