window.onload = function () {
    //document.write("Hello JavaScript");
}

$(function(){
   $("input").on("click",function(){
        //window.alert("跳出視窗");
        //$("h1").text("$等於getElementsByTagName")
        var max  = $("#choices li").length;
        var rand = Math.floor(Math.random()*max) ;
        $("h1").text($("#choices li").eq(rand).text());
       })
});

