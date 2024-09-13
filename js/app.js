const apikey = "0ff92f3695eb1710b3f8bea641a31ab8";
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        changeView();
    }
});

function formatDateInTimeZone(date, timeZoneOffsetSeconds) {
    const localDate = new Date(date.getTime() + timeZoneOffsetSeconds * 1000);
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true // Use 24-hour format
    };
    let time = localDate;
    time.setHours(time.getHours() - 2, time.getMinutes(), time.getSeconds(), time.getMilliseconds());
    return time.toLocaleTimeString([], options);
}
function calculateCountryLocalTime(date, timeZoneOffsetSeconds) {
    const localDate = new Date(date.getTime() + timeZoneOffsetSeconds * 1000);
    let time = localDate;
    time.setHours(time.getHours() - 2, time.getMinutes(), time.getSeconds(), time.getMilliseconds());
    return time;
}
function calculateCountry_LocalTime(date, timeZoneOffsetSeconds) {
    const localDate = new Date(date + timeZoneOffsetSeconds * 1000);
    let time = localDate;
    time.setHours(time.getHours() - 2, time.getMinutes(), time.getSeconds(), time.getMilliseconds());
    return time;
}
function sunnyWeather(weather_icon){
    document.body.style.backgroundImage=`url(img/sunny3.jpg)`;
    let changeBackgroundColor = document.querySelectorAll(".same_color");
    for(let x = 0; x < changeBackgroundColor.length; x++){
        changeBackgroundColor[x].style.backgroundColor="rgb(23,141,232)";
    }
    let subTitles = document.getElementsByClassName("subtitles")[0];
    subTitles.style.color="rgb(23,141,232,0.7)";
    subTitles.style.borderBottom="2px solid rgb(23,141,232,0.7)";
    let selectedTitle = document.getElementsByClassName("selectedSubTitle")[0];
    selectedTitle.style.color="rgb(23,141,232)";
    selectedTitle.style.borderBottom="3px solid rgb(23,141,232)";
    // let changeBorderColor = document.querySelectorAll(".change_border");
    // for(let x = 0; x < changeBorderColor.length; x++){
    //     changeBorderColor[x].style.border="2px solid rgb(23,141,232)";
    // }
    // let changeDailyBorderColor = document.querySelectorAll(".daily_weather");
    // for(let x = 0; x < changeDailyBorderColor.length; x++){
    //     changeDailyBorderColor[x].style.border="2px solid rgb(23,141,232)";
    // }
}
function cloudyWeather(weather_icon){
    document.body.style.backgroundImage=`url(img/cloudy.jpg)`;
    let changeBackgroundColor = document.querySelectorAll(".same_color");
    for(let x = 0; x < changeBackgroundColor.length; x++){
        changeBackgroundColor[x].style.backgroundColor="rgb(117, 119, 122)";
    }
    let subTitles = document.getElementsByClassName("subtitles")[0];
    subTitles.style.color="rgb(117, 119, 122,0.7)";
    subTitles.style.borderBottom="2px solid rgb(117, 119, 122,0.7)";
    let selectedTitle = document.getElementsByClassName("selectedSubTitle")[0];
    selectedTitle.style.color="rgb(117, 119, 122)";
    selectedTitle.style.borderBottom="3px solid rgb(117, 119, 122)";
    // let changeBorderColor = document.querySelectorAll(".change_border");
    // for(let x = 0; x < changeBorderColor.length; x++){
    //     changeBorderColor[x].style.border="2px solid rgb(117, 119, 122)";
    // }
    // let changeDailyBorderColor = document.querySelectorAll(".daily_weather");
    // for(let x = 0; x < changeDailyBorderColor.length; x++){
    //     changeDailyBorderColor[x].style.border="2px solid rgb(117, 119, 122)";
    // }
}
function  nightWeather(weather_icon){
    document.body.style.backgroundImage="linear-gradient(to bottom, #0c0c41, #13136c, #2d2d9d)";
    let changeBackgroundColor = document.querySelectorAll(".same_color");
    for(let x = 0; x < changeBackgroundColor.length; x++){
        changeBackgroundColor[x].style.backgroundColor="rgb(45, 45, 157)";
    }
    let subTitles = document.getElementsByClassName("subtitles")[0];
    subTitles.style.color="rgb(45, 45, 157)";
    subTitles.style.borderBottom="2px solid rgb(45, 45, 157)";
    let selectedTitle = document.getElementsByClassName("selectedSubTitle")[0];
    selectedTitle.style.color="rgba(12,12,65,0.7)";
    selectedTitle.style.borderBottom="3px solid rgba(12,12,65,0.7)";
    // let changeBorderColor = document.querySelectorAll(".change_border");
    // for(let x = 0; x < changeBorderColor.length; x++){
    //     changeBorderColor[x].style.border="2px solid #2d2d9d";
    // }
    // let changeDailyBorderColor = document.querySelectorAll(".daily_weather");
    // for(let x = 0; x < changeDailyBorderColor.length; x++){
    //     changeDailyBorderColor[x].style.border="2px solid #2d2d9d";
    // }
}
function overDayFunction(data2,timeOfzone,sunrise,sunset){

    for(let x = 1; x < 9; x++){
        let clock =new Date(data2.list[x].dt_txt);
        let countryHour = calculateCountry_LocalTime(clock.getTime(),timeOfzone);
        let hour = countryHour.getHours();
        let dayORnight="";
        console.log(hour);
        if(hour < 12){
            if(hour < sunrise[0]+sunrise[1]){
                dayORnight = "night";
            }
            else{
                dayORnight="day";
            }
            document.getElementsByClassName("hour")[x-1].innerHTML=hour+":00 AM";
        }
        else if(hour == 12){
            dayORnight="day";
            document.getElementsByClassName("hour")[x-1].innerHTML=hour+":00 PM";
        }
        else{
            hour = hour - 12;
            if(hour > sunset[0]+sunset[1]){
                dayORnight = "night";
            }
            else{
                dayORnight="day";
            }
            document.getElementsByClassName("hour")[x-1].innerHTML=hour+":00 PM";
        }
        let hourStatus = data2.list[x].weather[0].main;
        let dayicon = document.getElementsByClassName("hourIcon")[x-1];
        if( hourStatus == "Clear"){
            if(dayORnight == "day"){
                dayicon.setAttribute("class","bi bi-sun-fill hourIcon");
                dayicon.style.color="#ff9100";
            }
            else{
                dayicon.setAttribute("class","fa-solid fa-moon hourIcon");
                dayicon.style.color="#fff";
            }
        }else if(hourStatus == "Clouds"){
            if(dayORnight == "day"){
                dayicon.setAttribute("class","fa-solid fa-cloud hourIcon");
                dayicon.style.color="#fff";
            }
            else{
                dayicon.setAttribute("class","fa-solid fa-cloud-moon hourIcon");
                dayicon.style.color="#fff";
            }
        }else if(hourStatus == "Sunny"){
            dayicon.setAttribute("class","bi bi-sun-fill hourIcon");
            dayicon.style.color="#ff9100";
        }
        else if(hourStatus == "Rain"){
            dayicon.setAttribute("class","fa-solid fa-cloud-rain");
            dayicon.style.color="#fff";
        }
        document.getElementsByClassName("degreePerHour")[x-1].innerHTML=Math.round(data2.list[x].main.temp-273.15)+"°C";
    }
}

function overWeekFunction(data2,dayvalue){
    const daysArray = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    for (let i = 0; i < 7; i++){
        if (daysArray[i] === dayvalue){
            let today = i;
            for (let j = 0; j < 5; j++){
                if (today === 6){
                    today = -1;
                }
                document.getElementsByClassName("name")[j].innerHTML=daysArray[today + 1];
                today++;
            }
            break;
        }
    }
    let day = new Date(data2.list[0].dt_txt);
    let daynum = day.getDay();
    console.log(daynum);
    let maxTemp = 0;
    let miniTemp = 400;
    let x = 0;
    for(let y = 1; y< 40;y++){
        let nextDay = new Date(data2.list[y].dt_txt);
        let nextDateNum = nextDay.getDay();
        if(daynum == 6){
            daynum = -1;
        }
        if(nextDateNum == daynum + 1){
            if(data2.list[y].main.temp_max > maxTemp){
                maxTemp = data2.list[y].main.temp_max;
            }
            if(data2.list[y].main.temp_min < miniTemp){
                miniTemp = data2.list[y].main.temp_min;
            }
            if( y == 39){
                let lastLow = document.getElementsByClassName("lowest_weather")[x];
                let lastHigh = document.getElementsByClassName("highest_weather")[x];
                lastLow.innerHTML=Math.round(miniTemp-273.15)+"°C";
                lastHigh.innerHTML=Math.round(maxTemp-273.15)+"°C";
            }

        }else if(nextDateNum > daynum + 1 ){
            let low = document.getElementsByClassName("lowest_weather")[x];
            let high = document.getElementsByClassName("highest_weather")[x];
            low.innerHTML=Math.round(miniTemp-273.15)+"°C";
            high.innerHTML=Math.round(maxTemp-273.15)+"°C";
            daynum++;
            x++;
            if(y == 39){
                low.innerHTML=Math.round(miniTemp-273.15)+"°C";
                high.innerHTML=Math.round(maxTemp-273.15)+"°C";
            }
            maxTemp = 0;
            miniTemp = 400;
        }
    }
    x = 0;
    for(let y = 1; y< 40;y++){
        let nextDay = new Date(data2.list[y].dt_txt);
        let nextDateNum = nextDay.getDay();
        if(daynum == 6){
            daynum = -1;
        }
        if(nextDateNum == daynum + 1) {
            let dayStatus = data2.list[y].weather[0].main;
            let iconD = document.getElementsByClassName("dailyIcon")[x];
            if (dayStatus == "Clouds") {
                iconD.setAttribute("class", "fa-solid fa-cloud dailyIcon");
                iconD.removeAttribute("style");
            } else if (dayStatus == "Rain") {
                iconD.setAttribute("class", "fa-solid fa-cloud-rain dailyIcon");
                iconD.removeAttribute("style");
            }else{
                iconD.setAttribute("class", "bi bi-sun-fill dailyIcon");
                iconD.style.color="#ff9100";
            }
        }
        else{
            daynum++;
            x++;
        }

    }
}

function selectDaily(){
    let hours = document.getElementById("hours");
    hours.removeAttribute("class");
    hours.removeAttribute("style");
    let days = document.getElementById("days");
    days.setAttribute("class","selectedSubTitle");
    let remove = document.getElementsByClassName("notSelectedData")[0];
    remove.removeAttribute("style");
    let hide = document.getElementsByClassName("overDay")[0];
    hide.style.display= "none";
    changeView();
}
function selectHourly(){
    let days = document.getElementById("days");
    days.removeAttribute("class");
    days.removeAttribute("style");
    let hours = document.getElementById("hours");
    hours.setAttribute("class","selectedSubTitle");
    document.getElementsByClassName("overWeek")[0].style.display="none";
    document.getElementsByClassName("overDay")[0].removeAttribute("style");
    changeView();
}
async function changeView() {
    let location = document.getElementById("location_input").value;
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + `${location}` + "&appid=" + `${apikey}` + "&units=metric";
    let response = await fetch(url);
    let data = await response.json();
    console.log(response);
    console.log(data);
    if (response.ok) {
        document.getElementsByClassName("all")[0].style.display="block";
        let box = document.getElementsByClassName("search_box")[0];
        box.style.top="7px";
        box.style.right="10px";
        document.getElementById("city").innerHTML = data.name;
        document.getElementById("country").innerHTML = data.sys.country;
        document.getElementsByClassName("weather_degree")[0].innerHTML = Math.round(data.main.temp) + "°C";
        document.getElementById("humidity").innerHTML = Math.round(data.main.humidity * Math.pow(10, 1)) / Math.pow(10, 1) + " %";
        document.getElementById("speed").innerHTML = Math.round(data.wind.speed * Math.pow(10, 1)) / Math.pow(10, 1) + " m/s";
        let sunriseDate = new Date(data.sys.sunrise * 1000);
        let sunsetDate = new Date(data.sys.sunset * 1000);
        const timeZoneOffsetSeconds = data.timezone;
        let sunrise = formatDateInTimeZone(sunriseDate, timeZoneOffsetSeconds);
        let sunset = formatDateInTimeZone(sunsetDate, timeZoneOffsetSeconds);
        document.getElementById("sunrise").innerHTML = sunrise;
        document.getElementById("sunset").innerHTML = sunset;

        let day = new Date(data.dt * 1000);
        let dayName = document.getElementsByClassName("day")[0]
        let dayvalue = day.toLocaleDateString(undefined, {weekday: 'long'});
        dayName.innerHTML = dayvalue;
        let localtime = new Date();
        let countryTime = (calculateCountryLocalTime(localtime, timeZoneOffsetSeconds));
        // console.log(countryTime);
        let status = data.weather[0].main;
        let weather_icon = document.getElementById("weather_icon");
        let day_night = "";
        let theAddedIcon = document.getElementById("weather_iconn");
        document.getElementById("status").innerHTML = data.weather[0].description;
        if (countryTime.getHours() > 12) {
            console.log(sunset[0] + sunset[1]);
            if (countryTime.getHours() - 12 > sunset[0] + sunset[1]) {
                day_night = "night";
            } else {
                day_night = "day";
            }
        } else {
            if (countryTime.getHours() < sunrise[0] + sunrise[1]) {
                day_night = "night";
            } else {
                day_night = "day";
            }
        }
        switch (status) {
            case "Clear":
                weather_icon.removeAttribute("class");
                weather_icon.removeAttribute("style");
                theAddedIcon.style.display = "none";
                if (day_night == "night") {
                    weather_icon.setAttribute("class", "fa-solid fa-moon");
                    nightWeather(weather_icon);
                } else {
                    weather_icon.setAttribute("class", "bi bi-sun-fill");
                    document.getElementById("weather_icon").style.color = "#ff9100";
                    sunnyWeather(weather_icon);
                }
                break;

            case "Clouds":
                weather_icon.removeAttribute("class");
                weather_icon.removeAttribute("style");
                theAddedIcon.style.display = "none";
                if (day_night == "night") {
                    weather_icon.setAttribute("class", "fa-solid fa-cloud-moon");
                    nightWeather(weather_icon);
                } else {
                    weather_icon.setAttribute("class", "fa-solid fa-cloud");
                    cloudyWeather(weather_icon);
                }
                break;
            case "Sunny":
                weather_icon.removeAttribute("class");
                weather_icon.removeAttribute("style");
                theAddedIcon.style.display = "none";
                weather_icon.setAttribute("class", "bi bi-sun-fill");
                document.getElementById("weather_icon").style.color = "#ff9100";
                sunnyWeather(weather_icon);
                break;
            case "Partly Cloudy":
                weather_icon.removeAttribute("class");
                weather_icon.removeAttribute("style");
                theAddedIcon.style.display = "none";
                if (day_night == "night") {
                    weather_icon.setAttribute("class", "fa-solid fa-cloud-moon");
                    nightWeather(weather_icon);
                } else {
                    weather_icon.setAttribute("class", "fa-solid fa-cloud");
                    cloudyWeather(weather_icon);
                }
                break;
            default:
                sunnyWeather(weather_icon);
                break;
        }


        let lat = data.coord.lat;
        let lon = data.coord.lon;
        const oneCallApiurl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}`;
        let response2 = await fetch(oneCallApiurl);
        let data2 = await response2.json();
        console.log(response2);
        console.log(data2);
        if (response2.ok) {
            overDayFunction(data2, timeZoneOffsetSeconds, sunrise, sunset);
            overWeekFunction(data2, dayvalue);
        }

    } else {
        alert("Invalid City Name");
    }
}
