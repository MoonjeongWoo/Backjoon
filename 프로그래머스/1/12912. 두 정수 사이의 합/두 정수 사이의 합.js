function solution(a, b) {
    let sum = 0;
    let max = Math.max(a,b);
    let min = Math.min(a,b);
    for(let i = min; i <= max; i++)
        {
            sum += i;
        }
    return sum
}