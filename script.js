const inputResultado = document.getElementById('textInputSalida');


function encriptar (){
        var texto = document.querySelector("#input-texto").value;
        var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
        document.querySelector(".textInputSalida").value = textoCifrado;
        document.querySelector("#input-texto").value;
        }
    
    
        
    var boton1 = document.querySelector("#btn-encriptar"); boton1.onclick = encriptar;
    
    function desencriptar (){ var texto = document.querySelector("#input-texto").value; var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); document.querySelector(".textInputSalida").value = textoCifrado; document.querySelector("#input-texto").value;
    
    }
    
    var boton2 = document.querySelector("#btn-desencriptar"); boton2.onclick = desencriptar;

   
    //function copiar(){
       // inputResultado.select();
      //  navigator.clipboard.writeText(inputResultado.value)
     //   inputResultado.value = "";
    //    alert("Texto Copiado")
   // }

    function copy() {
        let copyText = document.querySelector("#textInputSalida");
        copyText.select();
        document.execCommand("copy");
      }
      
      document.querySelector("#btn-copiar").addEventListener("click", copy);
      