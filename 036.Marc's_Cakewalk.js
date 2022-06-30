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
 * Complete the 'marcsCakewalk' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY calorie as parameter.
 */

function marcsCakewalk(calorie) {
    let miles = 0;
  
  calorie.sort(function(a,b){
    return b - a;
  });
  
  for(let i = 0; i < calorie.length; i++){
    miles = miles + ((2**i)*calorie[i]);
  }
  
  return miles;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const calorie = readLine().replace(/\s+$/g, '').split(' ').map(calorieTemp => parseInt(calorieTemp, 10));

    const result = marcsCakewalk(calorie);

    ws.write(result + '\n');

    ws.end();
}
