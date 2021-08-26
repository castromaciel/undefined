const admin = [{
  nombre: "Admin",
  contraseña: "admin",
  email: "none",
  }
];
const usuarios = JSON.parse(localStorage.getItem('usuariosKey')) || [admin]

const iniciarSesion = (e) => {
  e.preventDefault()

  let nombre = document.getElementById('nombreUsuario').value
  let contraseña = document.getElementById('contraseña').value
  
  if( nombre !== '' && contraseña !== ''){
    for(const usuario of usuarios){
      if(usuario.nombre === nombre && usuario.contraseña === contraseña){
        localStorage.setItem('usuarioLogueado', JSON.stringify(usuario))
        
        if(usuario.nombre === 'Admin'){
          // Si el usuario logueado es el administrador, redirigir a la pagina de administracion
          window.location.replace('/html/admin.html')
        }else{
          // Si es un usuario comun, redirigir al home
          window.location.replace('/')
        }
        
      }else{
        console.log("Usuario incorrecto");
      }
    }
  }else{
    alert('Complete todos los campos')
  }

}

function registerBtn () {window.location.replace('register.html')}