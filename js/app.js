class Categories{
  constructor(games){
    this.games = games;
  }
  filtered (cat , games){
    this.clearCard()
    let i = 0;
    let gamesFil = [];
    games.forEach(game => {
      game.categories.forEach (category => {
      if (category == cat){
      gamesFil.push(game)
      this.cardCreate(gamesFil[i].images[0], gamesFil[i].name, gamesFil[i].description, "https://www.google.com.ar", gamesFil[i].price )
      i = i+1;
    }
  })
  });
  }
  standOut() {
    this.clearCard()
    games.forEach(standOut => {
      if (standOut.outstanding) {
        this.cardCreate(standOut.images[0], standOut.name, standOut.description, "https://www.google.com.ar", standOut.price)
      }
    });
  } 
  allGames () {
    this.clearCard()
    games.forEach(game => {
      this.cardCreate(game.images[0], game.name, game.description, "https://www.google.com.ar", game.price)
    });
  }
  cardCreate (imgS, cardTitle, subTitle, linkButton, price){
    let containerClass = document.getElementById("cardsCont")
    let card = document.createElement('div')
    card.className = "card text-white bg-dark col-md-6 col-lg-3 my-1 cardBorder cardShadowFull style=''"
    card.id = "cardName"
    containerClass.appendChild(card)
    let image = document.createElement('img')
    image.src = imgS
    image.className = "card-img-top"
    card.appendChild(image)
    let cardBody = document.createElement('div')
    cardBody.className = "card-body"
    card.appendChild(cardBody)
    let title = document.createElement('h5')
    title.className = "card-title"
    title.innerText = cardTitle
    cardBody.appendChild(title)
    let subtitle = document.createElement('p')
    subtitle.className = "card-text cardLine"
    subtitle.innerText = subTitle
    cardBody.appendChild(subtitle)
    let boton = document.createElement('a')
    boton.className = "btn btn-warning"
    boton.innerText = `Comprar $:${price}`
    boton.setAttribute('href', linkButton)
    cardBody.appendChild(boton)
  }
  clearCard (){
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
  games.push(...apiGames.data)
  filter = new Categories(games)
  filter.allGames()
}
    
