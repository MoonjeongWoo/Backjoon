function solution(s1, s2) {
    let count = 0;
    s1.forEach((element) => {
        
        s2.forEach((a) => {            
            if (element == a)
                count ++;
        })        
    })
    return count;
}