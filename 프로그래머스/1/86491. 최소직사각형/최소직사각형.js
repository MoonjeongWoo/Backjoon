function solution(sizes) {
    let w = 0; // 가로의 최대값
    let h = 0; // 세로의 최대값
    for(let i = 0; i < sizes.length; i++){
        // 명함을 회전시켜서 항상 더 큰 값을 가로로 맞춤
        let [big, small] = sizes[i][0] > sizes[i][1] ? [sizes[i][0], sizes[i][1]] : [sizes[i][1], sizes[i][0]];
        if(big > w) w = big;
        if(small > h) h = small;
    }
    return w * h;
}
