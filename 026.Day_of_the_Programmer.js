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
 * Complete the 'dayOfProgrammer' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 */

function dayOfProgrammer(year) {
    let leap = 0; //make 1 if it is a leap year...remove a day
    if(year < 1918){
        if(year%4 === 0){leap = -1}
        return(13 + leap + ".09." + year);
    }else if(year > 1918){
        if(year%4 === 0 && year%100 !== 0 || year%400 === 0){leap = -1};
        return(13 + leap + ".09." + year);
    }else{ //case for 1918
        return("26.09.1918");
    }

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const year = parseInt(readLine().trim(), 10);

    const result = dayOfProgrammer(year);

    ws.write(result + '\n');

    ws.end();
}
