function winDetector() {
  if (JSON.stringify(winArrayX) == JSON.stringify([1, 1, 1, 0, 0, 0, 0, 0, 0])){
    alert("X wins!");
  } else if (JSON.stringify(winArrayX) == JSON.stringify([0, 0, 0, 1, 1, 1, 0, 0, 0]))  {
    alert("X wins!");
  } else if (JSON.stringify(winArrayX) == JSON.stringify([0, 0, 0, 0, 0, 0, 1, 1, 1]))  {
    alert("X wins!");
  } else if (JSON.stringify(winArrayX) == JSON.stringify([1, 0, 0, 1, 0, 1, 0, 0, 0]))  {
    alert("X wins!");
  } else if (JSON.stringify(winArrayX) == JSON.stringify([0, 1, 0, 0, 1, 0, 0, 1, 0]))  {
    alert("X wins!");
  } else if (JSON.stringify(winArrayX) == JSON.stringify([0, 0, 1, 0, 0, 1, 0, 0, 1]))  {
    alert("X wins!");
  } else if (JSON.stringify(winArrayX) == JSON.stringify([1, 0, 0, 0, 1, 0, 0, 0, 1]))  {
    alert("X wins!");
  } else if (JSON.stringify(winArrayX) == JSON.stringify([0, 0, 1, 0, 1, 0, 1, 0, 0]))  {
    alert("X wins!");
  } else if (JSON.stringify(winArrayX) == JSON.stringify([1, 0, 0, 1, 0, 0, 1, 0, 0]))  {
    alert("X wins!");
  }

  if (JSON.stringify(winArrayO) == JSON.stringify([1, 1, 1, 0, 0, 0, 0, 0, 0])){
    alert("O wins!");
  } else if (JSON.stringify(winArrayO) == JSON.stringify([0, 0, 0, 1, 1, 1, 0, 0, 0]))  {
    alert("O wins!");
  } else if (JSON.stringify(winArrayO) == JSON.stringify([0, 0, 0, 0, 0, 0, 1, 1, 1]))  {
    alert("O wins!");
  } else if (JSON.stringify(winArrayO) == JSON.stringify([1, 0, 0, 1, 0, 1, 0, 0, 0]))  {
    alert("O wins!");
  } else if (JSON.stringify(winArrayO) == JSON.stringify([0, 1, 0, 0, 1, 0, 0, 1, 0]))  {
    alert("O wins!");
  } else if (JSON.stringify(winArrayO) == JSON.stringify([0, 0, 1, 0, 0, 1, 0, 0, 1]))  {
    alert("O wins!");
  } else if (JSON.stringify(winArrayO) == JSON.stringify([1, 0, 0, 0, 1, 0, 0, 0, 1]))  {
    alert("O wins!");
  } else if (JSON.stringify(winArrayO) == JSON.stringify([0, 0, 1, 0, 1, 0, 1, 0, 0]))  {
    alert("O wins!");
  } else if (JSON.stringify(winArrayO) == JSON.stringify([1, 0, 0, 1, 0, 0, 1, 0, 0]))  {
    alert("O wins!");
  }


}

var turn = 0;

var winArrayX = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var winArrayO = [0, 0, 0, 0, 0, 0, 0, 0, 0];


var tableNum = document.getElementsByTagName('td')[0];
tableNum.addEventListener('click', function() {
  console.log("numZero was clicked");
  if (turn == 0) {
    tableNum.innerHTML = "X";
    winArrayX[0] = 1;
    turn++;
    document.getElementById("playerTurn").innerHTML = "It is O's turn";
    winDetector();
  }else if (turn == 1) {
    console.log(turn);
    tableNum.innerHTML = "O";
    winArrayO[0] = 1;
    turn--;
    document.getElementById("playerTurn").innerHTML = "It is X's turn";
    winDetector();
  }
}, {once: true});

var tableNum1 = document.getElementsByTagName('td')[1];
tableNum1.addEventListener('click', function() {
  console.log("numOne was clicked");
  console.log(turn);
  if (turn == 0) {
    tableNum1.innerHTML = "X";
    winArrayX[1] = 1;
    turn++;
    document.getElementById("playerTurn").innerHTML = "It is O's turn";
    winDetector();
  }else if (turn == 1) {
    tableNum1.innerHTML = "O";
    winArrayO[1] = 1;
    turn--;
    document.getElementById("playerTurn").innerHTML = "It is X's turn";
    winDetector();
  }
}, {once: true});

var tableNum2 = document.getElementsByTagName('td')[2];
tableNum2.addEventListener('click', function() {
  console.log("numTwo was clicked");
  console.log(turn);
  if (turn == 0) {
    tableNum2.innerHTML = "X";
    winArrayX[2] = 1;
    turn++;
    document.getElementById("playerTurn").innerHTML = "It is O's turn";
    winDetector();
  }else if (turn == 1) {
    tableNum2.innerHTML = "O";
    winArrayO[2] = 1;
    turn--;
    document.getElementById("playerTurn").innerHTML = "It is X's turn";
    winDetector();
  }
}, {once: true});



var tableNum3 = document.getElementsByTagName('td')[3];
tableNum3.addEventListener('click', function() {
  console.log("numThree was clicked");
  console.log(turn);
  if (turn == 0) {
    tableNum3.innerHTML = "X";
    winArrayX[3] = 1;
    turn++;
    document.getElementById("playerTurn").innerHTML = "It is O's turn";
    winDetector();
  }else if (turn == 1) {
    tableNum3.innerHTML = "O";
    winArrayO[3] = 1;
    turn--;
    document.getElementById("playerTurn").innerHTML = "It is X's turn";
    winDetector();
  }
}, {once: true});

var tableNum4 = document.getElementsByTagName('td')[4];
tableNum4.addEventListener('click', function() {
  console.log("numFour was clicked");
  console.log(turn);
  if (turn == 0) {
    tableNum4.innerHTML = "X";
    winArrayX[4] = 1;
    turn++;
    document.getElementById("playerTurn").innerHTML = "It is O's turn";
    winDetector();
  }else if (turn == 1) {
    tableNum4.innerHTML = "O";
    winArrayO[4] = 1;
    turn--;
    document.getElementById("playerTurn").innerHTML = "It is X's turn";
    winDetector();
  }
}, {once: true});

var tableNum5 = document.getElementsByTagName('td')[5];
tableNum5.addEventListener('click', function() {
  console.log("numFive was clicked");
  if (turn == 0) {
    tableNum5.innerHTML = "X";
    winArrayX[5] = 1;
    turn++;
    document.getElementById("playerTurn").innerHTML = "It is O's turn";
    winDetector();
  }else if (turn == 1) {
    tableNum5.innerHTML = "O";
    winArrayO[5] = 1;
    turn--;
    document.getElementById("playerTurn").innerHTML = "It is X's turn";
    winDetector();
  }
}, {once: true});

var tableNum6 = document.getElementsByTagName('td')[6];
tableNum6.addEventListener('click', function() {
  console.log("numTwo was clicked");
  console.log(turn);
  if (turn == 0) {
    tableNum6.innerHTML = "X";
    winArrayX[6] = 1;
    turn++;
    document.getElementById("playerTurn").innerHTML = "It is O's turn";
    winDetector();
  }else if (turn == 1) {
    tableNum6.innerHTML = "O";
    winArrayO[6] = 1;
    turn--;
    document.getElementById("playerTurn").innerHTML = "It is X's turn";
    winDetector();
  }
}, {once: true});

var tableNum7 = document.getElementsByTagName('td')[7];
tableNum7.addEventListener('click', function() {
  console.log("numTwo was clicked");
  console.log(turn);
  if (turn == 0) {
    tableNum7.innerHTML = "X";
    winArrayX[7] = 1;
    turn++;
    document.getElementById("playerTurn").innerHTML = "It is O's turn";
    winDetector();
  }else if (turn == 1) {
    tableNum7.innerHTML = "O";
    winArrayO[7] = 1;
    turn--;
    document.getElementById("playerTurn").innerHTML = "It is X's turn";
    winDetector();
  }
}, {once: true});

var tableNum8 = document.getElementsByTagName('td')[8];
tableNum8.addEventListener('click', function() {
  console.log("numTwo was clicked");
  console.log(turn);
  if (turn == 0) {
    tableNum8.innerHTML = "X";
    winArrayX[8] = 1;
    turn++;
    document.getElementById("playerTurn").innerHTML = "It is O's turn";
    winDetector();
  }else if (turn == 1) {
    tableNum8.innerHTML = "O";
    winArrayO[8] = 1;
    turn--;
    document.getElementById("playerTurn").innerHTML = "It is X's turn";
    winDetector();
  }
}, {once: true});

var resetButton = document.getElementById("reset");
resetButton.addEventListener('click', function() {
tableNum8.innerHTML = "";
tableNum7.innerHTML = "";
tableNum6.innerHTML = "";
tableNum5.innerHTML = "";
tableNum4.innerHTML = "";
tableNum3.innerHTML = "";
tableNum2.innerHTML = "";
tableNum1.innerHTML = "";
tableNum.innerHTML = "";
});
