// variables

var wins= 0;
var losses= 0;
var currentScore= 0;
var gemSums= [];
// for gem values
var crystalValue= [1,2,3,4,5,6,7,8,9,10,11,12];

function resetGame(){
    computerGenerator=Math.floor(Math.random() * (120 - 19 + 1) ) + 19;
    gemValues= 1 + Math.floor(Math.random() * ((12 - 1) + 1))
   
};
var gemValues= function(){
    return  1 + Math.floor(Math.random() * ((12 - 1) + 1));
};
console.log(gemValues());


//for random number
var computerGenerator= function(min, max){
  return  Math.floor(Math.random() * (120 - 19 + 1) ) + 19;
   
};

console.log(computerGenerator());

if (gemSums===computerGenerator){
    wins++;
    resetGame();
}
//on click event for gems
// reset function--- changes current score back to 0 changes random # changes gemstone values
//to assign random #to each gem 
//need a function to add them together= to a variable
//need to compare in if else statement for the gem stone sum value and the randomly generted comp number
// wins loss counter changes
//wins loss text push




//to ake images a button
//document.getElementById("quartz").addEventListener("click", );


