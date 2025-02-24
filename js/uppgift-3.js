function init(){
    document.getElementById("p1").onmouseenter = onhover;
    document.getElementById("p1").onmouseleave = offhover;
 }
  
 function onhover(){
    document.getElementById("p1").style.color = "Red";
 }

 function offhover(){
    document.getElementById("p1").style.color = "Black";
 }
 
 window.onload = init;
 
 