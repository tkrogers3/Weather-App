//setting variables and their ID handlers

var api= 'http://api.openweathermap.org/data/2.5/weather?zip=';
var apiKey = ',&appid=85fbdf671b1a59edaae1f9e998fdcbad';
var btn = document.getElementById("btnSearch");
var cityName= document.getElementById("cityName");
var k= document.getElementById("kelvin");
var f= document.getElementById("fahrenheit");
var c = document.getElementById("celsius");
var condition= document.getElementById("weatherCon");
var zipCode=document.getElementById("zipInfo");




/*Function to take zip code info and pull info from 
JSON data received from API Call. If valid, get weather info.
 If invalid, get error message. (I haven't defined catch error yet.) */

async function getWeather () {
    var zipCode= document.getElementById("zipInfo").value 
    

  if(zipCode.length == 5); /* Cant figure out how to remove - , + and e
  from the allowed characters as a part of this statement. */


    await fetch (api + zipCode + apiKey)
    .then((response) => {
        if(!response.ok){
            throw response
        }
        return response.json();

    })
    /*once promise has been met, then data is processed and presented to screen.
    k and f strings temperate literal to embed expression.*/
    
    .then((data) => {

        cityName.innerHTML=data.name;
        k.innerHTML=`${Math.floor(data.main.temp)} `;
        f.innerHTML=`${Math.floor(((data.main.temp -273.15) * 9/5 + 32)) }`;
        c.innerHTML=`${Math.floor(data.main.temp -273.15)}`;
        sznCon.HTML= data.weather[0].main;
        console.log(data);

        
    })
    /* Haven't figured catch out yet */
    .catch((error) => {
     //console.log(error);
    })
    
}

getWeather();




document.getElementById('btnSearch').addEventListener('click', getWeather);
