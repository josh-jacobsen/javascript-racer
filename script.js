
document.addEventListener("keyup", keyUsed);

function keyUsed(event) { 
  if (event.which === 76){
    findActive(cells1);
  } 
  else if (event.which === 68){
    findActive(cells2);
  }
}

var player1 = document.getElementById("player1_strip");
var player2 = document.getElementById("player2_strip");

var cells1 = player1.getElementsByTagName("td");
var cells2 = player2.getElementsByTagName("td");

function findActive(cells){
  for (i = 0; i < cells.length; i++){
    if (cells[i].className === "active"){
      cells[i].className = "";
      cells[i].nextElementSibling.className = "active";
      break;
    }
  }
}



// var active = document.getElementsByClassName("active");

// 

// var cells = document.getElementById("player1_strip").getElementsByTagName("td");

// console.log(cells);

// for (i = 0; i < cells.length; i++){
//   cells[i].addEventListener("click", updatePosition);
//   cells[i].addEventListener("dblclick", uncheck);
// }


// function updatePosition(){
//   this.className = "active";
// }

// function uncheck(){
//   this.className = "";
// }

// document.addEventListener("keydown", itemKeyPress);

// function itemKeyPress(event){
//   if (event.which === 38){
//     console.log("That was the up key");
//   }
// }

// function updatePlayerPosition(activePlayer) {
//   for (i = 0; i < cells.length; i++){
//     if (cells[i].className === "active"){
//       console.log("active cell is number: ", cells[i]);
//       cells[i].className = "";
//       cells[i].nextElementSibling.className = "active";
//       break;
//     }
//   }
// }

// updatePlayerPosition(player1);

//
// document.onkeydown = function(e) {
//     switch (e.keyCode) {
//         case 37:
//             alert('left');
//             break;
//         case 38:
//             alert('up');
//             break;
//         case 39:
//             alert('right');
//             break;
//         case 40:
//             alert('down');
//             break;
//     }
// };