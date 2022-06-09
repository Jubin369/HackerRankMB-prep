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
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s, k, n) {
     k = k % 26;
    let message = s.split("");
    let newcode = "";
    
    for (let i = 0; i < n; i++){
        //if the character is a valid letter, increase the charcode by n, and get the letter back, 
        //if it's between 65-90 or 97-122.
        let code = message[i].charCodeAt(0);
        if(65 <= code && code <= 90){
            newcode = code + (code + k > 90 ? k - 26 : k);
            message[i] = String.fromCharCode(newcode);
        }
        else if(97 <= code && code <= 122){
            newcode = code + (code + k > 122 ? k - 26 : k);
            message[i] = String.fromCharCode(newcode);
        }
    }
    
    return(message.join("").toString());

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const s = readLine();

    const k = parseInt(readLine().trim(), 10);

    const result = caesarCipher(s, k, n);

    ws.write(result + '\n');

    ws.end();
}
