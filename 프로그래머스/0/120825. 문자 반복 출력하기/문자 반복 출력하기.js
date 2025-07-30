function solution(my_string, n) {
    let str = my_string
        .split("")
        .map(x => x.repeat(n))  // n번 반복
        .join("");
    return str;
}
