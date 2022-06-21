//console.log(document);

var menu = document.querySelector(".menuBurger");
var haut = document.querySelector(".haut");
var milieu = document.querySelector(".milieu");
var bas = document.querySelector(".bas");
var repere = 0;

function activeMenu(){
    if(repere === 0){

        haut.style.transform = "translateY(16px)";
        milieu.style.display = "none";
        bas.style.transform = "translateY(-9px)";

        setTimeout(function(){
            haut.style.marginBottom = "-48px"
            haut.style.transform = "rotate(45deg)";
            bas.style.transform = "rotate(-45deg)";
        } , 300)
            
        repere = 1;
    }
    
    else if(repere === 1){

        haut.style.marginBottom = "unset"
        haut.style.transform = "rotate(0deg)";
        bas.style.transform = "rotate(0deg)";

        setTimeout(function(){
            haut.style.transform = "translateY(0px)";
            milieu.style.display = "block";
            bas.style.transform = "translateY(0px)";
        }, 300)

        repere = 0;
    }
}

menu.addEventListener("click", activeMenu);