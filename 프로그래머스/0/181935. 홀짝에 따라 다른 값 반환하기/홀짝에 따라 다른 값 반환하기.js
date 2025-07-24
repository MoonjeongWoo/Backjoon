function solution(n) {
    if (n % 2 == 1) {
        let odd = 0;
        for (let i = 0; i <= n; i++)
            {
                if(i % 2 == 1) odd += i; 
            }
        console.log(odd)
        return odd;
    }
    else if (n % 2 == 0)
    {
        let even = 0; 
        for(let i = 0; i <= n; i++)
            {
                if (i % 2 == 0)
                    {
                        even += i**2;
                    }                             
            }
        console.log(even)
        return even;
    }
    
    return answer;
}