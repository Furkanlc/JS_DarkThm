var ball=document.querySelector("#ball");
ball.addEventListener('click',changeTema);
var leftside=true;
var rightside;
function changeTema(){
    if (leftside==true) {
        ball.style.left="40px";
        ball.style.backgroundColor="#111";
        leftside=false;
        document.querySelector('.mode').style.backgroundColor="#fff";
        document.querySelector('body').style.backgroundColor="#111";
    }
    else{
        ball.style.left="5px";
        ball.style.backgroundColor="#fff";
        leftside=true;
        document.querySelector('.mode').style.backgroundColor="#111";
        document.querySelector('body').style.backgroundColor="#fff";
    }
}
   

   
