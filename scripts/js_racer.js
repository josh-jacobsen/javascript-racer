window.onload = function() {

    var canvas = document.getElementById("subCanvas");
    var ctx = canvas.getContext("2d");

    var width = canvas.width;
    var height = canvas.height;

    var submarine_img = new Image();
    submarine_img.src = "images/submarine-t.png";

    var keyActions = {
        32: "fire",
        37: "left",
        38: "up",
        39: "right",
        40: "down"
    };

    document.addEventListener("keydown", function(event){
        console.log(event.keyCode);
        var direction = keyActions[event.keyCode];
        submarine.setDirection(direction);
    });

    var Sub = function() {
        this.x = (width - 100) / 2;
        this.y = (height - 100) / 2;
        this.xSpeed = 0;
        this.ySpeed = 0;
    }

    // Sub.prototype.move = function() {
    //     this.x += this.xSpeed;
    //     this.y += this.ySpeed;

    //     if (this.x <0) {
    //         this.x = width;
    //     } else if (this.x > width) {
    //         this.x = 0;
    //     } else if (this.y < 0) {
    //         this.y = height;
    //     } else if (this.y > height) {
    //         this.y = 0;
    //     }
    // };

    Sub.prototype.draw = function() {
        ctx.drawImage(submarine_img, this.x, this.y, 100, 100);
    };

    Sub.prototype.setDirection = function(direction) {
        if (direction === "up") {
            this.y -= 5;
            if (this.y < (0 - (0.1*height))) {
                this.y = (height);
            }
        } else if (direction === "down") {
            this.y += 5;
            if (this.y > (height)) {
                this.y = (0 - (0.1*height));
            }
        } else if (direction === "left") {
            this.x += -5;
            this.y += 0;
        } else if (direction === "right") {
            this.x += 5;
            this.y += 0;
        } else if (direction === "fire") {
            var torpedo = new Torpedo;
        }
    };

    var Torpedo = function(submarine){
        this.x = submarine.x;
        this.y = submarine.y;
        this.xSpeed = 2;
        this.ySpeed = 0;
    }




    var submarine = new Sub;

    setInterval(function() {
        ctx.clearRect(0, 0, width, height);

        submarine.draw();
        //submarine.move();

        ctx.strokeRect(0, 0, width, height);
    }, 30);




}





// Declare Variables //

// var activeGame = false;
// var finishedGame = false;
// var missileImpact = document.getElementById("missile_impact");
// var missileVideo = document.getElementById("missile_video");

// // Functions //

// function callAlert() {

//     activeGame = false;
//     alert("game over");
//     start_game();
//     }

// function clearTorpedoes(track) {
//     var torpedoes = document.getElementById(track).getElementsByTagName("td");
//     for (i = 0; i < torpedoes.length; i++) {
//         torpedoes[i].className = "";
//     }
// }

// function findActive(player){
//     var check = Boolean(player)
//     if (check === true) {
//         var cells = document.getElementById(player).getElementsByTagName("td");
//         for (i = 0; i < cells.length; i++){
//             if (cells[i].className === "active" && cells[i].nextElementSibling !== null && activeGame === true){
//                 cells[i].className = "";
//                 cells[i].nextElementSibling.className = "active";
//                 break;
//             }
//             else if (cells[i].className === "active" && cells[i].nextElementSibling === null && activeGame === true) {
//                 var ship = document.getElementById("ship");
//                 ship.style.backgroundImage="url('images/impact.gif')";
//                 clearTorpedoes(player);
//                 //document.getElementsByClassName("active").className = "";
//                 missileImpact.play();
//                 activeGame = false;
//                 finishedGame = true;
//                 break;
//             }
//             else {
//                 //
//             }
//         }
//     }
// }

// function assignCellstoPlayers(player){
// }

// function numberOfPlayers(){
//     var game_players = prompt("Captain, how many torpedoes do you want to fire? (Enter a number between 2 and 4", 2);
//     return game_players;
// }

// function lengthOfTrack() {
//     var track = prompt("How far from the target are we?", 10);
//     return track;
// }

// function clear_all(){
//     document.getElementById("centered-content").innerHTML = "";
//     document.getElementById("sub").style.backgroundImage="url('')";
//     document.getElementById("ship").style.backgroundImage ="url('')";
// }

// function restart() {
//     if (activeGame === true){
//         var end = confirm("Winners never quit and quitters never win. Are you sure you want to leave the game?")
//         if (end === true){

//             activeGame = false;
//             clear_all();
//             start_game();
//         }
//     }
//    else {
//         clear_all();
//         start_game();
//    }
// }

// function keyUsed(event) {
//     // key a
//     if (event.which === 65){
//         findActive("stripPlayer:1");
//     }
//     // key s
//     else if (event.which === 83) {
//         findActive("stripPlayer:2")
//     }
//     // key d
//     else if (event.which === 68) {
//         findActive("stripPlayer:3")
//     }
//     // key f
//     else if (event.which === 70) {
//         findActive("stripPlayer:4")
//     }
// }



// function boardSetup() {

//     var game_players = numberOfPlayers();
//     var track = lengthOfTrack();

//     var num_players = [];
//     for (i = 0; i < game_players; i++){
//         var player_number = [i + 1];
//         num_players.push(player_number);
//     }

//     var playerIds = [];
//     for (i = 0; i < game_players; i++){
//         var player = [i + 1];
//         playerIds.push(player);
//     }

//     var trackLength = [];
//     for (i = 0; i < track; i++){
//       var cell = [i + 1];
//       trackLength.push(cell);
//     }

//     var cellIds = [];
//     for (i = 0; i < track; i++){
//       var cell = [i + 1];
//       cellIds.push(cell);
//     }

//     // get div to insert table
//     var container = document.getElementById("centered-content");
//     // create table element
//     var table = document.createElement("table");
//     // loop num_players to create rows
//     for (i = 0; i < num_players.length; i++){
//         var row = document.createElement("tr");
//         // append row to table
//         table.appendChild(row);
//         // loop rows
//         for (j = 0; j < trackLength.length; j++){
//             var cell = document.createElement("td");
//             row.appendChild(cell);
//         }
//     }
//     container.appendChild(table);

//     // Assign IDs to rows and cells //
//     var rows = document.getElementsByTagName("tr");
//     // traverse rows //
//     for (i = 0; i < game_players; i++) {
//         rowId = "stripPlayer:" + playerIds[i];
//         rows[i].id = rowId;
//         var cells = rows[i].getElementsByTagName("td");
//         // traverse columns //
//         for (j = 0; j < cells.length; j++) {
//             cells[j].id = "player:" + playerIds[i] + " " + "cell:" + cellIds[j];
//         }
//     }

//     for (i = 0; i < game_players; i++){
//         var cells = rows[i].getElementsByTagName("td");
//         for (j = 0; j < cells.length; j++) {
//             cells[0].className = "active";
//         }
//     }

// }

// function start_game() {

//     if (activeGame === false){
//         activeGame = true;

//         clear_all();

//         boardSetup();
//         var ship = document.getElementById("ship");
//         ship.style.backgroundImage="url('images/ship-t.png')";

//         var sub = document.getElementById("sub");
//         sub.style.backgroundImage="url('images/submarine-t.png')";

//         document.addEventListener("keyup", keyUsed);

//     }

//     else {
//         //
//     }
// }

// // ++++++++++++++++ Canvas +++++++++++++++++++++++++++ //

// var beeCanvas = document.getElementById("beeCanvas");
// var beeCtx = beeCanvas.getContext("2d");

// var x = 100;
// var y = 100;


// setInterval (function() {
//     beeCtx.clearRect(0, 0, 300, 300);
//     //ctx.fillRect(position, 0, 20, 20)

//     // position++;
//     // if (position > 200) {
//     //     position = 0;
//     //}

//     drawBee(x, y);
//     x = update(x);
//     y = update(y);

//     beeCtx.strokeRect(0, 0, 300, 300);
// }, 30);


// var BeeCircle = function (x, y, radius, fillCircle) {
//     beeCtx.beginPath();
//     beeCtx.arc(x, y, radius, 0, Math.PI * 2, false);
//     if (fillCircle) {
//         beeCtx.fill();
//     } else {
//         beeCtx.stroke();
//     }
// };

// var drawBee = function(x, y) {
//     beeCtx.lineWidth = 2;
//     beeCtx.strokeStyle = "Black";
//     beeCtx.fillStyle = "Gold";

//     BeeCircle(x, y, 8, true);
//     BeeCircle(x, y, 8, false);
//     BeeCircle(x-5, y-11, 5, false);
//     BeeCircle(x + 5, y -11, 5, false);
//     BeeCircle(x-2, y-1, 2, false);
//     BeeCircle(x+2, y-1, 2, false);
// };

// var update = function(coordinate) {
//     var offset = Math.random() * 4 - 2;
//     coordinate += offset;

//     if (coordinate > 200) {
//         coordinate = 200;
//     }

//     if (coordinate < 0) {
//         coordinate = 0;
//     }

//     return coordinate;
// };

// // ++++++++++++++ Ball +++++++++++ //

// var ballsArray = [];

// var colors = ["Aqua", "Blue", "Brown", "Chartreuse", "Crimson", "DarkGreen",
//              "DeepPink", "Fuchsia", "Gold", "Indigo", "LightSeaGreen",
//              "Red", "SpringGreen"];

// function pickRandomColor() {
//     return colors[Math.floor(Math.random() * 13)];
// }

// // Returns a random number between min (inclusive) and max (exclusive)
// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }

// var Ball = function() {
//     this.x = ballCanvas.width / getRandomArbitrary(1, 5);
//     this.y = ballCanvas.height / getRandomArbitrary(1, 5);
//     this.xSpeed = getRandomArbitrary(-5, 5);
//     this.ySpeed = getRandomArbitrary(-5, 5);
//     this.color = pickRandomColor();
// }

// var ballCircle = function(x, y, radius, fillCircle, color) {
//     ballCtx.beginPath();
//     ballCtx.arc(x, y, radius, 0, Math.PI * 2, false);
//     if (fillCircle) {
//         ballCtx.fillStyle = color;
//         ballCtx.fill();
//     } else {
//         ballCtx.stroke();
//     }
// };

// Ball.prototype.draw = function() {
//     ballCircle(this.x, this.y, 3, true, this.color);
// };

// Ball.prototype.move = function() {
//     this.x += this.xSpeed;
//     this.y += this.ySpeed;
// };

// Ball.prototype.checkCollision = function () {
//     if (this.x < 0 || this.x > 297) {
//         this.xSpeed = -this.xSpeed;
//     }
//     if (this.y < 0 || this.y > 297) {
//         this.ySpeed = -this.ySpeed;
//     }
// };

// var ballCanvas = document.getElementById("ballCanvas");
// var ballCtx = ballCanvas.getContext("2d");


// while (ballsArray.length < 10) {
//     var ball = new Ball();
//     ballsArray.push(ball);
// }

// setInterval(function() {
//     ballCtx.clearRect(0, 0, 300, 300);
//     for (i = 0; i < ballsArray.length; i++) {
//         //console.log(ballsArray[i]);


//         ballsArray[i].draw();
//         ballsArray[i].move();
//         ballsArray[i].checkCollision();

//     }
//     ballCtx.strokeRect(0, 0, 300, 300);


// }, 30);

// // ++++++++++++++++ control canvas ++++++++++++ //
// var controlCanvas = document.getElementById("controlCanvas");
// var controlCtx = controlCanvas.getContext("2d");

// var controlWidth = controlCanvas.width;
// var controlHeight = controlCanvas.height;

// //var Control_Ball = new ControlBall();

// var keyActions = {
//     32: "stop",
//     37: "left",
//     38: "up",
//     39: "right",
//     40: "down"
// };

// var controlCircle = function(x, y, radius, fillCircle) {
//     controlCtx.beginPath();
//     controlCtx.arc(x, y, radius, 0, Math.PI * 2, false);
//     if (fillCircle) {
//         controlCtx.fill();
//     } else {
//         controlCtx.stroke();
//     }
// };

// var ControlBall = function () {
//   this.x = controlWidth / 2;
//   this.y = controlHeight / 2;
//   this.xSpeed = 0;
//   this.ySpeed = 0;
// }

// var Ball_in_control = new ControlBall();

// ControlBall.prototype.move = function() {
//     this.x += this.xSpeed;
//     this.y += this.ySpeed;

//     if (this.x <0) {
//         this.x = controlWidth;
//     } else if (this.x > controlWidth) {
//         this.x = 0;
//     } else if (this.y < 0) {
//         this.y = controlHeight;
//     } else if (this.y > controlHeight) {
//         this.y = 0;
//     }
// };

// ControlBall.prototype.draw = function() {
//     controlCircle(this.x, this.y, 10, true);
// };

// ControlBall.prototype.setDirection = function(direction) {
//     if (direction === "up") {
//         this.xSpeed = 0;
//         this.ySpeed = -5;
//     } else if (direction === "down") {
//         this.xSpeed = 0;
//         this.ySpeed = 5;
//     } else if (direction === "left") {
//         this.xSpeed = -5;
//         this.ySpeed = 0;
//     } else if (direction === "right") {
//         this.xSpeed = 5;
//         this.ySpeed = 0;
//     } else if (direction === "stop") {
//         this.xSpeed = 0;
//         this.ySpeed = 0;
//     }
// };

// setInterval(function() {
//     controlCtx.clearRect(0, 0, controlWidth, controlHeight);
//     //for (i = 0; i < ballsArray.length; i++) {
//         //console.log(ballsArray[i]);

//     Ball_in_control.draw();
//     Ball_in_control.move();
//     //Ball.checkCollision();


//     controlCtx.strokeRect(0, 0, 300, 300);
// }, 30);



// controlCanvas.addEventListener("click", function(event) {
//     console.log(event);
//     var direction = keyActions[event.keyCode];
//     Ball_in_control.setDirection(direction);
//     }
// );