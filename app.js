const apikey = '8431e79d0d3c3037b66cfc2bb18cb615';
const apiurl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWheather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);



        if(response.status == 404){
            document.querySelector('.weather').style.display = 'none';
            document.querySelector('.errors').style.display = 'block';
        }else{

        }
        let data = await response.json();

        console.log(data);
    
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';
    
        if(data.weather[0].main == 'Clouds'){
            weatherIcon.src = 'img/clouds.png';
        }else if(data.weather[0].main == 'Clear'){
            weatherIcon.src = 'img/clear.png';
        }else if(data.weather[0].main == 'Rain'){
            weatherIcon.src = 'img/rain.png';
        }else if(data.weather[0].main == 'Drizzle'){
            weatherIcon.src = 'img/Drizzle.png';
        }else if(data.weather[0].main == 'Mist'){
            weatherIcon.src = 'img/mist.png';
        }
    
        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.errors').style.display = 'none';




}



searchBtn.addEventListener('click', () =>{
    checkWheather(searchBox.value);
    if(searchBox.value.length == 0){
        searchBox.classList.add('error');
        setTimeout(()=>{
            searchBox.classList.remove('error');
        },1000);
    }else{
    }



})


