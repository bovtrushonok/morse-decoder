const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let codeStr = expr;
    let decodedChar = [];
    let result = [];
    for (let i = 0; i < codeStr.length; i+=10)  {
        let codedChar = codeStr.slice(i, i+10).split('');
        for (let k = 0; k < 10; k++) {
            if(codedChar[k] == '*') decodedChar.push(' ');
            else if(codedChar[k] == 0) continue;
            else if (codedChar[k+1] == 0) {
                decodedChar.push('.');
                k++;
            }
            else {
                decodedChar.push('-');
                k++;
            }
        }
        let key = decodedChar.join('');
        if(key in MORSE_TABLE) result.push(MORSE_TABLE[key]);
        else result.push(' ');
        decodedChar = [];
    }
   
    return result.join('');
}

module.exports = {
    decode
}