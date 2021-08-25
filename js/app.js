let allGames = [];
let url = 'http://localhost:3000/games';
fetch(url)
  .then(response => response.json())
  .then(games => 
    {
      chargingGames(games)
    })
class Categories{
  constructor(games){
    this.games = games;
  }
  filtered(cat, games) {
    this.clearCard();
    let i = 0;
    let gamesFil = [];
    games.forEach(game => {
      game.categories.forEach (category => {
      if (category == cat){
      gamesFil.push(game)
      this.cardCreate(gamesFil[i].images[0], gamesFil[i].name, gamesFil[i].description, "/page404.html", gamesFil[i].price )
      i = i+1;
    }
  })
  });
  }
  standOut() {
    this.clearCard();
    games.forEach((standOut) => {
      if (standOut.outstanding) {
        this.cardCreate(standOut.images[0], standOut.name, standOut.description, "/page404.html", standOut.price)
      }
    });
  } 
  allGames () {
    this.clearCard()
    games.forEach(game => {
      this.cardCreate(game.images[0], game.name, game.description, "/page404.html", game.price)
    });
  }
  cardCreate(imgS, cardTitle, subTitle, linkButton, price) {
    let containerClass = document.getElementById("cardsCont");
    let card = document.createElement("div");
    card.className =
      "card text-white bg-dark col-md-6 col-lg-3 my-1 cardBorder cardShadowFull style=''";
    card.id = "cardName";
    containerClass.appendChild(card);
    let image = document.createElement("img");
    image.src = imgS;
    image.className = "card-img-top";
    card.appendChild(image);
    let cardBody = document.createElement("div");
    cardBody.className = "card-body";
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
    boton.className = "btn btn-warning";
    boton.innerText = `Comprar $:${price}`;
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
let games = [];
axios.get('http://localhost:3000/games')
.then(apiGames => {
  filterFunction(apiGames)
})
let filter;
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
          <a href="#" target="_blank" type="button" class="me-5 fs-4 btn btn-outline-light align-self-end">Ver más</a>
        </div>`;
      createCarousel.appendChild(carouselItem);
    }
  });
}
function chargingGames(gamesList) {
  allGames.push(...gamesList);
  let firstGame = true;
  let createCarousel = document.getElementById('createCarousel')
  allGames.forEach(game => 
  {
    if(game.outstanding === true)
    {
      let carouselItem = document.createElement('div')
      if (firstGame === true) {
        carouselItem.className = 'd-flex row carousel-item active'
        firstGame = false;
      } else {
        carouselItem.className = 'd-flex row carousel-item'
      }
      carouselItem.innerHTML = 
        `<img src="${game.images}" class="px-lg-3 col-sm-12 col-md-12 col-lg-12 col-xl-7" alt="" id="gameCard0">
        <div class="my-3 my-xl-0 px-sm-3 px-lg-3 col-sm-12 col-md-12 box col-lg-12 col-xl-5 d-flex flex-column justify-content-between">
          <h3 class="fs-md-3 text-truncate" id="gameTitle0">${game.name}</h3>
          <p class="m-0 px-3 fs-4 reviewText" id="gameDescription0">${game.description}</p>
          <a href="#" target="_blank" type="button" class="me-5 fs-4 btn btn-outline-light align-self-end">Ver más</a>
        </div>`;
      createCarousel.appendChild(carouselItem)
    }
  });
}
console.log(allGames)
console.log(games)
