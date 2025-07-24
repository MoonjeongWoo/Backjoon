function solution(num_list) {
    if(num_list.length >= 11 )
        {
            let sum = 0;            
            num_list.forEach((element) =>  {
                sum += element
            });
            
            console.log(sum);
            return sum;
        }
    else if (num_list.length <= 10)
        {
            let multi =1 ;
            num_list.forEach((element) => {
                multi *= element    
            });
            console.log(multi);
            return multi;
        }
    
}