function encryptMsg() {
    console.time('timerName');
    let encrypted = document.getElementById("input-text").value;
    document.getElementById("input-text").value = "";

    encrypted = encrypted.replace(/e/g, "enter");
    encrypted = encrypted.replace(/i/g, "imes");
    encrypted = encrypted.replace(/a/g, "ai");
    encrypted = encrypted.replace(/o/g, "ober");
    encrypted = encrypted.replace(/u/g, "ufat");

    document.getElementById("output-text").value = encrypted;
    console.timeEnd('timerName');
}

/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

function decryptMsg() {
    console.time('timerName');
    let decrypted = document.getElementById("input-text").value;
    document.getElementById("input-text").value = "";
    decrypted = decrypted.replace(/enter/g, "e");
    decrypted = decrypted.replace(/imes/g, "i");
    decrypted = decrypted.replace(/ai/g, "a");
    decrypted = decrypted.replace(/ober/g, "o");
    decrypted = decrypted.replace(/ufat/g, "u");
    document.getElementById("output-text").value = decrypted;
    console.timeEnd('timerName');
}

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

function copy(){
    let copiedMsg = document.getElementById("output-text").value;
    navigator.clipboard.writeText(copiedMsg)
    .then(() => {
        alert("Copiado!");
    });
}