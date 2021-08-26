const admin = {
  nombre: 'Admin',
  contraseña :'admin',
  email:'none'
}

localStorage.setItem('usuariosKey', JSON.stringify(admin));
// let usuarios=[];

usuarios = JSON.parse(localStorage.getItem('usuariosKey')) || [admin]

console.log(usuarios)

const iniciarSesion = (e) => {
  e.preventDefault()
  
  
  let nombre = document.getElementById('nombre').value
  let contraseña = document.getElementById('contraseña').value
  
  // console.log(nombre)
  // console.log(contraseña)
  
  if(nombre !== '' && contraseña !== ''){
    console.log(usuarios.nombre,usuarios.contraseña)
    for(let usuario in usuarios){
      console.log("--",usuario.nombre)
      if(usuarios.nombre === nombre && usuarios.contraseña === contraseña){

        localStorage.setItem('usuarioLogueado', JSON.stringify(usuarios))
        
        console.log(usuarios.nombre,usuarios.contraseña)
        if(usuario.nombre === 'Admin'){
          // Si el usuario logueado es el administrador, redirigir a la pagina de administracion
          console.log('entro')
          // window.location.replace('/html/admin.html')
          
        }else{
          // window.location.replace('index.html')
        }
      } 
      else{
        alert('usuario incorrecto')
      }
    }
  }else{
    alert("Rellene los datos!!!!")
  }
}

function registerBtn () {window.location.replace('register.html')}