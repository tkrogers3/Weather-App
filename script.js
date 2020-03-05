//setting variables and their ID handlers


var api= "http://api.openweathermap.org/data/2.5/weather?zip=";
var apiKey = ",&appid=85fbdf671b1a59edaae1f9e998fdcbad";
var btn = document.getElementById("btnSearch");
var cityName= document.getElementById("cityName");
var k= document.getElementById("kelvin");
var f= document.getElementById("fahrenheit");
var c = document.getElementById("celsius");
var wthCon= document.getElementById("con");
var iconImg=document.getElementById("icon");
var zipCode= document.getElementById("zipInfo"); 
var alert=document.getElementById("alert");
var cards=document.getElementById("card-deck");

document.getElementById('btnSearch').addEventListener('click', getWeather);


// Get the button, and when the user clicks on it, execute myFunction


/*Function to take zip code info and pull info from 
JSON data received from API Call. If valid, get weather info.
 If invalid, get error message. (I haven't defined catch error yet.) */

 var z =zipCode.length;

 if(z== 5 &&(!isNaN(z))); /* Cant figure out how to remove - , + and e
  //from the allowed characters as a part of this statement. */

  function getWeather () {
      cardDeck.className="d-block";
      console.log(zipCode.value);
    fetch(api + zipCode.value + apiKey)
    .then((response) => {
        if(!response.ok){
            throw response
        }
        return response.json();

    })
    /*once promise has been met, then data is processed and presented to screen.
    k and f strings temperate literal to embed expression. Math.floor to round 
    down to closest integer.*/
    
    .then((data) => {

        var info =data;
        cityName.innerHTML=data.name;
        k.innerHTML=`${Math.floor(info.main.temp)}<sup>o</sup>K `;
        f.innerHTML=`${Math.floor(((info.main.temp -273.15) * 9/5 + 32)) }<sup>o</sup>F`;
        c.innerHTML=`${Math.floor(info.main.temp -273.15)}<sup>o</sup>C`;
        wthCon.innerHTML= info.weather[0].main ;
        //Template Literal that concatenates the link with the icon to display image  into png.

        iconImg.innerHTML = `<img src ="http://openweathermap.org/img/wn/${info.weather[0].icon}.png">`
        alert.className="d-none alert-primary ";
        info.weather[0].icon;
        console.log(con.innerHTML);
        console.log(info);

        
    })
    /* Haven't figured catch out yet */
    .catch((error) => {
     
        alert.className="d-block alert-warning ";
     console.log(error);
    })
    
}





