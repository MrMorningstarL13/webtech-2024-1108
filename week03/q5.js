const text = "javascript is wonderful"
const dictionary = ['javascript']

const censor = (txt, dict) => {
    const candidates = text.split(" ")

    for(let i=0;i<candidates.length;i++){
        if(candidates[i]===dict[i]){
            let firstLetter = candidates[i].slice(0,1)
            let lastLetter = candidates[i].slice(0,-1)
            let censorGrade = candidates.length
            candidates[i]=firstLetter+ "*".repeat(censorGrade) +lastLetter
        }
    }
    return candidates.join(" ")
}

console.log(censor(text, dictionary))