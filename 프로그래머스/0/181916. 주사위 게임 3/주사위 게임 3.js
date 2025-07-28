function solution(a, b, c, d) {
    const arr = [a, b, c, d].sort((x, y) => x - y);  // 오름차순 정렬

    const [w, x, y, z] = arr;  // 예: [2, 2, 3, 3] → w=2, x=2, y=3, z=3

    // 모두 같음
    if (w === z) return 1111 * w;

    // 3개 같음 (앞 세 개 또는 뒤 세 개)
    if (w === y && y !== z) return (10 * w + z) ** 2;
    if (x === z && w !== x) return (10 * z + w) ** 2;

    // 두 쌍 같음
    if (w === x && y === z) return (w + y) * Math.abs(w - y);

    // 한 쌍만 같음 (w==x or x==y or y==z)
    if (w === x && y !== z) return y * z;
    if (x === y && w !== z) return w * z;
    if (y === z && w !== x) return w * x;

    // 전부 다 다름
    return w;
}
