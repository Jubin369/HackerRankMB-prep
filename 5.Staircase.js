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
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    let i, j, s = 0, pattern = 0;
    for(i = 0; i < n; i++)
    {
        s = n - (i+1);
        for(j = 0; j < s; j++)
        {
            ws.write(" ");
        }
  
        pattern = i + 1;
  
        for(j = 0; j < pattern; j++)
        {
            ws.write("#");
        }
  
        ws.write("\n");
    }
    ws.end();
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}
