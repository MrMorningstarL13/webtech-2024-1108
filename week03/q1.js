let arr = [6,3,95,72,54,13]

let divisors = (arr, div) => {
    return arr.filter((e)=> {
        if(e%div===0){
            return true
        }
        return false
    })
}

console.log(divisors(arr,4))