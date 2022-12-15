'use strict';

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
let n = 3;// n is the sample input
let arr = "";
let arr1 = " ";
let col = n;

for(let i = 1; i <= n; i++) {
    for(let j = 1; j <= col-1; j++) {
        arr = arr1 + arr;
        }
    
        for(let j = 1; j <= i; j++){
            arr = arr+"#";
        }
        console.log(arr);
        arr = "";
        col--;
    }
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}
