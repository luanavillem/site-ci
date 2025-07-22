
document.getElementById ("botao-enviar").addEventListener("click", ValidaFormulario)

function ValidaFormulario (event) {
    event.preventDefaut ();

    if(document.getElementById ("nome").value != "" && document.getElementById ("email").value != "") {
        alert ("Pronto! Você receberá o material por email")
    }else { 
        alert ("Preencha os campos de nome e email")

    }
}