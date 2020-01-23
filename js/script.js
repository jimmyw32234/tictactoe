let player = "X"
let turnNumber = 0
let booleanVar= false;

function performLogic(buttonId, tileId) {
    $(buttonId).remove()
    $(tileId).html(player)
    changePlayer();
    changeTurn();
    checkVerticalWins();
    checkHorizontalWins();
    checkDiagonalWins();
}

function changePlayer(){
    if (player==="X") {
        player = "O"; 
    } else if (player==="O") {
        player = "X";
    }
}

function changeTurn() {
    turnNumber = turnNumber + 1;
    if (turnNumber === 9) {
    $("h1").html("It's a draw!");
    }
}

function checkWin(tileId1,tileId2,tileId3) {
    if ($(tileId1).html() === player && $(tileId2).html() === player && $(tileId3).html() === player) 
        {
        $("h1").text(player + " wins!");
        booleanVar = true;
    }
}

function checkVerticalWins() {
    checkWin("#tile1", "#tile4", "#tile7"); 
    checkWin("#tile2", "#tile5", "#tile8"); 
    checkWin("#tile3", "#tile6", "#tile9");
}

function checkDiagonalWins() {
    checkWin("#tile1", "#tile5", "#tile9"); 
    checkWin("#tile3", "#tile5", "#tile7"); 
}

function checkHorizontalWins() {
    checkWin("#tile1", "#tile2", "#tile3"); 
    checkWin("#tile4", "#tile5", "#tile6"); 
    checkWin("#tile7", "#tile8", "#tile9");
}


$("#button1").click(function() {
    performLogic("#button1","#tile1");
});

$("#button2").click(function() {
    performLogic("#button2","#tile2");
});

$("#button3").click(function() {
    performLogic("#button3","#tile3");
});

$("#button4").click(function() {
    performLogic("#button4","#tile4");
});

$("#button5").click(function() {
    performLogic("#button5","#tile5");
});

$("#button6").click(function() {
    performLogic("#button6","#tile6");
});

$("#button7").click(function() {
    performLogic("#button7","#tile7");
});

$("#button8").click(function() {
    performLogic("#button8","#tile8");
});

$("#button9").click(function() {
    performLogic("#button9","#tile9");
});

