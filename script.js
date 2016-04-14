// START OF CURRENT GAME CODE //


// var gameOver = false;

// var box = document.getElementById("winner-box");
// var paras = document.getElementsByTagName("p");
// var para1 = paras[0];
// var para2 = paras[1];
// var player1Win = "Player 1 Wins!";
// var player2Win = "Player 2 Wins!";



// document.addEventListener("keyup", keyUsed);

// function keyUsed(event) { 
//   if (event.which === 76){
//     findActive(cells1);
//   } 
//   else if (event.which === 68){
//     findActive(cells2);
//   }
// }

// var player1 = document.getElementById("player1_strip");
// var player2 = document.getElementById("player2_strip");

// var cells1 = player1.getElementsByTagName("td");
// var cells2 = player2.getElementsByTagName("td");

// function findActive(cells){
//   for (i = 0; i < cells.length; i++){
//     if (cells[i].className === "active" && cells[i].nextElementSibling !== null && gameOver == false){
//       cells[i].className = "";
//       cells[i].nextElementSibling.className = "active";
//       break;
//     }
//     else if (cells[i].nextElementSibling === null && gameOver == false){
//       if (event.which === 76){
//         box.className = "border";
//         var para = document.createElement("p");
//         var content = document.createTextNode("Player 1 Wins!!")
//         para.appendChild(content);
//         box.appendChild(para);
//         gameOver = true;
//       }
//       else if (event.which === 68){
//         box.className = "border";
//         var para = document.createElement("p");
//         var content = document.createTextNode("Player 2 Wins!!")
//         para.appendChild(content);
//         box.appendChild(para);
//         gameOver = true;
//       }
//     }
//   }
// }

// END OF CURRENT GAME CODE //

// START OF CURRENT GAME CODE //


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
var players = 2;

//var track = 5;

var div = document.getElementById("centered-content");

var tbl = document.createElement("table");
tbl.setAttribute("id", "myTable");
//document.body.appendChild(tbl);

div.appendChild(tbl);

for (i = 0; i < players; i++){
  var row = document.createElement("tr");
  tbl.appendChild(row);
  for (j = 0; j < track; j++){
    var cell = document.createElement("td");
    row.appendChild(cell);
  }
}




for (i = 0; i < players; i++){
  tbl.rows[i].setAttribute("id", "player" + [i] + "track");
}

var cells1 = player0track.getElementsByTagName("td");
var cells2 = player1track.getElementsByTagName("td");

cells1[0].className = "active";
cells2[0].className = "active";

function findActive(cells){
  for (i = 0; i < cells.length; i++){
    if (cells[i].className === "active" && cells[i].nextElementSibling !== null && gameOver == false){
      cells[i].className = "";
      cells[i].nextElementSibling.className = "active";
      break;
    }
    else if (cells[i].nextElementSibling === null && gameOver == false){
      if (event.which === 76){
        alert("player 1 wins!")
        var car_noise = document.getElementById("car_noise");
        car_noise.play();
        gameOver = true;
        var rematch = confirm("Rematch?");
        if (rematch) {
          window.location = "file:///home/dev/javascript-racer/index.html";
        } 
      }
      else if (event.which === 68){
        alert("player 2 wins!")
        gameOver = true;
                var rematch = confirm("Rematch?");
        if (rematch) {
          window.location = "file:///home/dev/javascript-racer/index.html";
        } 
      }
    }
  }
}







// var cells1 = player1.getElementsByTagName("td");
// // var cells2 = player2.getElementsByTagName("td");








// var tr1 = document.createElement('tr');
// tr1.setAttribute("id", "row1");
// tbl.appendChild(tr1);

// // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
// var cell1 = document.createElement("td");
// cell1.setAttribute("id", "cell1");
// tr1.appendChild(cell1);

// var cell2 = document.createElement("td");
// cell2.setAttribute("id", "cell2");
// tr1.appendChild(cell2);

// var cell3 = document.createElement("td");
// cell3.setAttribute("id", "cell3");
// tr1.appendChild(cell3);

// var cell4 = document.createElement("td");
// cell4.setAttribute("id", "cell4");
// tr1.appendChild(cell4);





// var cell2 = row1.insertCell(1);

// var cell3 = row2.insertCell(0);
// var cell4 = row2.insertCell(1);

// // Add some text to the new cells:
// cell1.innerHTML = "NEW CELL IN ROW 1";
// cell2.innerHTML = "NEW CELL IN ROW 1";

// cell3.innerHTML = "NEW CELL3";
// cell4.innerHTML = "NEW CELL4";















// function tableCreate(){
//     var body = document.body,
//         tbl  = document.createElement('table');
//     tbl.style.width  = '100px';
//     tbl.style.border = '1px solid black';

//     for(var i = 0; i < 3; i++){
//         var tr = tbl.insertRow();
//         for(var j = 0; j < 2; j++){
//             if(i == 2 && j == 1){
//                 break;
//             } else {
//                 var td = tr.insertCell();
//                 td.appendChild(document.createTextNode('Cell'));
//                 td.style.border = '1px solid black';
//                 if(i == 1 && j == 1){
//                     td.setAttribute('rowSpan', '2');
//                 }
//             }
//         }
//     }
//     body.appendChild(tbl);
// }
// tableCreate();









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