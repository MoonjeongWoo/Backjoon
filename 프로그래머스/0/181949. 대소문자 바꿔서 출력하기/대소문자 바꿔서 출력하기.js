const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close', function(){
    let str = input[0];
    let result = '';

    for (let i = 0; i < str.length; i++) {
        const c = str[i];
        if (c >= 'a' && c <= 'z') {
            result += c.toUpperCase();
        } else if (c >= 'A' && c <= 'Z') {
            result += c.toLowerCase();
        } else {
            result += c; // 알파벳이 아닌 문자는 그대로
        }
    }

    console.log(result);
});
