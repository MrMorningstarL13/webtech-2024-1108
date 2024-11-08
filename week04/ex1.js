class ValueStream {
    #value
    #nextValue
    static #count = 0;
    constructor (value, nextValue){
        this.#value=value
        this.#nextValue=nextValue
        ValueStream.#count++
    }

    get value(){
        return this.#value
    }

    get next() {
        this.#value=this.#nextValue(this.#value)
        return this.#value
    }

    static get count() {
        return ValueStream.#count
    }    
}

class ConstantStream extends ValueStream{
    constructor (value){
        super(value, value => value)
    }
}

class SequenceStream extends ValueStream{
    constructor(value){
        super(value, value => value+1)
    }
}

const constant = new ConstantStream(5)
const sequence = new SequenceStream(3)

for (let i=0;i<10;i++){
    console.log(`value from ConstantStream ${constant.next}`)
    console.log(`value from ConstantStream ${sequence.next}`)

}

console.log(ValueStream.count)