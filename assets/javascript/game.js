//on screen load, wins/losses = 0
var wins = 0;
var losses = 0;
//var airplane1 = Math.floor(Math.random() * 12) + 1;
//var airplane2 = Math.floor(Math.random() * 12) + 1;
//var airplane3 = Math.floor(Math.random() * 12) + 1;
//var airplane4 = Math.floor(Math.random() * 12) + 1;


//function startGame
//random computer/player number

$(document).ready(function() {

    var airplane1;
    var airplane2;
    var airplane3;
    var airplane4;
    var computerRandom;
    var playerRandom;

    function startGame(){ 
    computerRandom = Math.floor(Math.random() * 120) + 60;
    console.log(computerRandom + 'computerRandom');
    $('h5.computerNumber').html(computerRandom);
    playerRandom = Math.floor(Math.random() * 50) + 10;
    console.log(playerRandom + 'playerRandom');
    $('h5.guessNumber').html(playerRandom);
    airplane1 = Math.floor(Math.random() * 12) + 1;
    airplane2 = Math.floor(Math.random() * 12) + 1;
    airplane3 = Math.floor(Math.random() * 12) + 1;
    airplane4 = Math.floor(Math.random() * 12) + 1;



    //give airplanes random values

    // var counter= playerRandom + 0;
    // var counter = 0;
    console.log('playerRandom ', playerRandom);
    console.log(airplane1, airplane2, airplane3, airplane4);

    }
    $('img.airplane1').click(function() {
        console.log('before add ap1 ', playerRandom);
        playerRandom = playerRandom + airplane1;
        console.log('after add ap1', playerRandom);
        $('h5.guessNumber').html(playerRandom);
        if (playerRandom == computerRandom) {
            alert('You Win');
            win();

        } else if (playerRandom > computerRandom) {
            alert('You Lose');
            lose();

        }



    })

    $('img.airplane2').click(function(){
        playerRandom= playerRandom + airplane2;
        $('h5.guessNumber').html(playerRandom);
        if (playerRandom== computerRandom){
            alert('You Win');
            win()
        }
        else if (playerRandom > computerRandom) {
            alert('You Lose');
            lose();
        }
    })

    $('img.airplane3').click(function(){
        playerRandom= playerRandom + airplane3;
        $('h5.guessNumber').html(playerRandom);
        if (playerRandom== computerRandom){
            alert('You Win');
            win()
        }
        else if (playerRandom > computerRandom) {
            alert('You Lose');
            lose();
        }
    })

    $('img.airplane4').click(function(){
        playerRandom= playerRandom + airplane4;
        $('h5.guessNumber').html(playerRandom);
        if (playerRandom== computerRandom){
            alert('You Win');
            win()
        }
        else if (playerRandom > computerRandom) {
            alert('You Lose');
            lose();
        }
    })

   // $('img').click(function() {
    //    var value = $(this).attr('data-value'); //30
    //})

    // $('img.airplane2').click(function airPlane2() {
    //     counter = counter + airplane2;
    //     $('h5.guessNumber').html(counter);
    //     if (counter == computerRandom) {
    //         alert('You Win');
    //         win();

    //     } else if (counter > computerRandom) {
    //         alert('You Lose');
    //         lose();

    //     }
    // })
    // $('img.airplane3').click(function airPlane3() {
    //     counter = counter + airplane3;
    //     $('h5.guessNumber').html(counter);
    //     if (counter == computerRandom) {
    //         alert('You Win')
    //         win();

    //     } else if (counter > computerRandom) {
    //         alert('You Lose');
    //         lose();

    //     }
    // })
    // $('img.airplane4').click(function airPlane4() {
    //     counter = counter + airplane4;
    //     $('h5.guessNumber').html(counter);
    //     if (counter == computerRandom) {
    //         win();
    //         alert('You Win');

    //     } else if (counter > computerRandom) {
    //         alert('You Lose');
    //         lose();

       
    //     };
    // })

    startGame();

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
        // restartGame();
        startGame();
    }

    function lose() {

        losses++;
        $('.instructionText2').text('Losses: ' + losses);
        console.log('hello');
        // restartGame();
        startGame();
    }


})



//change value of player number
//if playernumber = computer number, win, reset
//if over, lose, reset
//reset, give number numbers for everything 
//ref startGame