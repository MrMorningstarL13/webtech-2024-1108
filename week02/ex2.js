function checkDivisible (n, divisor){
    if(n % divisor){
        return false;
    } else {
        return true;
    }
}
//0 is considered false in javascript, so here, if the number is divisible, it goes on the else branch

console.log(checkDivisible(8,2))
console.log(checkDivisible(9,2))