function* f(n) {
    for(let i=0; i<n; i++){
        yield i;
    }
}

for (const el of f(25)){
    console.warn(el)
}