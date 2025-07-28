function solution(a, b) {
     let str1 = Number(a.toString() + b.toString());
     let mulx = 2*a*b;
     return str1 > mulx ? str1 : mulx
    
}