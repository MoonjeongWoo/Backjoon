function solution(a, b) {
    let str1 = a.toString() + b.toString()
    let str2 = b.toString() + a.toString()
    
    return Number(str1) > Number(str2) ? Number(str1):Number(str2)   
}