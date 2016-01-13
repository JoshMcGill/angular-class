var goombaCaught = document.getElementById('goombaCaught').innerHTML;
var goombaCost = document.getElementById('goombaCost').innerHTML;
var bombCaught = document.getElementById('bombCaught').innerHTML;
var bombCost = document.getElementById('bombCost').innerHTML;
var cheepCaught = document.getElementById('cheepCaught').innerHTML;
var cheepCost = document.getElementById('cheepCost').innerHTML;

var goombaCombined = parseInt(goombaCaught) * parseInt(goombaCost);
var bombCombined = parseInt(bombCaught) * parseInt(bombCost);
var cheepCombined = parseInt(cheepCaught) * parseInt(cheepCost);
console.log(bombCombined);
console.log(goombaCombined);
console.log(cheepCombined);

var finalCost = goombaCombined + bombCombined + cheepCombined;
console.log(totalCost);

document.getElementById('totalPrice').innerHTML = finalCost;
