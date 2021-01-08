var nav = document.getElementById("nav");

window.onscroll = function(){
    if (window.pageYOffset > 100){
        nav.style.background="#F1F1EF";
        nav.style.boxShadow="0 4px 2px -2px gray";
    }
    else{
        nav.style.background="transparent";
        nav.style.boxShadow="";

    } 
}
