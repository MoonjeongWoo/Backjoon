process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);

    for (let i = 0; i < b; i++) {          // 세로 b줄
        let row = '';
        for (let j = 0; j < a; j++) {      // 가로 a개 별
            row += '*';
        }
        console.log(row);
    }
});
