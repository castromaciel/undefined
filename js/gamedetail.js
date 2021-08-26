let getObject =JSON.parse(localStorage.getItem("detailCard"))
let titleGame = document.getElementById("titleGame").textContent = `${getObject.name}`
let img0 = document.getElementById("img0").src = `${getObject.images[0]}`
let img1 = document.getElementById("img1").src = `${getObject.images[1]}`
let img2 = document.getElementById("img2").src = `${getObject.images[2]}`
let description = document.getElementById("description").textContent = `${getObject.description}`
function reqMin() {
  let soMin = document.getElementById("soMin").textContent = `${getObject.requirementsMin.so}`
  let procMin = document.getElementById("procMin").textContent = `${getObject.requirementsMin.processor}`
  let memMin = document.getElementById("memMin").textContent = `${getObject.requirementsMin.memory}`
  let graphicsMin = document.getElementById("graphicsMin").textContent = `${getObject.requirementsMin.graphics}`
  let dxMin = document.getElementById("dxMin").textContent = `${getObject.requirementsMin.directx}`
  let storageMin = document.getElementById("storageMin").textContent = `${getObject.requirementsMin.storage}`
}
reqMin();
function reqMax() {
  let soMax = document.getElementById("soMax").textContent = `${getObject.requirementsMax.so}`
  let procMax = document.getElementById("procMax").textContent = `${getObject.requirementsMax.processor}`
  let memMax = document.getElementById("memMax").textContent = `${getObject.requirementsMax.memory}`
  let graphicsMax = document.getElementById("graphicsMax").textContent = `${getObject.requirementsMax.graphics}`
  let dxMax = document.getElementById("dxMax").textContent = `${getObject.requirementsMax.directx}`
  let storageMax = document.getElementById("storageMax").textContent = `${getObject.requirementsMax.storage}`
}
reqMax();
getObject.categories.forEach(category => {
  createButton(category)
});
function createButton(cat) {
  let button = document.getElementById("containerButton")
  let boton = document.createElement("a");
      boton.className = "btn btn-warning align-self-start mx-1";
      boton.innerText = `${cat}`;
      button.appendChild(boton);  
}