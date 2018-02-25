function getZerosCount(number, base) {
    var primDel = [[]];
    var delCounter = [];
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


            console.log(curNumber, primDel[k][0])
            do {
                if (curNumber % primDel[k][0] === 0) {
                    console.log('cur', curNumber)
                    delCounter[k].push(primDel[k][0]);
                    curNumber /= primDel[k][0];
                }
            }
            while (curNumber % primDel[k][0] && curNumber > 1)

        }
    }//console.log(delCounter[0].length)
}
getZerosCount(16, 8);
