function solution(n) {
    let sum = 0;
    for(let i = 0 ; i <= n; i++)
        {
            if(n % i == 0)
                {
                    console.log(i)
                    sum += i
                }
        }
    return sum;
}