var randomNumber = Math.floor(Math.random()*102)+19;
var crystal01 = Math.floor(Math.random()*12)+1;
var crystal02 = Math.floor(Math.random()*12)+1;
var crystal03 = Math.floor(Math.random()*12)+1;
var crystal04 = Math.floor(Math.random()*12)+1;
var winCount = 0;
var lossCount = 0;
var totalScore = 0;
var message = "";



$(document).ready(function() {

    $("#randomnum").text(randomNumber);
    console.log (randomNumber);

    $("#crystal01").on("click", function() {
        totalScore += crystal01;
        toUpdate();
        console.log (totalScore);

    });

    $("#crystal02").on("click", function(event) {
        totalScore += crystal02;
        toUpdate();
        console.log (totalScore);

    });

    $("#crystal03").on("click", function(event) {
        totalScore += crystal03;
        toUpdate();
        console.log (totalScore);

    });

    $("#crystal04").on("click", function(event) {
        totalScore += crystal04;
        toUpdate();
        console.log (totalScore);

    });
});


function toUpdate() {
    $("#score").text(totalScore);
    if (totalScore === randomNumber) {
        winCount ++;
        $("#wincount").text(winCount);
        $("#message").html("<p>You Won! </P>");
        reset ();

    }
    
    else if (totalScore > randomNumber) {
        lossCount ++;
        $("#losscount").text(lossCount);
        $("#message").html("<p>You Lost! </P>");
        reset ();
    }

    
}


function reset() {
    totalScore = 0;
    randomNumber = Math.floor(Math.random()*102)+19;
    crystal01 = Math.floor(Math.random()*12)+1;
    crystal02 = Math.floor(Math.random()*12)+1;
    crystal03 = Math.floor(Math.random()*12)+1;
    crystal04 = Math.floor(Math.random()*12)+1;
    $("#randomnum").text(randomNumber);
    $("#score").text(totalScore);
}



