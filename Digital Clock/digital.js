let hrs = document.getElementById("hrs");
let mins = document.getElementById("mins");
let secs = document.getElementById("secs");

setInterval(() => {
    let time = new Date();


hrs.innerHTML = (time.getHours() < 10 ? "0" : "") + time.getHours();
mins.innerHTML = (time.getMinutes() < 10 ? "0" : "") + time.getMinutes();
secs.innerHTML = (time.getSeconds() < 10 ? "0" : "") + time.getSeconds();

}, 1000);