function solution(arr, divisor) {
    let array = []; 
    arr.map((element) => {
         if(element % divisor == 0)
         array.push(element);         
     })
    
    if(array.length === 0)
        {
            return [-1]
        }
    else return array.sort((a,b) => a-b)
}