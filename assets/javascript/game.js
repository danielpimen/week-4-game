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
    counter=0
    console.log(airplane1, airplane2, airplane3, airplane4)

    //on click events linked to airplanes
    $('img.airplane1').click(function airPlane1() {
    	
    	counter = counter + airplane1;
    	$('h5.guessNumber').html(counter);
    	if (counter==computerRandom){
    		alert('You Win');
    		startGame();
    		wins ++;
    	}
    	else if (counter > computerRandom){
    		alert('You Lose');
    		startGame();
    		losses ++;
    	}



    })

    $('img.airplane2').click(function airPlane2() {
        counter = counter + airplane2;
    	$('h5.guessNumber').html(counter);
    	if (counter==computerRandom){
    		alert('You Win');
    		startGame();
    		wins ++;
    	}
    	else if (counter > computerRandom){
    		alert('You Lose');
    		startGame();
    		losses ++;
    	}
    })
    $('img.airplane3').click(function airPlane3() {
        counter = counter + airplane3;
    	$('h5.guessNumber').html(counter);
    	if (counter==computerRandom){
    		alert('You Win')
    		startGame();
    		wins ++;
    	}
    	else if (counter > computerRandom){
    		alert('You Lose');
    		startGame();
    		losses ++;
    	}
    })
    $('img.airplane4').click(function airPlane4() {
        counter = counter + airplane4;
    	$('h5.guessNumber').html(counter);
    	if (counter==computerRandom){
    		startGame();
    		alert('You Win');
    		wins ++;
    	}
    	else if (counter > computerRandom){
    		alert('You Lose');
    		startGame();
    		losses ++;
    	};
    })




})



//change value of player number
//if playernumber = computer number, win, reset
//if over, lose, reset
//reset, give number numbers for everything 
//ref startGame