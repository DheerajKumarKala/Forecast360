const express=require('express');
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
const ht=require('http');

app.post("/",function(req,res){
    var city=req.body.location;
    const query=city;
    const url="http://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid=fae97b071ce9595d7846c9c5e7e3171a";
    ht.get(url,function(response){
    console.log(response.statusCode);
    response.on("data",function(data){
        const weatherData=JSON.parse(data);
        var temp=weatherData.main.temp;
        var weatherDescription=weatherData.weather[0].description;
        res.write("<h1>The Temperature currently in "+ city +" is "+ temp+" degree Celsius</h1>");
        res.write("<h3>The Weather is currently "+ weatherDescription +"</h3>");
        res.send();
    })
})
})
// var city=req.body.location;
//     console.log(city);
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})


    
/

app.listen(3000,function(){
    console.log("Server is running on Port 3000");
})