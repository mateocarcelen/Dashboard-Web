// TARJETAS ANIMADAS (contador suave)
function animateCounter(id, target) {
  let count = 0;
  const element = document.getElementById(id);
  const interval = setInterval(() => {
    count++;
    element.textContent = count;
    if (count >= target) clearInterval(interval);
  }, 20);
}

animateCounter("clientes", 120);
animateCounter("proyectos", 15);
animateCounter("consultas", 89);
animateCounter("redes", 34);

// GRÁFICA DE BARRAS (Clientes por mes)
const ctxBar = document.getElementById('barChart').getContext('2d');
new Chart(ctxBar, {
  type: 'bar',
  data: {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    datasets: [{
      label: 'Clientes',
      data: [12, 19, 15, 18, 24, 30],
      backgroundColor: '#38bdf8'
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } }
  }
});

// GRÁFICA DE TORTA (Servicios más usados)
const ctxPie = document.getElementById('pieChart').getContext('2d');
new Chart(ctxPie, {
  type: 'doughnut',
  data: {
    labels: ['Instagram', 'Meta Ads', 'Diseño Gráfico', 'Landing Page'],
    datasets: [{
      data: [30, 20, 25, 25],
      backgroundColor: ['#0ea5e9', '#10b981', '#facc15', '#f43f5e']
    }]
  },
  options: {
    responsive: true
  }
});
