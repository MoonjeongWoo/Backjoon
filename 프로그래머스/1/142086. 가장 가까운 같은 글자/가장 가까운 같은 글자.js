function solution(s) {
    let str = s.split("");
    let arr = [];
    for (let i = 0; i < s.length; i++) {
    let found = false;
    for (let j = i - 1; j >= 0; j--) {
        if (str[i] === str[j]) {
            arr.push(i - j);
            found = true;
            break;
        }
    }
    if (!found) arr.push(-1);
}
    return arr

}