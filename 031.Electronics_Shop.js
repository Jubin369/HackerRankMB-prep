'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the getMoneySpent function below.
 */
function getMoneySpent(keyboards, drives, b, n, m) {
    let max = 0;
    for (var i=0; i<n; i++) {
        for (var j=0; j<m; j++) {
            if (keyboards[i] + drives[j] > max && b >= keyboards[i] + drives[j]) 
                max = keyboards[i] + drives[j];
        }
    }   
    if(max === 0) 
        return('-1')
    else
        return(max);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const bnm = readLine().split(' ');

    const b = parseInt(bnm[0], 10);

    const n = parseInt(bnm[1], 10);

    const m = parseInt(bnm[2], 10);

    const keyboards = readLine().split(' ').map(keyboardsTemp => parseInt(keyboardsTemp, 10));

    const drives = readLine().split(' ').map(drivesTemp => parseInt(drivesTemp, 10));

    /*
     * The maximum amount of money she can spend on a keyboard and USB drive, or -1 if she can't purchase both items
     */

    let moneySpent = getMoneySpent(keyboards, drives, b, n, m);

    ws.write(moneySpent + "\n");

    ws.end();
}
