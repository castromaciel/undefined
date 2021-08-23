
class Categories{
  constructor(games){
  this.games = games;
  }
  filtered (cat , games){
    console.log(cat, games)
    let gamesFil = [];
    games.forEach(game => {
      console.log(game)
      game.categories.forEach (category => {
      if (category == cat){
      gamesFil.push(game)
      this.cardCreate(gamesFil.images[0], gamesFil.name, gamesFil.description, "https://www.google.com.ar", gamesFil.price )
    }
    console.log(gamesFil)
    })
  });
  }
  cardCreate (imgS, cardTitle, subTitle, linkButton, price){
    let containerClass = document.getElementById("cardsCont")
    let card = document.createElement('div')
    card.className = "card col-md-3 p-0"
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
    subtitle.className = "card-text"
    subtitle.innerText = subTitle
    cardBody.appendChild(subtitle)
    let boton = document.createElement('a')
    boton.className = "btn btn-primary"
    boton.innerText = `Comprar $:${price}`
    boton.setAttribute('href', linkButton)
    cardBody.appendChild(boton)
    console.log("aqui 2")
  }
}
let games = [];

// const fc = async () => {
// fetch ('http://localhost:3000/games')
// .then(response => response.json())
// .then(apiGames => {
//   games.push(...apiGames)
//  })
// }
// await fc()
axios.get('http://localhost:3000/games')
.then(apiGames => {games.push(...apiGames.data)})

console.log(games)
let filter1 = new Categories(games)
filter1.filtered("Retro", games)


