const admin = {
  nombre : 'Admin',
  contraseña : 'admin',
  email : 'none'
}

const usuarios = JSON.parse(localStorage.getItem('usuariosKey')) || [admin]


const iniciarSesion = (e) => {
  e.preventDefault()

  let nombre = document.getElementById('nombre').value
  let contraseña = document.getElementById('contraseña').value
  
  if( nombre !== '' && contraseña !== ''){
    for(const usuario of usuarios){
      if(usuario.nombre === nombre && usuario.contraseña === contraseña){
        localStorage.setItem('usuarioLogeado', JSON.stringify(usuario))
        
        if(usuario.nombre === 'Admin'){
          // Si el usuario logueado es el administrador, redirigir a la pagina de administracion
          window.location.replace('admin.html')
        }else{
          // Si es un usuario comun, redirigir al home
          window.location.replace('index.html')
        }
      }else{
        alert("Usuario incorrecto");
      }
    }

  }

}