function map(arr, t) {
    const results = []
    for(const element of arr){
        results.push(t(element))
    }
    return results
}

const sampleArr = [1,2,3]
console.log(map(sampleArr, el => el ** 3))