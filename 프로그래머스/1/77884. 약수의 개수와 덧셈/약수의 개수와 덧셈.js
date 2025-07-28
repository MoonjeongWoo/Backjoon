function solution(left, right) {
    let sum = 0;
    for (let i = left; i <= right; i++) {
        let count = 0;

        // 약수 개수 세기
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) count++;
        }

        // 약수 개수가 짝수면 더하고, 홀수면 뺌
        if (count % 2 === 0) {
            sum += i;
        } else {
            sum -= i;
        }
    }
    return sum;
}
