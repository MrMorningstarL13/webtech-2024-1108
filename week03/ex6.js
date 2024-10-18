const sampleArr = [{
    brand:'a',
    processor:'i7',
    ram: 16
},
{
    brand:'a',
    processor:'i5',
    ram: 32
},
{
    brand:'d',
    processor:'i7',
    ram: 16
},
{
    brand:'d',
    processor:'i5',
    ram: 32
},]

const filterObjects = (arr, searchExpr) => {
    return arr.filter(el => {
        let result = true
        Object.keys(searchExpr).forEach(key => {
            if (!el[key] || el[key] !== searchExpr[key]){
                result=false
            }
        })
        return result
    })
}

console.log(filterObjects(sampleArr, {brand: 'd', ram:16}))