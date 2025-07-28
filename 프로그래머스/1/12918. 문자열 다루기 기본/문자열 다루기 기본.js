function solution(s) {
    let str = s.split("");
    let answer = str.map((x) => isNaN(x));
    return (s.length === 4 || s.length === 6) && answer.every(v => v === false);
}
