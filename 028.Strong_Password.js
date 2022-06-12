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
 * Complete the 'minimumNumber' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING password
 */

function minimumNumber(n, password) {
    let numbers = "0123456789".split('')
    let lower_case = "abcdefghijklmnopqrstuvwxyz".split('')
    let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
    let special_characters = "!@#$%^&*()-+".split('')
    let count = 0;
    let find = {
        n: false, 
        l: false,
        u: false,
        s: false
    }
    for(let i = 0; i < n; i ++) {
        let c = password.charAt(i);
        if(!find.n && findChar(numbers, c)) {
            count ++;
            find.n = true;
        }
        if(!find.l && findChar(lower_case, c)) {
            count ++;
            find.l = true;
        }
        if(!find.u && findChar(upper_case, c)) {
            count ++;
            find.u = true;
        }
        if(!find.s && findChar(special_characters, c)) {
            count ++;
            find.s = true;
        }
    }
    
    count = 4 - count;
    
    if(n + count < 6) {
        count = 6 - n;
    }
    
    function findChar(arr, c) {
        let l = arr.length;
        for(let i = 0; i < l; i ++) {
            if(c == arr[i]) return true;
        }
        return false;
    }
    
    return count;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const password = readLine();

    const answer = minimumNumber(n, password);

    ws.write(answer + '\n');

    ws.end();
}
