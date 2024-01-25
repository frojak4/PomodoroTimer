const bells = new Audio('bell.wav'); 

const startButton = document.querySelector(".timer");
const container = document.querySelector(".container");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let time = 25;
let myInterval;
let state = true;
let totalSeconds = 0;

const appTimer = () => {
    if (state) {
        state = false;
        startButton.innerHTML = "";
        totalSeconds = time * 60;
    
    
        const updateSeconds = () => {
            totalSeconds --;
            let minutesLeft = Math.floor(totalSeconds/60);
            let secondsLeft = totalSeconds % 60;

            if (secondsLeft < 10) {
                seconds.innerHTML = "0" + secondsLeft;
            }
            else {
                seconds.innerHTML = secondsLeft;
            }
            minutes.innerHTML = minutesLeft + ":";

            if (minutesLeft === 0 & secondsLeft === 0) {
                bells.play();
                clearInterval(myInterval);
            }
            
        }
        myInterval = setInterval(updateSeconds, 1000);
    } else {
        clearInterval(myInterval);
        state = true;
        time = totalSeconds / 60; 
        minutes.innerHTML = "";
        seconds.innerHTML = "";
        startButton.innerHTML = "⏸";
    }
    }

container.addEventListener("click", appTimer);