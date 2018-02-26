module.exports = function getZerosCount(number, base) {
var primDel = [[]];
var delCounter = [];
var lengthCounter = [];
var n = base;
var curNumber;
var i = 2;
do {
  if (n % i === 0) {
    if (primDel[primDel.length - 1].indexOf(i) === -1 && primDel[primDel.length - 1].length) {
      primDel.push([]);
    }
    primDel[primDel.length - 1].push(i);
    n /= i;
  } else {
    i++
  }
} while (n !== 1)
  for (var k = 0; k < primDel.length; k++) {
    delCounter.push([]);
    for (var j = 0; j <= number; j++) {
      curNumber = j;
      do {
        if (curNumber % primDel[k][0] === 0) {
          delCounter[delCounter.length-1].push(primDel[k][0]);
          curNumber /= primDel[k][0];
        } 
      }
      while (curNumber % primDel[k][0] === 0 && curNumber >= primDel[k][0])
        }
        }
    if(primDel.length > 1){
      for(var z = 0; z < primDel.length, z < delCounter.length; z++){
        lengthCounter.push(Math.floor(delCounter[z].length / primDel[z].length));
        lengthCounter.sort(function(a, b){return a - b;});
        return lengthCounter[0];
      }
    } else{
      return delCounter[0].length;
    }
}
