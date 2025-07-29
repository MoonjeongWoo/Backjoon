function solution(s) {
    let str = s.split(" ");
    let max = Math.max(...str);
    let min = Math.min(...str);
    return min.toString() +" "+ max.toString() ;
}