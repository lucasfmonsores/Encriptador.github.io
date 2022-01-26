function btnEncriptar (){
    let encriptar = document.getElementById("input-texto").value;
    let encriptado = encriptar.replace(/e/ig, "enter"). replace(/i/ig, "imes").replace(/a/ig, "ai").replace(/o/ig, "ober").replace(/u/ig, "ufat");
    document.getElementById("msg").value = encriptado;
    document.getElementById("input-texto").value=" ";
    document.getElementById("msg-mod").innerHTML = "Encriptado! ";
}

function btnDesencriptar(){
    let desencriptar = document.getElementById('input-texto').value;
    let desencriptado = desencriptar.replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ai/gi, 'a').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
    document.getElementById("msg").value = desencriptado
    document.getElementById("input-texto").value=" ";
    document.getElementById("msg-mod").innerHTML = "Desencriptado! ";
}

function btnCopiar(){
    const mensajeCopiado = document.getElementById("msg");
    mensajeCopiado.select();
    document.execCommand("copy");
    document.getElementById("msg").value=" ";
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

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/