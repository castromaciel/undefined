// Se crea un objeto con el usuario administrador
const admin = {
  nombre: "Admin",
  contraseña: "admin",
  email: "none",
};
// Se piden los datos de los usuarios del local storage, si estos no existen, asignamos el valor de un array con el usuario administrador
let usuarioRegistered =[];
usuarioRegistered.push(admin)
let newUser;

let usuarios = JSON.parse(localStorage.getItem("usuariosKey")) || [admin];

// Seteamos el localstorage
localStorage.setItem("usuariosKey", JSON.stringify(usuarios));

// Creamos una clase para nuestros usuarios
class Usuario {
  constructor(nombre, email, contraseña) {
    (this.nombre = nombre),
    (this.contraseña = contraseña);
    (this.email = email)
  }
}

// Funcion de creacion de usuarios
const crearUsuario = (e) => {
  // Prevenimos que se recargue la pagina
  e.preventDefault();

  // Obtenemos los datos de los inputs
  let nombre = document.getElementById("nombreUser").value;
  let email = document.getElementById("email").value;
  let contraseña = document.getElementById("contraseña").value;

  // Consultamos si los datos no estan vacios y creamos el usuario
  if (nombre !== "" && email !== "" && contraseña !== "") {
    if (nombre !== "Admin") {
      const usuario = new Usuario(nombre, email, contraseña);

      // Pusheamos el usuario al array de usuarios y lo guardamos en el localStorage
      // usuarios.push(usuario);
      console.log(usuario)
      newUser = JSON.stringify(usuario)
      localStorage.setItem("newUser", JSON.stringify(usuario));
      console.log(usuarios)
      // Redirigimos al login
      // window.location.replace("login.html");
    } else {
      console.error("El administrador ya existe");
    }
  } else {
    console.error("Faltan datos");
  }
  usuarios = JSON.stringify(usuarios)
  usuarioRegistered.push(usuarios)
  console.log(usuarioRegistered)
  // usuarios = localStorage.setItem('usuariosKey',usuarioRegistered)
  console.log(usuarios)
};

function loginBtn () {window.location.replace('login.html')}