function solution(absolutes, signs) {
    let sum = 0;
    for (let i = 0; i < absolutes.length; i++) {
        sum += signs[i] ? absolutes[i] : -absolutes[i];
    }
    return sum;
}
