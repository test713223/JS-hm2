var topic =[
    "尚未開學","國定假日","環境準備","隨機性","重複性","動態加入測試","測試成功"
];

var startDate = new Date();

function set_StartMD(startM,startD) {
    startDate.setMonth(startM-1,startD);
    startDate.setHours   (0);
    startDate.setMinutes (0);
    startDate.setSeconds (0);
}
    set_StartMD(4,25);
    document.getElementById("st_day").value ;
    

