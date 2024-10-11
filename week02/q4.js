let arrMerge = (arr1, arr2) => {
    if(arr1.length !== arr2.length){
        return null
    }

    let finalArr = []
    for(let i=0; i<arr1.length;i++){
        finalArr.push(arr1[i])
        finalArr.push(arr2[i])
    }
    return finalArr
}

// let arrMerge = (arr1, arr2) => {
//     if(arr1.length !== arr2.length){
//         return null
//     }

//     return [...arr1,...arr2]
// }
// ^^ this just merges the arrays

console.log(arrMerge([1,2,3],[4,5,6]))
console.log(arrMerge([1,2,3,7],[4,5,6]))