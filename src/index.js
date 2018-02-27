module.exports = function getZerosCount(number, base) {
  let primDel = []; 
  let dev = [];
  let primDelCounter; 
  let zerosCounter = [];
  let n = base; 
  let k, i, counter, cur;
 

  i = 2;
  do {
    if (n % i === 0) {
      primDel.push(i);
      n /= i;
    } else {
      i++
    }
  } while (n !== 1);
  dev = primDel.filter((val,ind,arr) => arr.indexOf(val) === ind);
  for(let l = 0; l < dev.length; l ++){
    primDelCounter = 0;
    for(let m = 0; m < primDel.length; m++){
      if(primDel[m] === dev[l]){
        primDelCounter++;
      }
    }
    counter = 0;
    cur = 0;
    k = 1;
    while (true){
      cur = Math.floor(number / Math.pow(dev[l], k));
      if(cur > 0){
        counter += cur;
        k++;
      } else{
        break;
      }

    }
    zerosCounter.push(Math.floor(counter / primDelCounter));
  }

  zerosCounter.sort(function(a, b){return a - b});
  return zerosCounter[0];
}
