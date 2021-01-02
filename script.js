var nav = document.getElementById("nav");

window.onscroll = function(){
    if (window.pageYOffset > 100){
        nav.style.background="#F1F1EF";
    }
    else{
        nav.style.background="transparent";
    } 
}
