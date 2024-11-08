import crypto from 'crypto-js'

let message = "i am a secret message"

console.log('Encrypted')

const encrypted = crypto.AES.encrypt(message, 'super-mega-ultra-secret')
console.log(encrypted.toString())

console.log('Decrypted')
const decrypted  = crypto.AES.decrypt(encrypted, 'super-mega-ultra-secret')
console.log(decrypted.toString(crypto.enc.Utf8))