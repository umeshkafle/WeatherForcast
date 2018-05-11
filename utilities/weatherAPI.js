const rootURL = 'http://api.openweathermap.org/data/2.5/weather?appid=a3cc89369d235bd899c01440ee598429';

export const fetchWeather = (lon, lat) => {
    const url = rootURL + '&lat='+lat+'&lon='+lon 

    return fetch(url)
    .then(res => res.json())
    .then(json =>({
        temp: json.maim.temp,
        weather: json.weather[0].main
    }))
}