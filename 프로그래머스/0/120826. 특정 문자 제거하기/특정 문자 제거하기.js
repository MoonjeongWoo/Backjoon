function solution(my_string, letter) {
        return str = my_string.split("").filter((x)=>{
            return x != letter
        }).join("");
        
}