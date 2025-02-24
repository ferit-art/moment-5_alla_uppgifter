function init(){
    let element = document.getElementById('thumbs');
    let imgList = element.getElementsByTagName('img');
  
    for(let i = 0; i <imgList.length; i++){
       imgList[i].onmouseover = overImg;
    }
 }
  
 function overImg(e){
    let element = document.getElementById('largeImg');
    let imgName = e.target.src.split("_")[0] + ".png";
  
    element.src = imgName;
 }
  
 window.onload = init;
 
 