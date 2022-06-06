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
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
  var belowSeaLevel = false;
  var level = 0;
  var valleysHiked = 0;
  for (let i = 0; i < steps; i += 1) {
    // Adjust current level of hike
    if (path.charAt(i) === 'D') {
      level -= 1;
    } else {
      level += 1;
    }
    if (level < 0) {
      belowSeaLevel = true;
    }
    if (belowSeaLevel && level === 0) {
      valleysHiked += 1;
      belowSeaLevel = false;
    }
  }
  return(valleysHiked);

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const steps = parseInt(readLine().trim(), 10);

    const path = readLine();

    const result = countingValleys(steps, path);

    ws.write(result + '\n');

    ws.end();
}
