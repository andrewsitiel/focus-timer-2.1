  import { userMinutes } from "./index.js"
  import { controls } from "./controls.js"
  
  let controlsOpt = controls()
  
  export function timer(timerMinutes , timerSeconds, minutes , ) {
    let timeOut

    function countdown(){
    timeOut = setTimeout(() => {
      minutes = Number(timerMinutes.textContent)
      let seconds = Number(timerSeconds.textContent)

      if(minutes == "0" && seconds == "0" ){
        resetTimer()
        controlsOpt.atPressStop()
        return
      }

      if(seconds == "0"){
        timerMinutes.textContent = attMinutes(-1);
        seconds= 5;
      }

      timerSeconds.textContent = String(--seconds).padStart(2 , "0")

      countdown()
    }, 1000)
    }

    function resetTimer(){
      timerMinutes.textContent = String(userMinutes).padStart(2 , "0");
      timerSeconds.textContent = "00";
      clearTimeout(timeOut)
    }

    function attMinutes(value){
      return String(minutes += value).padStart(2 , "0");
    }

    return {countdown , resetTimer , attMinutes}
}