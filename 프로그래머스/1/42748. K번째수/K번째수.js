function solution(array, commands) {
    let answer = [];
    commands.forEach((value,index)=>{
         let sliced = array.slice(value[0]-1,value[1]);
         let sorted = sliced.sort((a,b)=> a-b);
         answer.push(sorted[value[2] - 1])
    })
    return answer
}