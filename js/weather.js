const API_KEY = `42509656c8d89c35db376c0ada8d903c`;

function onGeoOk(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  fetch(url).then(Response => Response.json()).then(data => {
    const weather = document.querySelector(`#weather span:first-child`);
    const city = document.querySelector(`#weather span:last-child`);
    const mainTemp = Math.round(data.main.temp);
    weather.innerText = `${data.weather[0].main} / ${mainTemp}℃`;
    city.innerText = data.name;
  });

}

function onGeoError() {
  alert(`Can't find you. No weather for you.`)
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);