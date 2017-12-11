//on screen load, wins/losses = 0
var wins = 0;
var losses = 0;

//function startGame
//random computer/player number
$(document).ready(function startGame() {
    var computerRandom = Math.floor(Math.random() * 120) + 40;
    $('h5.computerNumber').html(computerRandom);
    var playerRandom = Math.floor(Math.random() * 50) + 10;
    $('h5.guessNumber').html(playerRandom);
    //give airplanes random values
    var airplane1 = Math.floor(Math.random() * 12) + 1;
    var airplane2 = Math.floor(Math.random() * 12) + 1;
    var airplane3 = Math.floor(Math.random() * 12) + 1;
    var airplane4 = Math.floor(Math.random() * 12) + 1;

    //on click events linked to airplanes
    $('img.airplane1').click(function airplane1() {
        alert('it works');
    })
    var airplane1Num = airplane1 - 1;
    $('img.airplane2').click(function airplane2() {
        alert('it works');
    })
    $('img.airplane3').click(function airplane3() {
        alert('it works');
    })
    $('img.airplane4').click(function airplane4() {
        alert('it works');
    })




})



//change value of player number
//if playernumber = computer number, win, reset
//if over, lose, reset
//reset, give number numbers for everything 
//ref startGame