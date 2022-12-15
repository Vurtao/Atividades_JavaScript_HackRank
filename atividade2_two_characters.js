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
 * Complete the 'alternate' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

 function alternate(s) {

    const LIMIT_ALTERNATING_CHAR = 2;
    let characters = new Set();
    let matches = new Map();
    let count = 0;
    
    for(let element of s){
        if(!characters.has(element)){
            characters.add(element);
            
            if(characters.size >= LIMIT_ALTERNATING_CHAR){
                for(let letter of characters){
                    if(element !== letter){
                        matches.set(count, letter.concat(element));
                        count++;
                    }
                }
            }   
        }
    }
    
    return verifyMapMaxSize(s, matches, characters);
}

function verifyMapMaxSize(s, mp, st) {
    let validTypes = "";
    let unvalidTypes = "";
    let text = "";
    let isValidText = null;
    let count = 0;
    let result = 0;
    
    for(let match of mp){
        validTypes =  mp.get(match[0]);
        
        unvalidTypes = [...st].join("").toString();
        for(let type of validTypes){
            unvalidTypes = unvalidTypes.replaceAll(type, "");
        }
        
        text = s;
        for(let type of unvalidTypes){
            text = text.replaceAll(type, "");
        }
        
        isValidText = null;
        count = 0;
        for(let type of text){
            if(type !== validTypes[count]){
                isValidText = false;
                break;
            }
            count = (count < (validTypes.length - 1) ? count + 1 : 0);
        }
        
        if((isValidText === null) && (result < text.length)){
            result = text.length;
        }
    }
    
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const l = parseInt(readLine().trim(), 10);

    const s = readLine();

    const result = alternate(s);

    ws.write(result + '\n');

    ws.end();
}
