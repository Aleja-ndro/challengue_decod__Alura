const inputTexto = document.querySelector(".input-texto")
const mensaje = document.querySelector(".mensaje")

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value = textoEncriptado 
    mensaje.style.backgroundImage ="none"

}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(mensaje.value)
    mensaje.value = textoEncriptado 
    mensaje.style.backgroundImage ="none"

}
 
function encriptar(stringEncriptada){
    let matrizCodigo = [ ["e","enter"],["i","imes"],["a","ai"],
     ["o","ober"],["u","ufar"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    for( let i = 0; i < matrizCodigo.length; i++){
        if (stringEncriptada.includes (matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll
            (matrizCodigo[i][0], matrizCodigo[i][1])

        }
     }
    return stringEncriptada;    
}
function desencriptar(stringEncriptada){
    let matrizCodigo = [ ["e","enter"],["i","imes"],["a","ai"],
     ["o","ober"],["u","ufar"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    for( let i = 0; i < matrizCodigo.length; i++){
        if (stringEncriptada.includes (matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll
            (matrizCodigo[i][1], matrizCodigo[i][0])

        }
     }
    return stringEncriptada;    
}
function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
}