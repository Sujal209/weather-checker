const apiKey="2882f41d70cbc6701e062cbc087c470e";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const btn= document.querySelector(".search-btn");
const search= document.querySelector(".search input");


async function checkWeather(city){   
    const response = await fetch(apiUrl+ city +`&appid=${apiKey}`);
    var data = await response.json();
    // console.log(data);
    if(response.status==404){
        alert("Enter Valid City Name");
    }else{
        document.querySelector(".cityName").innerHTML=data.name;
        document.querySelector("#humid-percent").innerHTML=data.main.humidity+"%";
        document.querySelector(".temprature").innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector("#wind-percent").innerHTML=data.wind.speed+"km/h";
        document.querySelector(".main").style.display="block";
    }

    

}
btn.addEventListener("click",() => {
    checkWeather(search.value);
});

