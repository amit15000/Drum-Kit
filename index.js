// // {var numberOfButtons = document.querySelectorAll(".buttons").length;

// for (var j = 0; j < numberOfButtons; j++) {
//   document
//     .querySelectorAll(".buttons")
//     [j].addEventListener("click", function () {
//       var buttonStyle = this.innerHTML;
//       sound(buttonStyle);
//       animation(buttonStyle);
//     });
// }

// document.addEventListener("keypress", function (event) {
//   sound(event.key);
//   animation(event.key);
// });

// function sound(key) {
//   switch (key) {
//     case "w":
//       var sound1 = new Audio("sounds/tom-1.mp3");
//       sound1.play();
//       break;

//     case "a":
//       var sound2 = new Audio("sounds/tom-2.mp3");
//       sound2.play();
//       break;
//     case "s":
//       var sound3 = new Audio("sounds/tom-3.mp3");
//       sound3.play();
//       break;
//     case "d":
//       var sound4 = new Audio("sounds/tom-4.mp3");
//       sound4.play();
//       break;
//     case "j":
//       var sound5 = new Audio("sounds/snare.mp3");
//       sound5.play();
//       break;
//     case "k":
//       var sound6 = new Audio("sounds/kick-bass.mp3");
//       sound6.play();
//       break;
//     case "l":
//         var sound7 = new Audio("sounds/crash.mp3");
//         sound7.play();
//         break;

//     default: console.log(key);
//   }
// }

// function animation(currentKey)
// {
//     var activeButton = document.querySelector("." + currentKey);
//     activeButton.classList.add("animation");

//     setTimeout(function(){

//         activeButton.classList.remove("animation");
//     },100);
// }
// }



// //2nd attempt

var numberOfButtons=document.querySelectorAll(".drum").length;

for( var i =0 ; i< numberOfButtons;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function (){

    var currentButton=this.innerHTML;


    sound_play(currentButton);
    buttonAnimation(currentButton);
  
   
});
}

document.addEventListener("keypress", function(event)
    {
            sound_play(event.key);
            buttonAnimation(event.key);
    });





function sound_play(currentButton){

  switch (currentButton) {
    case "w":
      var sound1 = new Audio("sounds/tom-1.mp3");
      sound1.play();
      break;

    case "a":
      var sound2 = new Audio("sounds/tom-2.mp3");
      sound2.play();
      break;
    case "s":
      var sound3 = new Audio("sounds/tom-3.mp3");
      sound3.play();
      break;
    case "d":
      var sound4 = new Audio("sounds/tom-4.mp3");
      sound4.play();
      break;
    case "j":
      var sound5 = new Audio("sounds/snare.mp3");
      sound5.play();
      break;
    case "k":
      var sound6 = new Audio("sounds/kick-bass.mp3");
      sound6.play();
      break;
    case "l":
        var sound7 = new Audio("sounds/crash.mp3");
        sound7.play();
        break;

    default: console.log(key);
  }


  }
  
  function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed")

  setTimeout(function()
  {
    activeButton.classList.remove("pressed");
  },100)

}
