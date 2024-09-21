
---

# AES pwn

Author: Danilo Erazo - Reverse Everything - @revers3everything

**AES pwn** is a simple web-based tool that allows you to encode and decode data using the Advanced Encryption Standard (AES) encryption algorithm. Designed with web hacking purposes in mind, this tool helps ethical hackers and security professionals test web applications by simulating encryption and decryption processes.

---

## Features

- **AES Encryption**  
  Encrypt any string using AES with a user-provided key and IV.
  
- **AES Decryption**  
  Decrypt AES-encrypted strings to retrieve the original data.
  
- **Custom Key and IV**  
  Define your own secret key and initialization vector (IV) to test different encryption scenarios.

- **Web-Based Interface**  
  Easy-to-use interface built with JavaScript, enabling fast testing in the browser.

---

## Installation

Clone the repository:

```bash
git clone https://github.com/your-repo/aes-pwn.git
cd AES-pwn
```

This tool is designed to be run directly from the browser, so no installation is required. Simply open `index.html` in any modern web browser.

---

## Usage

### 1. AES Encryption

To encrypt a message:
1. Open the tool in your browser.
2. Enter the plain text you want to encrypt.
3. Input your desired AES key and initialization vector (IV).
4. Click the "Encrypt" button to generate the AES-encrypted output.

### 2. AES Decryption

To decrypt a message:
1. Enter the AES-encrypted message into the decryption field.
2. Input the corresponding AES key and IV used for encryption.
3. Click the "Decrypt" button to reveal the original message.

---

### Parameters
- **plainText**: The data to be encrypted.
- **key**: The secret key (must match the key length required by AES, e.g., 128-bit, 192-bit, or 256-bit).
- **iv**: The initialization vector, which must be the same length as the AES block size.

---

## Use Cases

- **Web Pentesting**: Simulate AES encryption and decryption on websites to test how secure their implementation is.
- **Security Research**: Study the impact of weak keys or misconfigured encryption on web application security.
- **CTFs (Capture The Flag)**: Use this tool to decode AES-encrypted flags or encrypt messages in hacking competitions.

---

## Legal Disclaimer

This tool is created for educational and ethical hacking purposes only. **AES pwn** should not be used on systems without explicit permission from the system owner. Unauthorized use of this tool is illegal. The author and contributors are not responsible for any illegal or unethical use of this tool.

---

Enjoy secure hacking!
