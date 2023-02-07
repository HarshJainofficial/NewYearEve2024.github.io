const NewYearDate = "1 Jan 2024";

const daysE1 = document.getElementById('days') ;
const hoursE1 = document.getElementById('hours') ;
const minsE1 = document.getElementById('minutes') ;
const secondsE1 = document.getElementById('seconds') ;

function countDown() {
    const date_new = new Date(NewYearDate) ;
    const currentDate = new Date();
    
    const totalSecond = Math.floor((date_new - currentDate) / 1000 ) ;
    const days  = Math.floor(totalSecond/3600/24) ;
    const hours = Math.floor((totalSecond/3600)% 24);
    const minutes = Math.floor((totalSecond/60) % 60) ;
    const second = Math.floor(totalSecond % 60)
    

    daysE1.innerHTML = days ;
    hoursE1.innerHTML = hours ;
    minsE1.innerHTML = minutes ;
    secondsE1.innerHTML = second ;

    

    console.log(  days , hours , minutes , second);

}

countDown()
setInterval(countDown , 1000)


function formatTime(time) {
    return time < 10 ? '0${time}' : time ;
    
}
