const arr = [{
    name: 'Jim',
    yob: '1996'
},
{
    name: 'Ann',
    yob: '2017'
},
{
    name: 'Arnold',
    yob: '2005'
},
{
    name: 'Steven',
    yob: '2007'
},
{
    name: 'Andrew',
    yob: '2001'
},
{
    name: 'Leo',
    yob: '2003'
}]

const filterByAge = (arr, currentYear) =>{
    return arr.filter(e => {
        if((currentYear-e.yob) >= 18){
            return true
        }
        return false
    })
}

console.log(filterByAge(arr,2024))