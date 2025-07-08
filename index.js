var buttoncolors=["red","yellow","blue","green"];
var gamepattern=[];
var userclickedpattern=[];
var level=0;
var cont=1;
var k=0;
function nextSequence(){
    level++;
    document.querySelector("h1").innerHTML="Level "+level;
    var randomchosencolor=buttoncolors[Math.floor((Math.random()*4))];
    gamepattern.push(randomchosencolor);
    $("#"+randomchosencolor).fadeOut(100).fadeIn(100);
    playsound(randomchosencolor);
}
function playsound(name){
    var aud=new Audio("./sounds/"+name+".mp3");
    aud.play();
}
document.querySelector("#yellow").addEventListener("click",handler);
document.querySelector("#red").addEventListener("click",handler);
document.querySelector("#blue").addEventListener("click",handler);
document.querySelector("#green").addEventListener("click",handler);
function handler(){
    var userchosencolor=this.id;
    animatepress(userchosencolor);
    userclickedpattern.push(userchosencolor);
    playsound(userchosencolor);
    console.log(userclickedpattern[userclickedpattern.length-1]);
    console.log(gamepattern[k]);
    if(userclickedpattern.length==((level)*(level+1))/2){
        if(userclickedpattern[userclickedpattern.length-1]!=gamepattern[gamepattern.length-1]){
            var aud2=new Audio("./sounds/wrong.mp3");
            aud2.play();
            document.querySelector("h1").innerHTML="Game Over";
            setTimeout(() => {
                location.reload(true);
            }, 2000);
        }
        else{
            k=0;
            setTimeout(() => {
                nextSequence(); 
            }, 1000);
        }
    }
    else{
        if(userclickedpattern[userclickedpattern.length-1]!=gamepattern[k]){
            var aud2=new Audio("./sounds/wrong.mp3");
            aud2.play();
            document.querySelector("h1").innerHTML="Game Over";
            setTimeout(() => {
                location.reload(true);
            }, 2000);
        }
        else{
            k++;
        }
    }
}
function animatepress(name){
    $("#"+name).addClass("pressed");
    setTimeout(() => {
        $("#"+name).removeClass("pressed");
    }, 100);
}
document.addEventListener("keydown",function(){
    if(level==0){
        nextSequence();
    }
});

