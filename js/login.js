const admin = {
  nombre: 'Admin',
  contraseña :'admin',
  email:'none'
}

const usuarios = JSON.parse(localStorage.getItem('newUser')) || [admin]

const iniciarSesion = (e) => {
  e.preventDefault()

  let nombre = document.getElementById('nombre').value
  let contraseña = document.getElementById('contraseña').value

  if(nombre !== '' && contraseña !== ''){
    for(const usuario of usuarios){
      if(usuario.nombre === nombre && usuario.contraseña === contraseña){
        localStorage.setItem('usuarioLogueado', JSON.stringify(usuario))

        if(usuario.nombre === 'Admin'){
          window.location.replace('admin.html')
        }else{
          window.location.replace('/')
        }
      }
    }
  }
}

function registerBtn () {window.location.replace('register.html')}