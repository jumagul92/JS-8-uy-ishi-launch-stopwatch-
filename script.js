
// soatni yurgizish uchun birinchi strelkaga ulanamiz

const hour = document.querySelector('.h');
const min = document.querySelector('.m');
const sec = document.querySelector('.s');
const hourNum = document.querySelector('.hours');
const minNum = document.querySelector('.minutes');
// console.log(new Date);
// console.log(new Date().getHours());

function clock(params) {
    
let time = new Date();
let seconds = time.getSeconds();
let minutes = time.getMinutes();
let hours = time.getHours();

// console.log(hours);
sec.style.transform =`rotate(${seconds*6}deg)`
min.style.transform = `rotate(${minutes*6}deg)`
hour.style.transform = `rotate(${hours*30}deg)`

setTimeout(() => {
    clock()
}, 1000);

hourNum.innerHTML = hours <10 ? "0" + hours : hours
minNum.innerHTML = minutes<10 ? "0" + minutes : minutes

}

clock()

const links = document.querySelectorAll('.tabsItem');
const tabs = document.querySelectorAll('.tabsContentItem');
//  console.log(links);

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', (e)=>{
        e.preventDefault()
        
        for (let j = 0; j < links.length; j++) {
            links[j].classList.remove('active')
            tabs[j].classList.remove('active')
            
        }
        links[i].classList.add('active')
        tabs[i].classList.add('active')
    })
    
}







const stopwatch = document.querySelector('.stopwatch__btn');
const stopWatchSeconds = document.querySelector('.stopwatch__seconds');
const stopwatchMinutes = document.querySelector('.stopwatch__minutes');
const stopwatchHours = document.querySelector('.stopwatch__hours');
const tabsLink = document.querySelector('.tabsLink__span');

    stopwatch.addEventListener('click', ()=>{
        if (stopwatch.innerHTML == 'START') {
            stopwatch.innerHTML = 'STOP'
            tabsLink.classList.add('active')
        } else if (stopwatch.innerHTML == 'STOP'){
        stopwatch.innerHTML = 'CLEAR'
        tabsLink.classList.add('active_clear')
        
        } else {
            stopwatch.innerHTML = 'START'
            tabsLink.classList.remove('active_clear')
            tabsLink.classList.remove('active')
        }
    })

function launchStopWatch(params) {
    if (stopwatch.innerHTML=='STOP') {
        stopWatchSeconds.innerHTML++
    } if (stopWatchSeconds.innerHTML>=60) {
        stopWatchSeconds.innerHTML = 0;
        stopwatchMinutes.innerHTML++;
    } if (stopwatchMinutes.innerHTML>= 60){
        stopwatchMinutes.innerHTML = 0;
        stopwatchHours.innerHTML++
    } if(stopwatchHours.innerHTML>=24){
        stopwatchHours.innerHTML = 0
    } if (stopwatch.innerHTML== 'START'){
        stopWatchSeconds = 0;
        stopwatchMinutes = 0;
        stopwatchHours = 0;
    }
    
   setTimeout(() => {
    launchStopWatch()
   }, 1000);
}

launchStopWatch()



