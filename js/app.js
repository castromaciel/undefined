fetch('https://pruebadejuegosmax.free.beeceptor.com/pruebadejuegos')
  .then(response => response.json())
  .then(games => 
    {
      const allGames = games;
      console.log(allGames)
      for (let i = 0; i < 3; i++) {
        let imagen = document.getElementById(`gameCard${i}`)
        imagen.src = allGames[i].images
        imagen.alt = "gaming"
        let title = document.getElementById(`gameTitle${i}`)
        title.textContent = allGames[i].name
        let paragraph = document.getElementById(`gameDescription${i}`)
        paragraph.textContent = allGames[i].description
        
      }
    })