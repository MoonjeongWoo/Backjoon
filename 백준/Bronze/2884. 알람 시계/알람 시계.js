const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', (line) => {
    let [H, M] = line.split(' ').map(Number);

    M -= 45;
    if (M < 0) {
        M += 60;
        H -= 1;
        if (H < 0) {
            H = 23;
        }
    }
    console.log(`${H} ${M}`);
    rl.close();
});
