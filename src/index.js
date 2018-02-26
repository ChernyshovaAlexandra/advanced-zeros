module.exports = function getZerosCount(number, base) {
    var primDel = [[]];
    var dev = [0];
    var n = base;
    var i = 2;
    var j = number;

    do {
        if (n % i === 0) {
            if (primDel[primDel.length - 1].indexOf(i) === -1 && primDel[primDel.length - 1].length) {
                primDel.push([]);
                dev.push(0);
            }
            primDel[primDel.length - 1].push(i);
            n /= i;
        } else {
            i++
        }
    } while (n !== 1);

    for(var k = 0, max = primDel.length - 1; k <= max; k++){
        var del = primDel[k][0];
        j = number;
        while(j >= 2){
            var min = j;
            if(!(min % del)){
                while(!(min % del)){
                    dev[k] +=  1;
                    min /= del;
                }
                j -= del;
            } else {
                j--
            }
        }
    }
    for(var d  = primDel.length -  1; d > 0; d--){
        dev[d] = Math.round(dev[d] / primDel[d].length);
    }

    dev = dev.sort(function(a,b){return a - b})[0];
    return dev
};
