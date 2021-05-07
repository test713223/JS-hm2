let thisH1 = document.getElementsByTagName("h1")[0];
let timer = setInterval(showTime,1000);

function showTime(){
    let currenTime = new Date();
    thisH1.innerHTML = currenTime.toLocaleTimeString();

}