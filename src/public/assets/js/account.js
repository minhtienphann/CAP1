var btnInfo = document.getElementById("show-info");
var viewInfo = document.getElementById("acc-with-info");
var btnUpdate = document.getElementById("show-update");
var viewUpdate = document.getElementById("update-info")
var accMain = document.getElementById("acc-main");
var btnPass = document.getElementById("btn-update-pass")
var viewPass = document.getElementById("update-pass")
btnInfo.onclick = function(){
    viewInfo.style.display = "block";
    viewUpdate.style.display = "none";
    accMain.style.display = "none";
    viewPass.style.display = "none";
}

btnUpdate.onclick = function(){
    viewInfo.style.display = "none";
    viewUpdate.style.display = "block";
    accMain.style.display = "none";
    viewPass.style.display = "none";
}

btnPass.onclick = function(){
    viewInfo.style.display = "none";
    viewUpdate.style.display = "none";
    accMain.style.display = "none";
    viewPass.style.display = "block";
}
