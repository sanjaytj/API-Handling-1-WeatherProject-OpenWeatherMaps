const { response } = require("express");
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

 const app = express();

 app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  // console.log(req.body.city); // req.body.<input name="city">

  const query = req.body.city;
  const apiId = "d17aad235635a02dad796d028a9347c4";
  const units = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid="+ apiId +"&units="+ units;
  
  https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data", function(data){
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      console.log("The temperature is "+ temp + " Deg Cel");

      const weatherDescription = weatherData.weather[0].description;
      console.log("The weather in "+weatherData.name+" like "+ weatherDescription +".");
      console.log("The weather icon is  "+ weatherData.weather[0].icon +".");

      const icon = weatherData.weather[0].icon;
      const imgUrl = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
      res.write(" <h1>The temperature is "+ temp + " Deg Cel </h1> ");
      res.write(" <h1> The weather in "+ query +" like "+ weatherDescription + ".</h1>");
      res.write("<img src="+imgUrl+">"); 
      res.send()
    })

  });  
})


app.listen(3000, function(req, res){
    console.log("server started at port 3000");
})




//-------lesson: 246---------lesson: 244---------Lesson: 245------------/
/* 
https://nodejs.org/api/https.html#https_https_get_url_options_callback 
Has been used for https callbacks

We can use res.on('data', (d) => {
  ... To get some data from the api listed out | corespond to the actual msg body that Openweathermap has sent us
});

=> We can only have one res.send() in the program, else it crashes 
=> However we can have multiple res.write() methods to Write Mulitple 

https://openweathermap.org/weather-conditions
From here we can get the Weather Icons

const icon = weatherData.weather[0].icon;
const imgUrl = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
=> This icon corresponds to the weather icon in the above web link

    res.write("<img src="+imgUrl+">"); 
=> This will display clouds coreesonding to the icon to that temperature

=> For the post request we have to install body-parser as npm install body-parser
=> package which allows us to look through body of the post request and fetch data data based on the name of the input which is called "cityName" from index.html 


=> Final Output :- (in the http://localhost:3000)
The temperature is 18.19 Deg Cel
The weather in Paris like clear sky.

*/