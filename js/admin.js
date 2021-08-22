let url = 'http://localhost:3000/games';
let allGames = [];
let tableGames = document.getElementById('gamesOptions');
let fav;
let star;
let nameGame;

fetch(url)
  .then(response => response.json())
  .then(games => 
    {
      allGames.push(...games);
      allGames.forEach(game => {
        let gameRow = document.createElement('tr');
        let categoriesGame = " ";
        gameRow.scope = 'row'
        for (let i = 0; i < game.categories.length; i++) {
         categoriesGame += game.categories[i] + ", "
        }        
        if (game.outstanding) {
          gameRow.innerHTML = `
          <th>${game.id}</th>
          <td class="reviewTextTable lh-lg">${game.name}</td>
          <td >${categoriesGame} </td>
          <td class="reviewTextTable lh-lg">${game.description}</td>
          <td class="">
            <div class="form-check d-flex justify-content-center">
              <input class="form-check-input bg-dark" type="checkbox" value="" id="${game.id}flexCheckChecked" checked>
            </div>
          </td>
          <td>
            <div class="d-flex justify-content-around">
              <i class="${game.outstanding} fs-5 bi bi-star-fill star fav" onclick="markAsFav(this)" id="${game.id}"></i>
              <i class="fs-5 bi bi-trash" onclick="deleteGame(this)" id="${game.name}"></i>
              <i class="fs-5 bi bi-pencil-square"></i>
            </div>
          </td>`;
          tableGames.appendChild(gameRow);
        }
        else{
          gameRow.innerHTML = `
          <th>${game.id}</th>
          <td class="reviewTextTable lh-lg">${game.name}</td>
          <td>${categoriesGame}</td>
          <td class="reviewTextTable lh-lg">${game.description}</td>
          <td>
            <div class="form-check d-flex justify-content-center">
              <input class="form-check-input bg-dark" type="checkbox" value="" id="${game.id}flexCheckChecked" checked>
            </div>
          </td>
          <td>
            <div class="d-flex justify-content-around">
              <i class="${game.outstanding} fs-5 bi bi-star-fill star" onclick="markAsFav(this)" id="${game.id}"></i>
              <i class="fs-5 bi bi-trash" onclick="deleteGame(this)" id="${game.name}"></i>
              <i class="fs-5 bi bi-pencil-square"></i>
            </div>
          </td>`;
          tableGames.appendChild(gameRow);
        }
      })   
    })

function markAsFav(game){
  star = document.getElementById(`${game.id}`)
  fav = star.classList[0]
  if (fav === 'true'){
    star.classList.remove('fav');
    star.classList.replace('true', 'false')
    // Se realiza un patch en el api para que el juego deje de estar en destacados
  }else{
    star.classList.add('fav')
    star.classList.replace('false', 'true')
    // Se realiza un patch en el api para que el juego pase a estar en destacados
  }
}
function deleteGame(game){
  nameGame = document.getElementById(`${game.id}`)
  if (window.confirm(`¿Estás realmente seguro de que quieres eliminar el elemento ${nameGame.id}?`)) {
    // Se elimina el objeto
    window.alert("El elemento ha sido borrado con éxito");
  }
}

$.fn.serializeObject = function() {
  var o = {};
  var a = this.serializeArray();
  $.each(a, function() {
      if (o[this.name]) {
          if (!o[this.name].push) {
              o[this.name] = [o[this.name]];
          }
          o[this.name].push(this.value || '');
      } else {
          o[this.name] = this.value || '';
      }
  });
  return o;
};




// function saveChanges(params) {
//   const newGame = {
//     name: "Dota 2",
//     price: "Free",
//     categories: [
//         "MOBA",
//         "Multijugador",
//         "Estrategia",
//         "Free"
//       ],
//     description: "Cada día, millones de jugadores de todo el mundo entran en batalla como uno de los más de cien héroes de Dota. Y no importa si es su décima hora de juego o la milésima, siempre hay algo nuevo que descubrir.",
//     requirementsMin: {
//         "so": "Windows 7",
//         "processor": "Dual core from Intel or AMD at 2.8 GHz",
//         "memory": "4 GB de RAM",
//         "graphics": "nVidia GeForce 8600/9600GT, ATI/AMD Radeon HD2600/3600",
//         "directx": "Versión 9.0c",
//         "storage": "40 GB available space"
//       },
//     outstanding: "false"
//   }
//   console.log(newGame)
//   // fetch(url,{
//   //   method: 'POST',
//   //   body: JSON.stringify(newGame),
//   //   headers: {
//   //     'content-type': 'application/json; charset=UTF-8',
//   //   }
//   // })
//   //   .then(res => res.json())
//   //   .then(games => console.log(games))
// }