numberButton = document.querySelectorAll(".drum").length
for(var i=0; i<numberButton; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    let buttonInnerContent = this.innerHTML;
    checkCase(buttonInnerContent);
    buttonAnimation (buttonInnerContent);

  });
}

document.addEventListener("keydown", function(event){
  let keyboard = event.key;
  checkCase(keyboard);
  buttonAnimation (keyboard);
});


function buttonAnimation (currentKey){
  let buttonEle = document.querySelector("." +currentKey);
  buttonEle.classList.add("pressed");
  setTimeout(function(){
    buttonEle.classList.remove("pressed");
  }, 100);
}

function checkCase(letter){
  switch(letter){
    case "w":
    let audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    break;
    case "a":
    let audio2 = new Audio("sounds/tom-2.mp3");
    audio2.play();
    break;
    case "s":
    let audio3 = new Audio("sounds/tom-3.mp3");
    audio3.play();
    break;
    case "d":
    let audio4 = new Audio("sounds/tom-4.mp3");
    audio4.play();
    break;
    case "j":
    let audio5 = new Audio("sounds/snare.mp3");
    audio5.play();
    break;
    case "k":
    let audio6 = new Audio("sounds/crash.mp3");
    audio6.play();
    break;
    case "l":
    let audio7 = new Audio("sounds/kick-bass.mp3");
    audio7.play();
    break;
  }
}
