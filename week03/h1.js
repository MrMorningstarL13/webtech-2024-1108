let arr = [4,8,6,12,10,2, 13, 7, 9, 5, 11]

const progressiveAverage = (array) => {
    let average = 0
    let i = 1
    for (let element of array){
        average = (((i*average)+element)/(i+1))
        console.log(average, i, element)
        i++
    }
    return average
}

console.log(progressiveAverage(arr))