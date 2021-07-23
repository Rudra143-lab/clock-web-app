// var hour=document.getElementById("hour");
// var minute=document.getElementById("minute");
// var second=document.getElementById("seconds");

setInterval(() => {
    d= new Date;
    htime=d.getHours();
    mtime=d.getMinutes();
    stime=d.getSeconds();
    hrotation=30*htime + mtime/2;
    m_rotation=6*mtime;
    s_rotation=6*stime;

    hour.style.transform =`rotate(${hrotation}deg)`;
    minute.style.transform =`rotate(${m_rotation}deg)`;
    seconds.style.transform =`rotate(${s_rotation}deg)`;
},1000);