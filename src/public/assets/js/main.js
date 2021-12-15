var map;
var lati = 0;
var longi = 0;


//document.addEventListener('DOMContentLoaded', function(){
var modal = document.getElementById('myModal');
var contentModalGive = document.getElementById('contentModal-give');
var contentModalTake = document.getElementById('contentModal-take');
var btn1 = document.getElementById("btn-give");
var btn2 = document.getElementById("btn-take");
var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];
var dangxuat = document.getElementById("dangxuat");

dangxuat.onclick = function() {
  if(document.cookie <= 0)
  {
    confirm('Bạn Chưa Đăng Nhập, Mời Bạn Đăng Nhập !!!')
  }
}

btn1.onclick = function() {
  if(document.cookie <= 0)
  {
    if(confirm('Bạn Chưa Đăng Nhập. Mời Bạn Đăng Nhập Để Tiếp Tục')==true) {
      window.location="http://localhost:4000/login"
    }
  }
  else
  {
    modal.style.display = "block";
    contentModalGive.style.display = "block";
  }
}
span.onclick = function() {
modal.style.display = "none";
contentModalTake.style.display = "none";
}
span1.onclick = function() {
  modal.style.display = "none";
  contentModalGive.style.display = "none";
  }
btn2.onclick = function() {
  if(document.cookie <= 0)
  {
    if(confirm('Bạn Chưa Đăng Nhập. Mời Bạn Đăng Nhập Để Tiếp Tục')==true) {
      window.location="http://localhost:4000/login"
    }
  }
  else
  {
    modal.style.display = "block";
    contentModalTake.style.display = "block";
  }
}
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
contentModalTake.style.display = "none";
contentModalGive.style.display = "none";
}
}

//})

