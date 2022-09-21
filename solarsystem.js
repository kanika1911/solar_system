
var earthweight = document.getElementById("kk");

var res = 0;
var output = document.getElementById("res");

function mercval() {
    res = earthweight.value*0.38;
    output.innerHTML = "The weight on Mercury is: " + res;
}

function venval() {
    res = earthweight.value*0.91;
    output.innerHTML = "The weight on Venus is: " + res;
}

function earval() {
    res = earthweight.value*1;
    output.innerHTML = "The weight on Earth is: " + res;
}

function marval() {
    res = earthweight.value*0.38;
    output.innerHTML = "The weight on Mars is: " + res;
}

function jupval() {
    res = earthweight.value*2.34;
    output.innerHTML = "The weight on Jupiter is: " + res;
}

function satval() {
    res = earthweight.value*1.06;
    output.innerHTML = "The weight on Saturn is: " + res;
}

function uranval() {
    res = earthweight.value*0.92;
    output.innerHTML = "The weight on Uranus is: " + res;
}

function nepval() {
    res = earthweight.value*1.19;
    output.innerHTML = "The weight on Neptune is: " + res;
}