const grid = document.getElementById("grid");
const minPrice = document.getElementById("minPrice");
const maxPrice = document.getElementById("maxPrice");
const btnPrecio = document.getElementById("btnPrecio");

let servicios = [];

fetch("../data/data_productos.json")
  .then(res => res.json())
  .then(data => {
    servicios = data;
    mostrar(servicios);
  });

function mostrar(lista) {
  grid.innerHTML = "";

  lista.forEach(item => {
    grid.innerHTML += `
      <div class="col-md-4">
        <div class="card shadow h-100">
          <img src="../${item.imagen}" class="card-img-top" alt="${item.nombre}">
          <div class="card-body">
            <h5 class="card-title">${item.nombre}</h5>
            <p class="card-text">${item.descripcion}</p>
            <p class="fw-bold">$${item.precio}</p>
          </div>
        </div>
      </div>
    `;
  });
}

btnPrecio.addEventListener("click", () => {
  const min = minPrice.value ? parseFloat(minPrice.value) : 0;
  const max = maxPrice.value ? parseFloat(maxPrice.value) : Infinity;

  const resultado = servicios.filter(s => {
    return s.precio >= min && s.precio <= max;
  });

  mostrar(resultado);
});
