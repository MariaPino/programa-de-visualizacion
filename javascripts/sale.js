
const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");
let compras = []

const products = [
  {
    id: 1,
    nombre_producto: "Mezcla original 200g",
    importe: 500
  },
  {
    id: 2,
    nombre_producto: "Mezcla original 500g",
    importe: 900
  },
  {
    id: 3,
    nombre_producto: "Mezcla especial 200g",
    importe: 700
  },
  {
    id: 4,
    nombre_producto: "Mezcla especial 500g",
    importe: 1200
  },
]

function add() {
  const producto = obtenerProductoPorID(priceElement.value);
  const number = parseInt(numberElement.value);

  let compra_objeto = {
    producto: producto,
    cantidad: number,
    subtotal: producto.importe * parseInt(number)
  }

  compras.push(compra_objeto)

  window.alert(`${display()} \nSubtotal ${calcularSubtotal()} yenes`)
}

function calc() {
  const envio = precioEnvio(calcularSubtotal)
  window.alert(` ${display()} \n
          Subtotal: ${calcularSubtotal()} yenes. \n
          Los gastos de envio son: ${envio} yenes. \n
          Total con envio: ${envio + calcularSubtotal()} yenes
          `)
}

function obtenerProductoPorID(id) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      return products[i]
    }
  }
}


function display() {
  return compras.map(compra => {
    return `${compra.cantidad} de ${compra.producto.nombre_producto} por ${compra.subtotal}`
  }).join("\n")
}


function calcularSubtotal() {
  return compras.reduce((acumulado, compra) => {
    return acumulado + compra.subtotal
  }, 0)
}


function precioEnvio(subtotal) {
  if (subtotal >= 3000) {
    return 0
  }
  else if (subtotal >= 2000) {
    return 250
  }
  else {
    console.log(500)
    return 500
  }
}