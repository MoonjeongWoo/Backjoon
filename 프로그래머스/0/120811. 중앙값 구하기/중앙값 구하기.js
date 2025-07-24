function solution(array) {
    array.sort((a,b) => b-a);
    let median = Math.floor(array.length/2);
    return array[median]
}