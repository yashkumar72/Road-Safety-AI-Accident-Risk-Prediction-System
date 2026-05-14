const locationData = {

Gujarat:{
Ahmedabad:["Maninagar","Navrangpura","Satellite"],
Vadodara:["Alkapuri","Karelibaug","Fatehgunj"],
Surat:["Adajan","Vesu","Katargam"]
},

Maharashtra:{
Pune:["Hinjewadi","Wakad","Shivajinagar"],
Nashik:["Panchavati","Gangapur","Indira Nagar"],
Thane:["Ghodbunder","Majiwada","Kalwa"]
},

Rajasthan:{
Jaipur:["Malviya Nagar","Mansarovar","Vaishali Nagar"],
Udaipur:["Hiran Magri","Fatehpura","Shobhagpura"]
},

Karnataka:{
Bangalore:["Whitefield","BTM","Indiranagar"],
Mysore:["Kuvempunagar","Vijayanagar","Gokulam"]
}

};

/* UPDATE CITY DROPDOWN */

function updateCities(){

const state=document.getElementById("state").value;
const citySelect=document.getElementById("city");

citySelect.innerHTML="";

Object.keys(locationData[state]).forEach(city=>{

let option=document.createElement("option");
option.value=city;
option.textContent=city;

citySelect.appendChild(option);

});

updateAreas();

}

/* UPDATE AREA DROPDOWN */

function updateAreas(){

const state=document.getElementById("state").value;
const city=document.getElementById("city").value;
const areaSelect=document.getElementById("area");

areaSelect.innerHTML="";

locationData[state][city].forEach(area=>{

let option=document.createElement("option");
option.value=area;
option.textContent=area;

areaSelect.appendChild(option);

});

}

/* EVENT LISTENERS */

document.getElementById("state").addEventListener("change",updateCities);
document.getElementById("city").addEventListener("change",updateAreas);

/* INITIAL LOAD FIX */

window.onload=function(){

updateCities();

};

/* AI PREDICTION */

function predictRisk(){

let state=document.getElementById("state").value;
let city=document.getElementById("city").value;
let area=document.getElementById("area").value;
let time=document.getElementById("time").value;
let daynight=document.getElementById("daynight").value;
let rain=document.getElementById("rain").value;

fetch("http://127.0.0.1:5000/predict",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
state,
city,
area,
time,
daynight,
rain
})

})

.then(res=>res.json())
.then(data=>{

document.getElementById("result").innerHTML=
"Accident Risk: "+data.risk;

});

}