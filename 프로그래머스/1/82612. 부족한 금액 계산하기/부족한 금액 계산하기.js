function solution(price, money, count) {
    let sum = 0;
    for(let i = 1; i<= count; i++){
        sum += price * i
    }
    let answer = money - sum
    return answer < 0 ? Math.abs(answer) : 0
}