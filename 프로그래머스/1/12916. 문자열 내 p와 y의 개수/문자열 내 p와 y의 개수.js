function solution(s){
    let p = 0;
    let y = 0;
    let str = s.toLowerCase().split("");
    str.filter((x) => {
        if(x == "p") p++
        else if (x =="y") y++
    })
    
    if ( p == y )
        return true;
    else return false 
    
    
    
}