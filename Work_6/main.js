$(function(){
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    //id=courseTable 附加欄位及欄位標題
    
    var max = topic.length;
    var onedayperms = 24*60*60*1000 ; 

    for(var i=0;i<max;i++){
        $("#courseTable").append("<tr>");
        $("#courseTable").append(`<td>${i+1}</td>`);
        $("#courseTable").append(`<td>${(new Date(startDate.getTime()+7*i*onedayperms).toLocaleDateString().substring(5,9))}</td>`);//str.substring(0起,到幾)
        $("#courseTable").append(`<td>${topic[i]}</td>`);
        $("#courseTable").append("</tr>");
    }
}); 