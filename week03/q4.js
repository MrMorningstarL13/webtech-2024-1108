function reduceLeft(arr, expr, initialAcc=0){
    let acc = initialAcc
    for(const el of arr){
        acc = expr(acc, el)
    }
    return acc
}

console.log(reduceLeft([1,2,3], (a, e) => a+e, 0))