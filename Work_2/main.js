let timer     = document.getElementById("timer");
let userinput = document.getElementById("userinput");
let showtext  = document.getElementById("showtext");
let button    = document.getElementsByTagName("button")[0];
let count = 10 ;

button.addEventListener("click", checkPassword);
let myvar = setInterval(myTimer,1000);



timer.innerHTML = count;
function myTimer() {
    if(count>0){
        count--;
        timer.innerHTML = count;
    }else{
        showtext.innerHTML = "Game Over : (";
        clearInterval(myvar);
    } 
}

function checkPassword(){
    showtext.innerHTML="";
    if (parseInt (userinput.value) ==1234) {
        alert("You Win !");
        clearInterval(myvar);  
    } else {
        showtext.innerHTML=": (";
    }
    userinput.value = null;
}