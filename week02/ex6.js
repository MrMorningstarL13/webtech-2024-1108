function counts (str) {
    let result = {};

    for(const char of str){
        if(char in result){
            result[char]++
        } else {
            result[char]=1
        }
    }

    for(const char in result){
        result[char] = (result[char] / str.length)*100
    }

    return result
}

console.log(counts("the quick brown fox jumps over the lazy dog"))