'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
    let objSockPair = {}
    ar.map((element)=>{
        if(objSockPair[element]){
            objSockPair[element]++
        }else{
            objSockPair[element] = 1
        }
    })
    return Object.keys(objSockPair).reduce((previousVal,key)=>{
        if((objSockPair[key]/2)>=1){
            return previousVal + parseInt(objSockPair[key]/2)
        }else{
            return previousVal
        }
    },0)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = sockMerchant(n, ar);
    
    console.log(result)

    ws.write(result + '\n');

    ws.end();
}
