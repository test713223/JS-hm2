let thisH1= document.getElementsByTagName("h1")[0];
thisH1.addEventListener("click",showAlert);

function showAlert() {
    alert(
        "字串長度"+thisH1.innerHTML.length+ "\r\n" +
        "第一個詞,在:" + thisH1.innerHTML.split(" ")[0]+"\r\n" +
        "第二個詞,在:" + thisH1.innerHTML.split(" ")[1]+"\r\n" +
        "World,在"+thisH1.innerHTML.indexOf("World")+"位置"+"\r\n"
        );
}