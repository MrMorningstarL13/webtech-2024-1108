const text = "javascript is wonderful but fuck me it is retarded";
const dictionary = ["retarded", "fuck"];

const censor = (text, dict) => {
    const candidates = text.split(" ");

    for (let i = 0; i < candidates.length; i++) {
        for (let j = 0; j < dict.length; j++) {
            console.log(dict.size)

            if (candidates[i] === dict[j]) {
                let firstLetter = candidates[i].slice(0, 1);
                let lastLetter = candidates[i].slice(-1);
                let censorGrade = candidates[i].length - 2;
                candidates[i] = firstLetter + "*".repeat(censorGrade) + lastLetter;
            }
        }
    }
    return candidates.join(" ");
};

console.log(censor(text, dictionary));
