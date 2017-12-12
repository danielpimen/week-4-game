//on screen load, wins/losses = 0
var wins = 0;
var losses = 0;
//var airplane1 = Math.floor(Math.random() * 12) + 1;
//var airplane2 = Math.floor(Math.random() * 12) + 1;
//var airplane3 = Math.floor(Math.random() * 12) + 1;
//var airplane4 = Math.floor(Math.random() * 12) + 1;


//function startGame
//random computer/player number

$(document).ready(function startGame() {
    var computerRandom = Math.floor(Math.random() * 120) + 60;
    $('h5.computerNumber').html(computerRandom);
    var playerRandom = Math.floor(Math.random() * 50) + 10;
    $('h5.guessNumber').html(playerRandom);
    var airplane1 = Math.floor(Math.random() * 12) + 1;
    var airplane2 = Math.floor(Math.random() * 12) + 1;
    var airplane3 = Math.floor(Math.random() * 12) + 1;
    var airplane4 = Math.floor(Math.random() * 12) + 1;

    //give airplanes random values

    counter = playerRandom + 0;
    console.log(airplane1, airplane2, airplane3, airplane4)

    //on click events linked to airplanes

    
    $('img.airplane1').click(function airPlane1() {

        counter = counter + airplane1;
        $('h5.guessNumber').html(counter);
        if (counter == computerRandom) {
            alert('You Win');
            win();

        } else if (counter > computerRandom) {
            alert('You Lose');
            lose();

        }



    })

    $('img.airplane2').click(function airPlane2() {
        counter = counter + airplane2;
        $('h5.guessNumber').html(counter);
        if (counter == computerRandom) {
            alert('You Win');
            win();

        } else if (counter > computerRandom) {
            alert('You Lose');
            lose();

        }
    })
    $('img.airplane3').click(function airPlane3() {
        counter = counter + airplane3;
        $('h5.guessNumber').html(counter);
        if (counter == computerRandom) {
            alert('You Win')
            win();

        } else if (counter > computerRandom) {
            alert('You Lose');
            lose();

        }
    })
    $('img.airplane4').click(function airPlane4() {
        counter = counter + airplane4;
        $('h5.guessNumber').html(counter);
        if (counter == computerRandom) {
            win();
            alert('You Win');

        } else if (counter > computerRandom) {
            alert('You Lose');
            lose();

        };
    })

    function restartGame() {

        //give airplanes random values
        //var airplane1 = Math.floor(Math.random() * 12) + 1;
        //var airplane2 = Math.floor(Math.random() * 12) + 1;
        //var airplane3 = Math.floor(Math.random() * 12) + 1;
        //var airplane4 = Math.floor(Math.random() * 12) + 1;
       console.log('it works');
        //counter = playerRandom + 0;
        startGame();


    }

    function win() {
        wins++,
        $('.instructionText1').text('Wins: ' + wins);

        console.log('hello');
        restartGame();
    }

    function lose() {

        losses++;
        $('.instructionText2').text('Losses: ' + losses);
        console.log('hello');
        restartGame();
    }


})



//change value of player number
//if playernumber = computer number, win, reset
//if over, lose, reset
//reset, give number numbers for everything 
//ref startGame