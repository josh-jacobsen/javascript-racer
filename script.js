var gameOver = false;

var box = document.getElementById("winner-box");
var paras = document.getElementsByTagName("p");
var para1 = paras[0];
var para2 = paras[1];
var player1Win = "Player 1 Wins!";
var player2Win = "Player 2 Wins!";



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
    if (cells[i].className === "active" && cells[i].nextElementSibling !== null && gameOver == false){
      cells[i].className = "";
      cells[i].nextElementSibling.className = "active";
      break;
    }
    else if (cells[i].nextElementSibling === null && gameOver == false){
      if (event.which === 76){
        box.className = "border";
        var para = document.createElement("p");
        var content = document.createTextNode("Player 1 Wins!!")
        para.appendChild(content);
        box.appendChild(para);
        gameOver = true;
      }
      else if (event.which === 68){
        box.className = "border";
        var para = document.createElement("p");
        var content = document.createTextNode("Player 2 Wins!!")
        para.appendChild(content);
        box.appendChild(para);
        gameOver = true;
      }
    }
  }
}

