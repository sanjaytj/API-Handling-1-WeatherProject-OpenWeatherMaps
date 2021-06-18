# WeatherProject-OpenWeatherMaps
We are making use of Open weather maps and getting responses using GET with Express JS and nodeJs




/--------------------------------------------------------------------------------------------------------------------------------------------------------/
For a clear Formatted View Please View: https://github.com/sanjaytj/API-Handling-1-WeatherProject-OpenWeatherMaps/blob/main/readme-Formatted-Order.txt
/--------------------------------------------------------------------------------------------------------------------------------------------------------/






/-----------------------------------------/


Here When we execute response.on("data", function(data){
    const weatherData = JSON.parse(data);
    console.log(weatherData);
});
We get : Entire JS Object
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
server started at port 3000
200
{
  coord: { lon: -0.1257, lat: 51.5085 },
  weather: [
    {
      id: 804,
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04d'
    }
  ],
  base: 'stations',
  main: {
    temp: 14.63,
    feels_like: 14.63,
    temp_min: 12.85,
    temp_max: 16.32,
    pressure: 1013,
    humidity: 95
  },
  visibility: 10000,
  wind: { speed: 1.79, deg: 63, gust: 3.58 },
  clouds: { all: 90 },
  dt: 1624004690,
  sys: {
    type: 2,
    id: 268730,
    country: 'GB',
    sunrise: 1623987763,
    sunset: 1624047637
  },
  timezone: 3600,
  id: 2643743,
  name: 'London',
  cod: 200
}
/--------------------------------/

JSON.stringify(ObjectvarName); 
Converts the Json data to Compact string format

/--------------------------------/

const temp = weatherData.main.temp;
console.log("The temperature is "+ temp + " Deg Cel");

Gets us :
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
server started at port 3000
200
The temperature is 14.57 Deg Cel

/----------------lesson: 244-----------------/

After Executing the final program bit 

[nodemon] 2.0.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node app.js`
server started at port 3000
200
The temperature is 18.19 Deg Cel
The weather in Paris like clear sky.
The weather icon is  01n.
 
