let games = [];
let allGames = [];
let url = 'http://localhost:3000/games';
let filter;
const admin = [{
  nombre: "Admin",
  contraseña: "admin",
  email: "none"
}];

const usuarios = JSON.parse(localStorage.getItem('usuariosKey')) || [admin]

fetch(url)
.then(response => response.json())
.then(games => 
  {
    chargingGames(games)
  })
axios.get('http://localhost:3000/games')
  .then(apiGames => {
    filterFunction(apiGames)
})
class Categories{
  constructor(games){
    this.games = games;
  }
  saveLocalStorage (saveArr) {
  localStorage.setItem("arrLocal" ,JSON.stringify(saveArr))
  }
  saveById () {
    let newPage =JSON.parse(localStorage.getItem("arrLocal"))
      newPage.forEach(element => {
        if (element.id == event.target.parentNode.parentNode.id) {
          console.log(element.id)
          localStorage.setItem("detailCard", JSON.stringify(element))
        }
      });
    }
    filtered(cat, games) {
    this.clearCard();
    let index = 0;
    let gamesFil = [];
    gamess.forEach((game) => {
      game.categories.forEach ((category) => {
        if (category == cat){
          gamesFil.push(game)
          this.cardCreate(gamesFil[index].images[0], gamesFil[index].name, gamesFil[index].description, "./html/gamedetail.html", gamesFil[index].price, game.id )
          index++;
        }
      })
    })
    this.saveLocalStorage(gamesFil);
  }
  standOut() {
    this.clearCard();
    let arrStandOut = [];
    games.forEach((standOut) => {
      if (standOut.outstanding) {
        arrStandOut.push(standOut)
        this.cardCreate(standOut.images[0], standOut.name, standOut.description, "./html/gamedetail.html", standOut.price, standOut.id)
      }
    })
    this.saveLocalStorage (arrStandOut);
  } 
  allGames () {
    this.clearCard()
    this.saveLocalStorage (games)
    games.forEach(game => {
      this.cardCreate(game.images[0], game.name, game.description, "./html/gamedetail.html", game.price, game.id)
    });
  }
  cardCreate(imgS, cardTitle, subTitle, linkButton, price, id) {
    let containerClass = document.getElementById("cardsCont");
    let card = document.createElement("div");
    card.className =
      "card text-white bg-dark col-md-6 col-lg-3 my-1 cardBorder cardShadowFull style=''";
    card.id = `${id}`;
    containerClass.appendChild(card);
    let image = document.createElement("img");
    image.src = imgS;
    image.className = "card-img-top";
    card.appendChild(image);
    let cardBody = document.createElement("div");
    cardBody.className = "card-body d-flex flex-column justify-content-around text-center";
    card.appendChild(cardBody);
    let title = document.createElement("h5");
    title.className = "card-title";
    title.innerText = cardTitle;
    cardBody.appendChild(title);
    let subtitle = document.createElement("p");
    subtitle.className = "card-text cardLine";
    subtitle.innerText = subTitle;
    cardBody.appendChild(subtitle);
    let boton = document.createElement("a");
    boton.className = "btn btn-warning align-self-center d-inline";
    boton.innerText = `Ver más`;
    boton.addEventListener("click", (event) => {this.saveById()})
    boton.setAttribute("href", linkButton);
    cardBody.appendChild(boton);
  }
  clearCard() {
    let element = document.getElementById("cardsCont");
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }
}
let usuario =  JSON.parse(localStorage.getItem('usuarioLogueado'))
let user = document.getElementById('users')

if (usuario === null) {
  console.log('no hay usuario logueado')
}else if(usuario.nombre === 'Admin'){
  let adminNav = document.createElement('li')
  adminNav.classList = 'nav-item me-4'
  adminNav.innerHTML = `
    <a class="fs-4 nav-link active" aria-current="page" href="/html/admin.html">Admin</a>
    `;
  let closeAccount = document.createElement('li')
  closeAccount.classList = 'nav-item me-4'
  closeAccount.innerHTML = `
    <button class="fs-4 nav-link active nav-btn" type="button" aria-current="page" onclick="closeAccount()">Cerrar sesión</button>
    `;
  user.appendChild(adminNav)
  user.appendChild(closeAccount)
  user.removeChild(loginAdmin)
  user.removeChild(registerAdmin)
}else{
  let closeAccount = document.createElement('li')
  closeAccount.classList = 'nav-item me-4'
  closeAccount.innerHTML = `
    <button type="button" class="fs-4 nav-link active nav-btn" aria-current="page" onclick="closeAccount()">Cerrar sesión</button>
    `;
  user.appendChild(closeAccount)
  user.removeChild(registerAdmin)
  user.removeChild(loginAdmin)  
}

function filterFunction(apiGames) {
  games.push(...apiGames.data);
  filter = new Categories(games);
  filter.allGames();
}
function chargingGames(gamesList) {
  allGames.push(...gamesList);
  let firstGame = true;
  let createCarousel = document.getElementById("createCarousel");
  allGames.forEach((game) => {
    if (game.outstanding === true) {
      let carouselItem = document.createElement("div");
      if (firstGame === true) {
        carouselItem.className = "d-flex row carousel-item active";
        firstGame = false;
      } else {
        carouselItem.className = "d-flex row carousel-item";
      }
      carouselItem.innerHTML = `<img src="${game.images}" class="px-lg-3 col-sm-12 col-md-12 col-lg-12 col-xl-7" alt="" id="gameCard0">
        <div class="my-3 my-xl-0 px-sm-3 px-lg-3 col-sm-12 col-md-12 box col-lg-12 col-xl-5 d-flex flex-column justify-content-between">
          <h3 class="fs-md-3 text-truncate" id="gameTitle0">${game.name}</h3>
          <p class="m-0 px-3 fs-4 reviewText" id="gameDescription0">${game.description}</p>
          <a href="/html/404.html" target="_blank" type="button" class="me-5 fs-4 btn btn-outline-light align-self-end">Ver más</a>
        </div>`;
      createCarousel.appendChild(carouselItem);
    }
  });
}
function closeAccount(){
  localStorage.removeItem("usuarioLogueado");
  window.location.replace('/index.html');
}