//$(document).ready(function){
// variables

var wins = 0;
var losses = 0;
var currentScore = 0;

//var gemSums = [];
// for gem values
var crystalValue = 1 + Math.floor(Math.random() * ((12 - 1) + 1));
var azuriteValue = 1 + Math.floor(Math.random() * ((12 - 1) + 1));
/*var opalValue = 1 + Math.floor(Math.random() * ((12 - 1) + 1));
var purpleValue = 1 + Math.floor(Math.random() * ((12 - 1) + 1));
var quartzValue = 1 + Math.floor(Math.random() * ((12 - 1) + 1));*/
var computerGenerator = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

console.log(computerGenerator);

$("#randomNumber").html('Computer Number: ' + computerGenerator);
for (var i= 0; i<4; i++){
    var crystalValue = 1 + Math.floor(Math.random(i) * ((12 - 1) + 1));
    console.log(crystalValue);

    var crystal= $("#quartz");
    crystal.attr ({
        "class": 'crystal',
        "data-random": crystalValue
        });
    var crystal2= $("#opal");
    crystal.attr ({
        "class": 'crystal',
        "data-random": crystalValue
        });
    $(".crystal").append(crystal);
} 

function resetGame() {
    computerGenerator = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    gemValues = 1 + Math.floor(Math.random() * ((12 - 1) + 1));
    currentScore = 0;
};

$(".crystal").on("click", function(){
 
 var number = parseInt($(this).attr('crystalValue'));
 console.log(crystalValue);
    currentScore += number; 
if (currentScore > computerGenerator){
    console.log("hi")
}
});

/*$("a#zurite").on("click", function () {
    w = azuriteValue;
    $("#currentSum").text(w);
    console.log(w);
    
});
$("#opal").on("click", function () {
    x = opalValue;
    $("#currentSum").text(x);
    console.log(x);
});
$("#purple").on("click", function () {
    y = purpleValue
    $("#currentSum").text(y);
    console.log(y);
});
$("#quartz").on("click", function () {
    z = quartzValue;
    $("#currentSum").text(z);
    console.log(z);
});
*/

//equation for adding array values

//for(var i=0; i<gemSums.length;i++) gemSums[i] = parseInt(gemSums[i], 10);
//console.log(gemSums);
//if (gemSums === computerGenerator) {
 //   wins++;
  //  resetGame();
    //} else (gemSums > computerGenerator){
    //   losses++
    //    resetGame();
    //}
    //on click event for gems
    // reset function--- changes current score back to 0 changes random # changes gemstone values
    //need a function to add them together= to a variable
    //need to compare in if else statement for the gem stone sum value and the randomly generted comp number
    // wins loss counter changes
    //wins loss text push





    /*to add gem sums?
    var a = azuriteValue;
    var o = opalValue;
    var p = purpleValue;
    var q = quartzValue;
    var x = gemSums;
    console.log(x);

    /*value for azurite
    var azuriteValue= function(){
      return  azuriteValue=  1 + Math.floor(Math.random() * ((12 - 1) + 1));
    };
    console.log(azuriteValue());
    //value for opal
    var opalValue= function(){
        return  1 + Math.floor(Math.random() * ((12 - 1) + 1));
    };
    console.log(opalValue());
    
    //value for purple
    var purpleValue= function(){
        return  1 + Math.floor(Math.random() * ((12 - 1) + 1));
    };
    console.log(purpleValue());
    
    //value for quartz
    var quartzValue= function(){
        return  1 + Math.floor(Math.random() * ((12 - 1) + 1));
    };
    console.log(quartzValue());
    
    //for random number
    var computerGenerator= function(min, max){
      return  Math.floor(Math.random() * (120 - 19 + 1) ) + 19;
       
    };
    console.log(computerGenerator());*/
//}