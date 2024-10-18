const formatStringObj = (template, ...formatObject) => {
    let modified = template

    for(let attribute in formatObject){
        if(modified.indexOf('{' + attribute + '}')!== -1){
            modified=modified.replace('{' + attribute + '}', attribute)
        }
    }

    return modified
}

console.log(formatStringObj('I am {name} and my job is {job}', {name:'Andrei', job:'programmer'}))