var btnInfo = document.getElementById("show-admin");
var viewInfo = document.getElementById("admin-with-info");
var showUser = document.getElementById("list-user");
var viewUser = document.getElementById("list-all-user");
var accMain = document.getElementById("acc-main")
var updateProfile = document.getElementById("update-all-user")
var showUpdateProfile = document.getElementById("update-profile-user")
btnInfo.onclick = function(){
    viewInfo.style.display = "block";
    viewUser.style.display = "none";
    accMain.style.display = "none";
    showUpdateProfile.style.display = "none"
}

showUser.onclick = function(){
    viewInfo.style.display = "none";
    viewUser.style.display = "block";
    accMain.style.display = "none";
    showUpdateProfile.style.display = "none"
}

updateProfile.onclick = function(){
    viewInfo.style.display = "none";
    viewUser.style.display = "none";
    accMain.style.display = "none";
    showUpdateProfile.style.display = "block"
}