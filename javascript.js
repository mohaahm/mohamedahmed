setTimeout(function(){
    $('.loader-bg').fadeToggle();
}, 2500);
var navlinks = document.getElementById("navlinks");

function showmenu(){
    navlinks.style.right = "0";
}x

function hidemenu(){
    navlinks.style.right = "-200px";
}