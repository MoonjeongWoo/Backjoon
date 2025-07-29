function solution(s, count = 0, removed = 0) {
    if (s === "1") return [count, removed];

    const zeroCount = s.split("0").length - 1;
    removed += zeroCount;

    const next = s.replace(/0/g, "").length.toString(2);
    return solution(next, count + 1, removed);
}
