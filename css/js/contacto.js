const form = document.getElementById("form-contacto");
const estado = document.getElementById("estado");

form.addEventListener("submit", function(e){
    e.preventDefault();
    
    estado.innerText = "Formulario enviado correctamente ✔";
    estado.style.color = "#4fa6ff";

    form.reset();
});