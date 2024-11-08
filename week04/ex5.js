function f(arr, obj, str){
    if(!Array.isArray(arr)){
        throw new Error("Not an array!")
    }
    if(typeof(obj) !== 'object' || !('type' in obj)){
        throw new Error("Not the right object!")
    }
    if(!(typeof str === 'string' || str instanceof String)){
        throw new Error("Can I have a string?")
    }
    console.log('function ran')
}

try{
    // f({}, {type:'sometype'}, "wtf")
    // f([], {}, "wtf")
    // f([], {type:'sometype'}, 3)
    f([], {type:'sometype'}, "wtf")



} catch(err){
    console.log(err)
}