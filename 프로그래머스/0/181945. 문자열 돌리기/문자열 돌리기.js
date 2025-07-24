const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', line => {
    line.split('').forEach(ch => console.log(ch));
    rl.close();
});
