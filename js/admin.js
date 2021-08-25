let url = 'http://localhost:3000/games';
let allGames = [];
let tableGames = document.getElementById('gamesOptions');
let fav;
let star;
let nameGame;
const form = document.getElementById('newGame')
form.addEventListener('submit',  (event) => {
  event.preventDefault()
})
fetch(url)
  .then(response => response.json())
  .then(games =>{chargingGames(games)})

function chargingGames(gamesList) {
  allGames.push(...gamesList);
  allGames.forEach(game => {
    let gameRow = document.createElement('tr');
    let categoriesGame = game.categories.join(', ');
    gameRow.scope = 'row'
    gameRow.innerHTML = `
      <td class='text-bold'>${game.id}</td>
      <td class="reviewTextTable lh-lg">${game.name}</td>
      <td class="text-truncate">${categoriesGame} </td>
      <td class="reviewTextTable lh-lg">${game.description}</td>
      <td>
        <div class="form-check d-flex justify-content-center">
          <input class="form-check-input bg-dark" type="checkbox" value="" id="${game.id}flexCheckChecked" checked>
        </div>
      </td>
      <td>
        <div class="d-flex justify-content-around">
          <i class="${game.outstanding} fs-5 bi bi-star-fill star fav" onclick="markAsFav(this)" id="${game.id}"></i>
          <i class="fs-5 bi bi-trash" onclick="deleteGame(this)" id="${game.id}"></i>
          <i type="button" class="fs-5 bi bi-pencil-square" data-bs-toggle="modal" data-bs-target="#editGameModal${game.id}" id="${game.id}"></i>
          <div class="modal fade" id="editGameModal${game.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h3 class="modal-title" id="exampleModalLabel">Editar juego</h3>
                  <button type="button" class="bg-light btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form id="${game.id}editGame">
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">Uf</span>
                      <input type="text" class="form-control" name="name" id="editName${game.id}" value="${game.name}" placeholder="Nombre del Juego" aria-label="Nombre del Juego">
                    </div>
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon2">$</span>
                      <input type="text" class="form-control" name="price" id="editPrice${game.id}" value="${game.price}" placeholder="Precio" aria-label="Precio">
                    </div>
                    <div class="d-flex justify-content-between">
                    </div>
                    <h4>Categorías</h4>
                    <div>
                      <select class="form-select mb-3" name="categories" id="editCategories${game.id}" value="${game.categories}" multiple="multiple" aria-label="multiple select example">
                        <option selected>Abrir</option>
                        <option value="Acción">Acción</option>
                        <option value="Aventuras">Aventuras</option>
                        <option value="Batalla Real">Batalla Real</option>
                        <option value="Ciencia Ficción">Ciencia Ficción</option>
                        <option value="Clásico">Clásico</option>
                        <option value="Comida">Comida</option>
                        <option value="Disparos">Disparos</option>
                        <option value="Estrategia">Estrategia</option>
                        <option value="Exploración">Exploración</option>
                        <option value="Familiar">Familiar</option>
                        <option value="FPS">FPS</option>
                        <option value="Free">Free</option>
                        <option value="JcJ (PvP)">JcJ (PvP)</option>
                        <option value="Multijugador">Multijugador</option>
                        <option value="Mundo Abierto">Mundo Abierto</option>
                        <option value="Música">Música</option>
                        <option value="MOBA">MOBA</option>
                        <option value="Retro">Retro</option>
                        <option value="Ritmo">Ritmo</option>
                        <option value="Rol">Rol</option>
                        <option value="RV">RV</option>
                        <option value="Sangriento">Sangriento</option>
                        <option value="Zombie">Zombie</option>
                      </select>
                    </div>
                    <h4>Descripción</h4>
                    <div class="mb-3">
                      <textarea class="form-control" name="description" id="editDescription${game.id}" rows="3">${game.description}</textarea>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                      <button type="submit" class="btn btn-success" 
                      onclick="editedGames(editName${game.id},editPrice${game.id},editCategories${game.id},editDescription${game.id},${game.id})">Guardar Cambios</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </td>`;        
    if (!game.outstanding) {
      gameRow.querySelector('.star').classList.remove('fav');
    }
    tableGames.appendChild(gameRow);
    let forms = document.getElementById(`${game.id}editGame`)
    forms.addEventListener('submit',  (event) => {
      event.preventDefault()
    })
  })  
}
function saveChanges(nameGame,price,categories,description) { 
  let options = categories && categories.options;
  let categoriesSelected = [];
  for (const key in options) {
    if (Object.hasOwnProperty.call(options, key)) {
      const element = options[key];
      if (element.selected) {
        categoriesSelected.push(element.value);
      }
    }
  }
  function generateNequirementsMin(soMin,processorMin,memoryMin,graphicsMin,directxMin,storageMin){
    this.so = soMin;
    this.processor=processorMin;
    this.memory=memoryMin;
    this.graphics = graphicsMin;
    this.directx = directxMin;
    this.storage = storageMin;
  }
  let soMinSaved = document.getElementById('so').value;
  let processorMinSaved = document.getElementById('processor').value;
  let memoryMinSaved = document.getElementById('memory').value;
  let graphicsMinSaved = document.getElementById('graphics').value;
  let directxMinSaved = document.getElementById('directx').value;
  let storageMinSaved = document.getElementById('storage').value;
  let requirementsMin = new generateNequirementsMin(soMinSaved,processorMinSaved,memoryMinSaved,graphicsMinSaved,directxMinSaved,storageMinSaved)
  function generateNewGame(nombre,precio,categoria,descripcion,requisMin){
    this.name = nombre;
    this.price = precio;
    this.categories = categoria;
    this.description = descripcion;
    this.requirementsMin = requisMin;
    this.outstanding = false;
  }
  let savedNameGame = nameGame.value;
  let savedPriceGame = price.value;
  let savedCategoriesGame = categoriesSelected;
  let savedDescriptionGame = description.value;
  let newGame = new generateNewGame(savedNameGame,savedPriceGame,savedCategoriesGame,savedDescriptionGame,requirementsMin);
  if(confirm('¿Estás seguro de que quieres agregar un nuevo Juego?')){
    fetch(url,{
      method: 'POST',
      body: JSON.stringify(newGame),
      headers: {
        'content-type': 'application/json; charset=UTF-8',
      }
    })
      .then(res => res.json())
    alert('El juego se a agregado con éxito')
  }else{
    alert('Ha ocurrido un Error')
  }
}
function markAsFav(game){
  star = document.getElementById(`${game.id}`)
  fav = star.classList[0]
  if (fav === 'true'){
    if (confirm(`¿Desea eliminar de destacados el elemento con id=${star.id}`)) {
      star.classList.remove('fav');
      star.classList.replace('true', 'false')
      fetch(url+'/'+star.id,{
        method: 'PATCH',
        body: JSON.stringify({
          outstanding: false,
        }),
        headers: {
          'content-type': 'application/json; charset=UTF-8',
        }
      })
      alert('Acción realizada con éxito')
    }
  }else{
    if(confirm(`¿Desea destacar el elemento con id=${star.id}`)){
      star.classList.add('fav')
      star.classList.replace('false', 'true')
      fetch(url+'/'+star.id,{
        method: 'PATCH',
        body: JSON.stringify({
          outstanding: true,
        }),
        headers: {
          'content-type': 'application/json; charset=UTF-8',
        }
      }) 
      alert('Acción realizada con éxito')
    }
  }
}
function deleteGame(game){
  nameGame = document.getElementById(`${game.id}`)
  if (confirm(`¿Estás realmente seguro de que quieres eliminar el elemento con id=${nameGame.id}?`)) {
    fetch(url + '/'+nameGame.id ,{
      method: 'DELETE',
      headers: {
        'content-type': 'application/json; charset=UTF-8',
      }
    })
    alert(`El elemento con id=${nameGame.id} ha sido borrado con éxito`);
  }
}
function editedGames(editName,editPrice,editCategorie,editDescription,idGame){
  let options = editCategorie && editCategorie.options;
  let categoriesSelected = [];
  for (const key in options) {
    if (Object.hasOwnProperty.call(options, key)) {
      const element = options[key];
      if (element.selected) {
        categoriesSelected.push(element.value);
      }
    }
  }
  let editedNameGame = editName.value;
  let editedPriceGame = editPrice.value;
  let editedCategorieGame = categoriesSelected;
  let editedDescriptionGame = editDescription.value;
  if(confirm('¿Estás seguro de que quieres agregar un nuevo Juego?')){
    fetch(url+'/'+idGame,{
      method: 'PATCH',
      body: JSON.stringify({
        name:editedNameGame,
        price:editedPriceGame,
        categories:editedCategorieGame,
        description:editedDescriptionGame
      }),
      headers: {
        'content-type': 'application/json; charset=UTF-8',
      }
    })
    alert('Acción realizada con éxito')
  }else{
    alert('Ha ocurrido un error')
  }
}