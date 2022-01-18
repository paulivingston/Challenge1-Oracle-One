


function encriptarMsg() {
    var mensaje = document.getElementById("input-texto").value;
    document.getElementById("input-texto").value = "";
    var encMsg = mensaje.split('');
    for(var i=0; i<=encMsg.length; i++) {
        if(encMsg[i]=="a") {
            encMsg[i] = "ai";
        }else if(encMsg[i]=="e"){
            encMsg[i] = "enter";
        }else if(encMsg[i]=="i"){
            encMsg[i] = "imes";
        }else if(encMsg[i]=="o"){
            encMsg[i] = "ober";
        }else if(encMsg[i]=="u"){
            encMsg[i] = "ufat";
        } 
    }
    mensaje = encMsg.join('')
    document.getElementById("msg").value = mensaje;
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

function desencriptarMsg() {
    var mensaje = document.getElementById("input-texto").value;
    document.getElementById("input-texto").value = "";
    var encMsg = mensaje.split('');
    for(var i=0; i<=encMsg.length; i++) {
        var test = encMsg[i]+encMsg[i+1]+encMsg[i+2]+encMsg[i+3];
        if(encMsg[i]+encMsg[i+1]=="ai") {
            encMsg[i+1] = "";
        }else if(test+encMsg[i+4]=="enter"){
            encMsg[i+1] = "";
            encMsg[i+2] = "";
            encMsg[i+3] = "";
            encMsg[i+4] = "";
        }else if(test=="imes"){
            encMsg[i+1] = "";
            encMsg[i+2] = "";
            encMsg[i+3] = "";
        }else if(test=="ober"){
            encMsg[i+1] = "";
            encMsg[i+2] = "";
            encMsg[i+3] = "";
        }else if(test=="ufat"){
            encMsg[i+1] = "";
            encMsg[i+2] = "";
            encMsg[i+3] = "";
        } 
    }
    mensaje = encMsg.join('')
    document.getElementById("msg").value = mensaje;
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
    var copiedMsg = document.getElementById("msg").value;
    navigator.clipboard.writeText(copiedMsg)
    .then(() => {
        alert("Copiado!");
    })
    .catch(err => {
        alert("Ups.. Algo salio mal :(");
    })
}