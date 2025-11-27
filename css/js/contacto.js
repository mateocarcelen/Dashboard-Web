document.getElementById("formContacto").addEventListener("submit", function (event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const mensaje = document.getElementById("mensaje").value;

    if (nombre === "" || correo === "" || mensaje === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    alert("Formulario enviado con éxito :3");
    this.reset();
});
