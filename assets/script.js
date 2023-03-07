function validarDatos() {
  window.event.preventDefault();

  if (document.form.nombre.value == "") {
    alert("Nombre es obligatorio");
    document.form.nombre.focus();
  } else if (document.form.email.value == "") {
    alert("email es obligatorio");
    document.form.email.focus();
  } else if (document.form.asunto.value == "") {
    alert("asunto es obligatorio");
    document.form.asunto.focus();
  } else if (
    document.form.mensaje.value == "" ||
    document.form.mensaje.value.length <= 50
  ) {
    alert("mensaje es obligatorio y debe tener maximo 50 caracteres");
    document.form.mensaje.focus();
  } else if (
    document.form.email.value.indexOf("@") == -1 ||
    document.form.email.value.indexOf(".") == -1
  ) {
    alert("email invalido");
  }
}

document.querySelector("form").addEventListener("submit", validarDatos);
