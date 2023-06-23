let productData = [
  {
    name: "Samsung Galaxy Watch 4 40mm GPS (black)",
    price: 1790,
  },
  {
    name: "Jabra Elite 5 True Wireless Trådløse hodetelefoner, In-Ear (sort)",
    price: 1690,
  },
  {
    name: "Philips XC8349/01 Highlander Aqua Plus Total Clean støvsuger",
    price: 4999,
  },
]

// Hvordan bruke et Array (liste)
// for (let index = 0; index < 3; index = index + 1) {
//   // console.log(productData[index])
//   createProductCard(productData[index])
// }

let index = 0;
while (index < productData.length) {
  createProductCard(productData[index])
  index = index + 1
}

function createProductCard(productDetails)
{
  // Inne i denne funksjonen så har vi då tilgang til den dataen vi trenger
  console.log("Creating new Product Card with product information")
  console.log(productDetails)

  // Lage et nytt HTML element
  let productContainer = document.createElement("li")
  
  // Lage <h3> og <h4>
  let productName = document.createElement("h3")
  let productPrice = document.createElement("h4")

  // Legge til innhold til <h3> og <h4> elementene
  productName.textContent = productDetails.name
  productPrice.textContent = productDetails.price

  // Sette klassenavn på elementene
  productContainer.className = "product-card"

  // Legg begge to til produkt kontaineren
  productContainer.appendChild(productName)
  productContainer.appendChild(productPrice)

  // Finne en måte å plassere det nye element inne i dokementet
  // Finn element som skal være listen
  let productList = document.getElementById("product-list")
  // Legg til det nye produkt elementet vårt
  productList.appendChild(productContainer)
}

// let galaxyWatchDetails = {
//   name: "Samsung Galaxy Watch 4 40mm GPS (black)",
//   price: 1790,
// }

// console.log("Logging out a single property from an object")
// console.log(galaxyWatchDetails.price)
// console.log("\n")

// createProductCard(galaxyWatchDetails)