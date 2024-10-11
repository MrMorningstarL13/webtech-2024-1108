

const sayHello = (name) => `Hello, ${name}`

//console.log(sayHello(`Leo`))

//console.log(process.argv)

// if(process.argv.length < 3){
//     console.log("Tell me a name")
// } else {
//     console.log(sayHello(process.argv[2]))
// }

let concatenateString = (arr) => {
    let finalString="";
    for(let i=0;i<arr.length;i++){
        finalString+=arr[i]
    }
    return finalString;
}

const myArray = ["apple", "banana", "cherry"];
console.log(concatenateString(myArray))