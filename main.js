function displayTime(){
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    let mins = dateTime.getMinutes();
    let secs = dateTime.getSeconds();
    let session = document.getElementById("sessions"); 

    document.getElementById('hours').innerHTML = hrs; 
    document.getElementById('minutes').innerHTML = mins; 
    document.getElementById('seconds').innerHTML = secs; 
}

setInterval(displayTime, 10)