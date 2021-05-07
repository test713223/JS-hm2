let thish1  = document.getElementsByTagName("h1" )[0];
let thisp1  = document.getElementsByTagName("p"  )[0];
let thisdiv = document.getElementsByTagName("div")[0];

function mousein() {
    thish1.innerHTML = "你進到靈的領域了"; 
}
function mouseout() {
    thish1.innerHTML = "你出去了"  
    thisp1.innerHTML = "";
}
function mousemove(e) {
    console.log(e);
    thisp1.innerHTML ="你在裡面亂飄移,位置" + e.clientX + ","+ e.clientY;
}

thisdiv.addEventListener("mouseover",mousein);
thisdiv.addEventListener("mouseout" ,mouseout);
thisdiv.addEventListener("mousemove",mousemove);
