const grid = document.getElementById("grid");
const search = document.getElementById("q");
const filter = document.getElementById("filter");

let servicios = [];

// Cargar datos desde JSON
fetch("../data/data_productos.json")
  .then(res => res.json())
  .then(data => {
    servicios = data;
    mostrar(servicios);
  });

// Mostrar cards
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

// Buscador
search.addEventListener("input", () => {
  const texto = search.value.toLowerCase();
  const filtrado = servicios.filter(s =>
    s.nombre.toLowerCase().includes(texto)
  );
  mostrar(filtrado);
});

// Filtro por categoría
filter.addEventListener("change", () => {
  if (filter.value === "all") {
    mostrar(servicios);
  } else {
    const filtrado = servicios.filter(s => s.categoria === filter.value);
    mostrar(filtrado);
  }
});
