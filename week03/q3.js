const formatStringObj = (template, formatObject) => {
    let modified = template

    Object.keys(formatObject).forEach((key)=>{
        let placeholder = `{${key}}`;
        modified=modified.split(placeholder).join(formatObject[key])
    })

    return modified
}

console.log(formatStringObj('I am {name} and my job is {job}', {name:'Andrei', job:'programmer'}))