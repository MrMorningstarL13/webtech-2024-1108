let sampleArr = [2,3.5,7,2,3]

let totalArea = (arr) => {
    return arr.map( el=> el*el).reduce((acc,el)=> acc+el,0)
}

console.log(totalArea(sampleArr))