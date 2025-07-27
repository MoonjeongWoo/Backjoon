function solution(phone_number) {
     let hidden = phone_number
        .slice(0, -4)         // 앞부분
        .split("")            // 문자 배열로
        .map(() => "*")       // 모두 *로 변환
        .join("");            // 다시 문자열로

    let last4 = phone_number.slice(-4); // 뒤 4자리
    return hidden + last4;
}