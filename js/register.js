const admin = {
  nombre: "Admin",
  contraseña: "administrador",
  email: "none",
};
const usuarios = JSON.parse(localStorage.getItem("usuariosKey")) || [admin];

localStorage.setItem("usuariosKey", JSON.stringify(usuarios));

class Usuario {
  constructor(nombre, email, contraseña) {
    (this.nombre = nombre),
      (this.email = email),
      (this.contraseña = contraseña);
  }
}

const crearUsuario = (e) => {
  e.preventDefault();

  let nombre = document.getElementById("nombreUser").value;
  let email = document.getElementById("email").value;
  let contraseña = document.getElementById("contraseña").value;

  if (nombre !== "" && email !== "" && contraseña !== "") {
    if (nombre !== "Admin") {
      const usuario = new Usuario(nombre, email, contraseña);

      usuarios.push(usuario);
      localStorage.setItem("usuariosKey", JSON.stringify(usuarios));

      window.location.replace("login.html");
    } else {
      console.error("El administrador ya existe");
    }
  } else {
    alert('Complete todos los campos');
  }
};


function loginBtn() {
  window.location.replace("/html/login.html");
}
