$(document).ready(function () {
    console.log("ready!");

    //reset game
    function resetGame() {
        computerGenerator = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        $("#randomNumber").html('Computer Number: ' + computerGenerator);
        quartzValue = 1 + Math.floor(Math.random() * ((12 - 1) + 1));
        purpleValue = 1 + Math.floor(Math.random() * ((12 - 1) + 1));
        opalValue = 1 + Math.floor(Math.random() * ((12 - 1) + 1));
        azuriteValue = 1 + Math.floor(Math.random() * ((12 - 1) + 1));
        currentScore = 0;
        $("#currentSum").html(currentScore);
        console.log(computerGenerator);
    };


    //score counter
    var wins = 0;
    var losses = 0;
    var currentScore = 0;
    var gemSums = 0;

    // computer variable
    var computerGenerator = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $("#randomNumber").html('Computer Number: ' + computerGenerator);
    console.log(computerGenerator);

    //on click events


    var azuriteValue = 1 + Math.floor(Math.random() * ((12 - 1) + 1));
    $("#azurite").on("click", function () {
        currentScore += azuriteValue;
        $("#currentSum").html(currentScore);
        console.log(azuriteValue);
        console.log(currentScore);
        if (currentScore === computerGenerator) {
            alert('You win');
            wins++;
            $("#wins").html(' Wins: ' + wins);
            resetGame();
        }
        else if (currentScore > computerGenerator) {
            alert('You Lost');
            losses++;
            $("#losses").html('Losses: ' + losses);
            resetGame();
        }

    });


    var opalValue = 1 + Math.floor(Math.random() * ((12 - 1) + 1));
    $("#opal").on("click", function () {
        currentScore += opalValue;
        $("#currentSum").html(currentScore);
        console.log(opalValue);
        console.log(currentScore);
        if (currentScore === computerGenerator) {
            alert('You win');
            wins++;
            $("#wins").html(' Wins: ' + wins);
            resetGame();
        }
        else if (currentScore > computerGenerator) {
            alert('You Lost');
            losses++;
            $("#losses").html('Losses: ' + losses);
            resetGame();
        }
    });


    var purpleValue = 1 + Math.floor(Math.random() * ((12 - 1) + 1));
    $("#purple").on("click", function () {
        currentScore += purpleValue;
        $("#currentSum").html(currentScore);
        console.log(purpleValue);
        console.log(currentScore);
        if (currentScore === computerGenerator) {
            alert('You win');
            wins++;
            $("#wins").html(' Wins: ' + wins);
            resetGame();
        }
        else if (currentScore > computerGenerator) {
            alert('You Lost');
            losses++;
            $("#losses").html('Losses: ' + losses);
            resetGame();
        }
    });


    var quartzValue = 1 + Math.floor(Math.random() * ((12 - 1) + 1));
    $("#quartz").on("click", function () {
        currentScore += quartzValue;
        $("#currentSum").html(currentScore);
        console.log(quartzValue);
        console.log(currentScore);
        if (currentScore === computerGenerator) {
            alert('You win');
            wins++;
            $("#wins").html(' Wins: ' + wins);
            resetGame();
        }
        else if (currentScore > computerGenerator) {
            alert('You Lost');
            losses++;
            $("#losses").html('Losses: ' + losses);
            resetGame();
        }
    });


});