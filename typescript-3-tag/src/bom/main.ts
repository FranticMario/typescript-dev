import "./style.css"

const minutes = document.querySelector("#minutes") as HTMLInputElement;
const startBtn = document.querySelector("#start-button") as HTMLElement;
const pauseBtn = document.querySelector("#pause-button") as HTMLElement;
const restartBtn = document.querySelector("#restart-button") as HTMLElement
const resetBtn = document.querySelector("#reset-button") as HTMLElement;
const time = document.querySelector("#time") as HTMLElement

let interval:number;


const startTimer = () => {
    let sec = 0;
    console.log(time.textContent === "00:00")
    if(minutes) {
        let startMin:number;

        if(time.textContent !== "00:00") {
            startMin = Number(time.textContent?.split(":")[0])
            sec = Number(time.textContent?.split(":")[1])
        } else {
            startMin  = Number(minutes.value)
            sec = 0
        }

        interval = setInterval(() => {
            sec--
            if (sec < 0) {
                if (startMin === 0 && sec < 0) {
                    return clearInterval(interval);
                }
                sec = 59;
                startMin--;
            }
                time.textContent = `${startMin >= 10 ? startMin : `0${startMin}` }:${sec < 10 ? `0${sec}` : sec}`
        },100)


    }


}

const restartTimer = () => {
    time.textContent = "00:00"
    clearInterval(interval);
    startTimer()
}

const pauseTímer = () => {
    clearInterval(interval)
}

const resetTimer = () => {
    time.textContent = "00:00"
    clearInterval(interval);
    minutes.value = ""
}



startBtn?.addEventListener("click", startTimer)
restartBtn?.addEventListener("click", restartTimer)
pauseBtn?.addEventListener("click", pauseTímer)
resetBtn?.addEventListener("click", resetTimer)