let getObject =JSON.parse(localStorage.getItem("detailCard"))
let titleGame = document.getElementById("titleGame").textContent = `${getObject.name}`
let img0 = document.getElementById("img0").src = `${getObject.images[0]}`
let img1 = document.getElementById("img1").src = `${getObject.images[1]}`
let img2 = document.getElementById("img2").src = `${getObject.images[2]}`
let description = document.getElementById("description").textContent = `${getObject.description}`
// let cat1 = document.getElementById("cat1").innerText = `${getObject.categories[0]}`
// let cat2 = document.getElementById("cat2").innerText = `${getObject.categories[1]}`
// let cat3 = document.getElementById("cat3").innerText = `${getObject.categories[2]}`
// let cat4 = document.getElementById("cat4").innerText = `${getObject.categories[3]}`

