// START OF 2100 15/4/16 //

// Declare Variables //

var activeGame = false;

// Functions // 

function findActive(player){
    var check = Boolean(player)
    if (check === true) {
        var cells = document.getElementById(player).getElementsByTagName("td");
        for (i = 0; i < cells.length; i++){
            if (cells[i].className === "active" && cells[i].nextElementSibling !== null && activeGame === true){
                console.log("Option 1");
                cells[i].className = "";
                cells[i].nextElementSibling.className = "active";
                break;
            }
            else if (cells[i].className === "active" && cells[i].nextElementSibling === null && activeGame === true) {
                activeGame = false;
                console.log("option 2");
                alert("game over");  
                start_game();
                break;      
            }
            else {
                //
            }
        }
    }
    else {
        console.log("dammit");
    }
}

function assignCellstoPlayers(player){
}

function numberOfPlayers(){
    var game_players = prompt("how many players are there? (Enter a number between 2 and 4", 2);
    return game_players;
}

function lengthOfTrack() {
    var track = prompt("how far do you want to go?", 10);
    return track;
}

function clear_all(){
    document.getElementById("centered-content").innerHTML = "";
}

function restart() {
    if (activeGame === true){
        var end = confirm("Winners never quit, and quitters never win. Are you sure you want to quit?")
        if (end === true){
            activeGame = false;
            clear_all();
            start_game();
        }
    }
}

function keyUsed(event) {
    console.log(event.which);
    // key a 
    if (event.which === 65){
        findActive("stripPlayer:1");
    }
    // key s
    else if (event.which === 83) {
        findActive("stripPlayer:2")
    }
    // key d
    else if (event.which === 68) {
        findActive("stripPlayer:3")
    }
    // key f
    else if (event.which === 70) {
        findActive("stripPlayer:4")
    }
}     



function boardSetup() {

    var game_players = numberOfPlayers();
    var track = lengthOfTrack();

    var num_players = [];
    for (i = 0; i < game_players; i++){
        var player_number = [i + 1];
        num_players.push(player_number);
    }

    var playerIds = [];
    for (i = 0; i < game_players; i++){
        var player = [i + 1];
        playerIds.push(player);
    }

    var trackLength = [];
    for (i = 0; i < track; i++){
      var cell = [i + 1];
      trackLength.push(cell);
    }

    var cellIds = [];
    for (i = 0; i < track; i++){
      var cell = [i + 1];
      cellIds.push(cell);
    }    

    // get div to insert table
    var container = document.getElementById("centered-content");
    // create table element
    var table = document.createElement("table");
    // loop num_players to create rows
    for (i = 0; i < num_players.length; i++){
        var row = document.createElement("tr");
        // append row to table
        table.appendChild(row);
        // loop rows
        for (j = 0; j < trackLength.length; j++){
            var cell = document.createElement("td");
            row.appendChild(cell);
        }
    }
    container.appendChild(table);

    // Assign IDs to rows and cells //
    var rows = document.getElementsByTagName("tr");
    // traverse rows //
    for (i = 0; i < game_players; i++) {
        rowId = "stripPlayer:" + playerIds[i];
        rows[i].id = rowId;
        var cells = rows[i].getElementsByTagName("td");
        // traverse columns // 
        for (j = 0; j < cells.length; j++) {
            cells[j].id = "player:" + playerIds[i] + " " + "cell:" + cellIds[j];
        }
    }

    for (i = 0; i < game_players; i++){
        var cells = rows[i].getElementsByTagName("td");
        for (j = 0; j < cells.length; j++) {
            cells[0].className = "active";
        }
    }

}

function start_game() {

    if (activeGame === false){
        activeGame = true;

        clear_all();

        boardSetup();

        document.addEventListener("keyup", keyUsed);

    }

    else {
        //
    }    
}

// START OF 2100 15/4/16 //


// ENO OF FIND ACTIVE FUNCTION // 










    //     console.log("A key pressed");
    //     var cells = document.getElementById("stripPlayer:1").getElementsByTagName("td");
    //     for (i = 0; i < cells.length; i++){
    //         if (cells[i].className === "active" && cells[i].nextElementSibling !== null && activeGame !== false){
    //             cells[i].className = "";
    //             cells[i].nextElementSibling.className = "active";
    //             break;
    //         }
    //     }
    // }

 


// document.addEventListener("keyup", keyUsed);

// function keyUsed(event) { 
//   if (event.which === 76){
//     findActive(cells1);
//   } 
//   else if (event.which === 68){
//     findActive(cells2);
//   }
// }

//function findActive(cells){
//   for (i = 0; i < cells.length; i++){
//     if (cells[i].className === "active" && cells[i].nextElementSibling !== null && gameOver == false){
//       cells[i].className = "";
//       cells[i].nextElementSibling.className = "active";
//       break;
//     }
//     else if (cells[i].nextElementSibling === null && gameOver == false){
//       if (event.which === 76){
//         car_noise.play();
//         alert("player 1 wins!")

//         gameOver = true;
//         var rematch = confirm("Rematch?");
//         if (rematch) {
//           window.location = "file:///home/dev/javascript-racer/index.html";
//         } 
//       }
//       else if (event.which === 68){
//         alert("player 2 wins!")
//         gameOver = true;
//                 var rematch = confirm("Rematch?");
//         if (rematch) {
//           window.location = "file:///home/dev/javascript-racer/index.html";
//         } 
//       }
//     }
//   }
// }
















//   } 
//   else if (event.which === 68){
//     console.log("D key pressed");
// //    findActive(cells2);
//   }
// }

//var cells = document.getElementsByTagName("td");



// function findActive(player) {
//     var cells = player.getElementsByTagName("td");
//     for (i = 0; i < cells.length; i++){
//         if (cells[i].className === "active" && cells[i].nextElementSibling !== null && activeGame !== false){
//             cells[i].className = "";
//             cells[i].nextElementSibling.className = "active";
//             break;
//         }

        // else if (cells[i].nextElementSibling === null && gameOver == false){
        //     if (event.which === 76){
        //         car_noise.play();
        //         alert("player 1 wins!")


        //         gameOver = true;
        //         var rematch = confirm("Rematch?");
        //         if (rematch) {
        //             window.location = "file:///home/dev/javascript-racer/index.html";
        //         } 
        //     }
        //     else if (event.which === 68){
        //         alert("player 2 wins!")
        //         gameOver = true;
        //         var rematch = confirm("Rematch?");
        //         if (rematch) {
        //             window.location = "file:///home/dev/javascript-racer/index.html";
        //         } 
        //     }







// START OF CURRENT GOOD FUNCTION //
// function start_game() {

//     if (activeGame === false) {
//         var game_players = numberOfPlayers();
//         var track = lengthOfTrack();

//         var num_players = [];
//         for (i = 0; i < game_players; i++){
//             var player_number = [i + 1];
//             num_players.push(player_number);
//         }

//         var playerIds = [];
//         for (i = 0; i < game_players; i++){
//             var player = [i + 1];
//             playerIds.push(player);
//         }

//         var trackLength = [];
//         for (i = 0; i < track; i++){
//           var cell = [i + 1];
//           trackLength.push(cell);
//         }

//         var cellIds = [];
//         for (i = 0; i < track; i++){
//           var cell = [i + 1];
//           cellIds.push(cell);
//         }    

//         // set up playing board 

//         // get div to insert table
//         var container = document.getElementById("centered-content");
//         // create table element
//         var table = document.createElement("table");
//         // loop num_players to create rows
//         for (i = 0; i < num_players.length; i++){
//             var row = document.createElement("tr");
//             // append row to table
//             table.appendChild(row);
//             // loop rows
//             for (j = 0; j < trackLength.length; j++){
//                 var cell = document.createElement("td");
//                 row.appendChild(cell);
//             }
//         }
//         container.appendChild(table);


//         // Assign Ids to rows //
//         var rows = document.getElementsByTagName("tr");
//         for (i = 0; i < game_players; i++){
//             rows[i].id = "stripPlayer" + playerIds[i];
//             // Assign Ids to cells //
//         }




// // var cells1 = player0track.getElementsByTagName("td");
// // var cells2 = player1track.getElementsByTagName("td");

// // cells1[0].className = "active";
// // cells2[0].className = "active";

// // function findActive(cells){
// //   for (i = 0; i < cells.length; i++){
// //     if (cells[i].className === "active" && cells[i].nextElementSibling !== null && gameOver == false){
// //       cells[i].className = "";
// //       cells[i].nextElementSibling.className = "active";
// //       break;
// //     }
// //     else if (cells[i].nextElementSibling === null && gameOver == false){
// //       if (event.which === 76){
// //         car_noise.play();
// //         alert("player 1 wins!")

// //         gameOver = true;
// //         var rematch = confirm("Rematch?");
// //         if (rematch) {
// //           window.location = "file:///home/dev/javascript-racer/index.html";
// //         } 
// //       }
// //       else if (event.which === 68){
// //         alert("player 2 wins!")
// //         gameOver = true;
// //                 var rematch = confirm("Rematch?");
// //         if (rematch) {
// //           window.location = "file:///home/dev/javascript-racer/index.html";
// //         } 
// //       }
// //     }
// //   }
// // }

//         activeGame = true;
//     }

//     else {
//         //
//     }
// }

// END OF CURRENT GOOD FUNCTION // 


// var cells = document.getElementsByTagName("td");

// for (i = 0; i < cells.length; i++){
//     cells[i].id = 'cell-' + cellIds[i];
//}




// for (i = 0; i < trackLength.length; i++) {
//     // get inner array
//     var vals = trackLength[i];
//     // create tr element
//     // var row = document.createElement('tr');
//     // loop inner array
//     //for (var b = 0; b < vals.length; b++) {
//         // create td element
//     var cell = document.createElement('td');
//         // set text
//     //cell.textContent = vals;
//         // append td to tr
//     row.appendChild(cell);
//     // }
//     //append tr to tbody
//     // tbody.appendChild(row)
// }
// // append tbody to table
// // table.appendChild(tbody);
// table.appendChild(row);
// append table to container






// START OF CURRENT GAME CODE //

// var car_noise = document.getElementById("car_noise");

// var gameOver = false;

// document.addEventListener("keyup", keyUsed);

// function keyUsed(event) { 
//   if (event.which === 76){
//     findActive(cells1);
//   } 
//   else if (event.which === 68){
//     findActive(cells2);
//   }
// }
// var players = 2;

// var div = document.getElementById("centered-content");

// var tbl = document.createElement("table");
// tbl.setAttribute("id", "myTable");
// div.appendChild(tbl);

// for (i = 0; i < players; i++){
//   var row = document.createElement("tr");
//   tbl.appendChild(row);
//   for (j = 0; j < track; j++){
//     var cell = document.createElement("td");
//     row.appendChild(cell);
//   }
// }

// for (i = 0; i < players; i++){
//   tbl.rows[i].setAttribute("id", "player" + [i] + "track");
// }

// var cells1 = player0track.getElementsByTagName("td");
// var cells2 = player1track.getElementsByTagName("td");

// cells1[0].className = "active";
// cells2[0].className = "active";

// function findActive(cells){
//   for (i = 0; i < cells.length; i++){
//     if (cells[i].className === "active" && cells[i].nextElementSibling !== null && gameOver == false){
//       cells[i].className = "";
//       cells[i].nextElementSibling.className = "active";
//       break;
//     }
//     else if (cells[i].nextElementSibling === null && gameOver == false){
//       if (event.which === 76){
//         car_noise.play();
//         alert("player 1 wins!")

//         gameOver = true;
//         var rematch = confirm("Rematch?");
//         if (rematch) {
//           window.location = "file:///home/dev/javascript-racer/index.html";
//         } 
//       }
//       else if (event.which === 68){
//         alert("player 2 wins!")
//         gameOver = true;
//                 var rematch = confirm("Rematch?");
//         if (rematch) {
//           window.location = "file:///home/dev/javascript-racer/index.html";
//         } 
//       }
//     }
//   }
// }

// END OF CURRENT GAME CODE //





// START OF GRAVEYARD // 

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

// END OF GRAVEYARD //