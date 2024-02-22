export default function cesarCipher (msg, shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz,.!?'
    const alphabetArr = Array.from(alphabet)
    let encryptedMsg = ""
    let lowMsg = msg.toLowerCase()  
    
    for (let i = 0; i < msg.length; i++) {
        if (lowMsg[i] == " ") {
            encryptedMsg += " "
        } else {  
            let index = alphabetArr.findIndex((el) => el == lowMsg[i])
            let shiftedIndex =  index + shift
            if (shiftedIndex > 30) shiftedIndex -= 30
            encryptedMsg += alphabet[shiftedIndex]
        }
    }   
    return encryptedMsg.toUpperCase()   
}

