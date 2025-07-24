function solution(numer1, denom1, numer2, denom2) {
    // 분수 합치기
    let numer = numer1 * denom2 + numer2 * denom1;
    let denom = denom1 * denom2;

    // 최대공약수 함수 (유클리드 호제법)
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }

    // 최대공약수로 나누기 (기약분수)
    let divisor = gcd(numer, denom);

    return [numer / divisor, denom / divisor];
}
