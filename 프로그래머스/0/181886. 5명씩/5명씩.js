function solution(names) {
  return names
    .map((_, i) => i % 5 === 0 ? names[i] : null)  // 5명 단위로만 추출
    .filter(name => name !== null);               // null 제거
}
