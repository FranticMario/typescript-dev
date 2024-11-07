import WeatherType from "./enums/weather-type";

const weather = new Promise<WeatherType>((resolve, reject) => {
    const randomNum:number = Math.floor(Math.random() * 9)
    if(randomNum <= 6) {
        resolve(WeatherType[randomNum])
    } else {
        reject("Weather forecast could not be determined")
    }
})


weather.then((response: WeatherType):void => {
    console.log(response)
})
    .catch((err) => {
        console.error(err)
    })