const CryptoJS = require("crypto-js")
const x0 = CryptoJS;

function encrypt(e) {
    let r = 'GyGcHDHS345678Dx';
    let o = 'FGJc677dcDDccddW';
    let s = x0.enc.Utf8.parse(r);
    let a = x0.enc.Utf8.parse(o);
    let encrypted = x0.AES.encrypt(JSON.stringify(e), s, {
        iv: a
    });
    return encrypted.toString(); // Return the ciphertext as a string
}

function decrypt(ciphertext) {
    let r = 'GyGcHDHS345678Dx';
    let o = 'FGJc677dcDDccddW';
    let s = x0.enc.Utf8.parse(r);
    let a = x0.enc.Utf8.parse(o);
    let decrypted = x0.AES.decrypt(ciphertext, s, {
        iv: a
    });
    return JSON.parse(decrypted.toString(x0.enc.Utf8)); // Convert the byte array back to a string and parse it as JSON
}

// Example usage
let encryptedData = encrypt("9090909090");
//console.log("Encrypted:", encryptedData);

let decryptedData = decrypt("mmgD3ta0d/pgzoslyUfUUQ==");
console.log("Decrypted:", decryptedData);
