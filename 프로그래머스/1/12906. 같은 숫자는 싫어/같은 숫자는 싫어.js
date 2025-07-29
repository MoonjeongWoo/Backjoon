function solution(arr) {
    let answer = arr.reduce((acc, _, index) => {
        if (acc[acc.length - 1] !== arr[index]) {
            acc.push(arr[index]);
        }
        return acc;
    }, []);  // ✅ 초기값을 []로!
    return answer
}
