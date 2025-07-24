function solution(my_string, overwrite_string, s) {
    let front = my_string.slice(0, s);
    let back = my_string.slice(s + overwrite_string.length);
    return front + overwrite_string + back;
}
