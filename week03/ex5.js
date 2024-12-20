const sampleDictionary = ['the', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

const sampleText = `
  best
  read
  on
  windy
  nights
`

const checkAcrostic = (text, dictionary) => {
    const candidate = text.split("\n").filter(el=>el).map(el => el.trim()).map(el => el[0]).join('')
    console.log(candidate)
    return dictionary.indexOf(candidate) !== -1
}

console.log(checkAcrostic(sampleText, sampleDictionary))