const targetDate = new Date("1 Jan, 2027 00:00:00").getTime();
const startDate = new Date("1 Jan, 2026 00:00:00").getTime();
console.log(targetDate-startDate)
function updateTime(){
    const now = new Date().getTime();
    const timeGone = now-startDate;
    const timeLeft = targetDate-now;
    // other variables
    const daysleft = Math.floor(timeLeft/(24*60*60*1000));
    const hoursleft = Math.floor((timeLeft%(24*60*60*1000))/(60*60*1000));
    const minutesleft = Math.floor((timeLeft%(60*60*1000))/(60*1000)); 
    const secondsleft = Math.floor((timeLeft%(60*1000))/1000);

    // show on webscreen
    document.getElementById("D").textContent=daysleft.toString().padStart(3,"0");
    document.getElementById("H").textContent=hoursleft.toString().padStart(2,"0");
    document.getElementById("Mi").textContent=minutesleft.toString().padStart(2,"0");
    document.getElementById("S").textContent=secondsleft.toString().padStart(2,"0");
    // progress-bar
    const percentage = ((now-startDate)/(targetDate-startDate))*100;
    document.getElementById("progress-text").textContent=percentage.toFixed(2)+" %";
    document.getElementById("progress-bar").style.width=percentage+"%";

    if (percentage==100){
        const endTimer = document.getElementById("countdown-timer-box");
        endTimer.innerHTML=`<h1 id="after-completion">💥🎉 HAPPY NEW YEAR 💥🎁 <br>🥂</h1>`;
    }
}
setInterval(updateTime,1000);
