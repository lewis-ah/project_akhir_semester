var countDownDate = new Date("dec 30,2023 07:30:00");
var x = setInterval(function(){
    var now = new Date().getTime();
    var countdown = countDownDate - now;
    
    var days = Math.floor(countdown/(1000*60*60*24));
    var hours = Math.floor((countdown % (1000*60*60*24))/(1000*60*60));
    var minutes = Math.floor((countdown %(1000*60*60))/(1000*60));
    var seconds = Math.floor((countdown%(1000*60))/1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(countdown < 0){
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }
},1000);
