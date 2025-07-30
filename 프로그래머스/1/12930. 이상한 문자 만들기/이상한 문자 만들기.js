function solution(s) {
    return s
        .split(" ") // 공백 기준으로 단어 나눔
        .map(word => {
            let result = "";
            for (let i = 0; i < word.length; i++) {
                result += i % 2 === 0
                    ? word[i].toUpperCase()
                    : word[i].toLowerCase();
            }
            return result; // 단어별 결과 반환
        })
        .join(" "); // 단어들을 다시 공백으로 연결
}
