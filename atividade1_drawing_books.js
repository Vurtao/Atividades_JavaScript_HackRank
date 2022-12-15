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


function pageCount(n, p) {

    let arr=[];
    let arrR=[];
  
        p=(p%2==1)?p-1:p;
  
    for(let i=0; i<=n; i+=2){
        arr.push(i);  
}

        arrR=[...arr];
        arrR.reverse();
  
    if(arr.indexOf(p)<arrR.indexOf(p)){
        return arr.indexOf(p);
}
    else{
        return arrR.indexOf(p);
    }   
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const p = parseInt(readLine().trim(), 10);

    const result = pageCount(n, p);

    ws.write(result + '\n');

    ws.end();
}
