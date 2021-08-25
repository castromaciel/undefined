/* function validar() {
  let nombre, email, user, pass, form;
  nombre = document.getElementById("name").value;
  email = document.getElementById("email").value;
  user = document.getElementById("user").value;
  pass = document.getElementById("pasword").value;
  form = document.getElementsById("form").value;

  if (nombre === "") {
    alert("el campo nombre esta vacio");
    return false;
  }
}
 */

/* function valida_envia() {
  //valido el nombre
  if (document.fvalida.nombre.value.length == 0) {
    alert("Tiene que escribir su nombre");
    document.fvalida.nombre.focus();
    return 0;
  }

  //valido la edad. tiene que ser entero mayor que 18
  edad = document.fvalida.edad.value;
  edad = validarEntero(edad);
  document.fvalida.edad.value = edad;
  if (edad == "") {
    alert("Tiene que introducir un número entero en su edad.");
    document.fvalida.edad.focus();
    return 0;
  } else {
    if (edad < 18) {
      alert("Debe ser mayor de 18 años.");
      document.fvalida.edad.focus();
      return 0;
    }
  }

  //valido el interés
  if (document.fvalida.interes.selectedIndex == 0) {
    alert("Debe seleccionar un motivo de su contacto.");
    document.fvalida.interes.focus();
    return 0;
  }

  //el formulario se envia
  alert("Muchas gracias por enviar el formulario");
  document.fvalida.submit();
}
 */

// Se crea un objeto con el usuario administrador
const admin = {
  nombre: "Admin",
  contraseña: "admin",
  email: "none",
};
// Se piden los datos de los usuarios del local storage, si estos no existen, asignamos el valor de un array con el usuario administrador
const usuarios = JSON.parse(localStorage.getItem("usuariosKey")) || [admin];

// Seteamos el localstorage
localStorage.setItem("usuariosKey", JSON.stringify(usuarios));

// Creamos una clase para nuestros usuarios
class Usuario {
  constructor(nombre, email, contraseña) {
    (this.nombre = nombre),
      (this.email = email),
      (this.contraseña = contraseña);
  }
}

// Funcion de creacion de usuarios
const crearUsuario = (e) => {
  // Prevenimos que se recargue la pagina
  e.preventDefault();

  // Obtenemos los datos de los inputs
  let nombre = document.getElementById("nombre").value;
  let email = document.getElementById("email").value;
  let contraseña = document.getElementById("contraseña").value;

  // Consultamos si los datos no estan vacios y creamos el usuario
  if (nombre !== "" && email !== "" && contraseña !== "") {
    if (nombre !== "Admin") {
      const usuario = new Usuario(nombre, email, contraseña);

      // Pusheamos el usuario al array de usuarios y lo guardamos en el localStorage
      usuarios.push(usuario);
      localStorage.setItem("usuariosKey", JSON.stringify(usuarios));

      // Redirigimos al login
      window.location.replace("/pages/login.html");
    } else {
      console.error("El administrador ya existe");
    }
  } else {
    console.error("Faltan datos");
  }
};
