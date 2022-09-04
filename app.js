// bo not show API key on your js file
const API_KEY = `a6881d8547ef3fa35bc3b1e5f012d9d8`;

const loadweadther = (city) => {
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
     fetch(url)
       .then((res) => res.json())
       .then((data) => displayWeather(data));
}

const ElementByTemperid = (id, textValue) => {
  const temperid = document.getElementById(id);
  temperid.innerText = textValue;
};

const displayWeather = (data) => {
//   console.log(data.weather[0].main);
     ElementByTemperid("temperature", data.main.temp)
        ElementByTemperid("clouds",data.weather[0].main);
}

document.getElementById("btn-search").addEventListener('click',function () {
     const searchFild = document.getElementById("search-fild");
     const city = searchFild.value;
     document.getElementById('city').innerText = city;
     // document.getElementById("clouds").innerText=
     loadweadther(city);
     searchFild.value=''
     
})
loadweadther('Dhaka')