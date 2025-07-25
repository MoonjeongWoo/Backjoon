function solution(arr) {
    if (arr.length === 1) return [-1];

    let min = Math.min(...arr);
    let filtered = arr.filter(x => x !== min);
    return filtered;
}
