


function UpdateClock()
{
    const time=new Date();
    let hours=time.getHours();
    const minutes=time.getMinutes().toString().padStart(2,0);
    const seconds=time.getSeconds().toString().padStart(2,0);
    let meridian=hours>=12?"PM":"AM";
    hours=hours%12||12;
    hours=hours.toString().padStart(2,0)
    const timestring=`${hours}:${minutes}:${seconds} ${meridian}`;
    const clock=document.getElementById("clock").textContent=timestring;
}

UpdateClock();
setInterval(UpdateClock,10000)