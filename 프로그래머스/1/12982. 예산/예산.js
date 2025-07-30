function solution(d, budget) {
    let result = 0;
    d.sort((a, b) => a - b); // 작은 금액부터 우선 지원

    for (let i = 0; i < d.length; i++) {
        if (budget < d[i]) break;
        budget -= d[i];
        result++;
    }

    return result;
}
