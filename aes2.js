const CryptoJS = require("crypto-js")

const IV = "93df67a2cdf54249";
const key = "44601a6340d429e0bc2102cababd81b2";
const text = "my-text-to-encrypt";

for (var n = '', t = 0; t < 16; t++) n += 'abcdefghijklmnopqrstuvwxyz0123456789'.charAt(Math.floor(36 * Math.random()));

const ciphertext = CryptoJS.AES.encrypt(text, key, {
    iv: IV,
    mode: CryptoJS.mode.CBC,
}).toString();
var ciphered = n + ciphertext
console.log(ciphertext)
console.log(ciphered)