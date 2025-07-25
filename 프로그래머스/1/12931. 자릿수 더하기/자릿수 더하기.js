function solution(n)
{
    let str = n.toString().split("");
    
    let sum = 0;
    let answer = str.map((i)=>{
        sum += Number(i) 
    })
    return sum
}