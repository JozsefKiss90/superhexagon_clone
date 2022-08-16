let mins = "00"
let seconds = "00"
let tens = "00"
let appendTens = document.getElementById("tens")
let appendSeconds = document.getElementById("seconds")
let appendMins = document.getElementById("mins")
 
export function startTimer () {
    tens++; 
    
    if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
        }
    if (tens > 9){
        appendTens.innerHTML = tens;
        } 
    if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
        }
    if (seconds > 9){
        appendSeconds.innerHTML = seconds;
    if (seconds > 59){
        mins++
        appendMins.innerHTML = "0" + mins;
        seconds = 0
        appendSeconds.innerHTML = "0" + 0;
        }
    }
}