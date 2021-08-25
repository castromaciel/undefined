let allGames = [];

let url = 'http://localhost:3000/games';
fetch(url)
  .then(response => response.json())
  .then(games => 
    {
      chargingGames(games)
    })

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