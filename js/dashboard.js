// Animación de números
function animateValue(id, target) {
  const el = document.getElementById(id);
  let start = 0;
  const duration = 800;
  const stepTime = 20;
  const increment = target / (duration / stepTime);

  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      clearInterval(timer);
      start = target;
    }
    el.textContent = Math.floor(start);
  }, stepTime);
}

fetch("/data/dashboard.json")
  .then(res => res.json())
  .then(data => {

    const k = data.kpis;

    // KPIs
    animateValue("kpiClientes", k.clientes);
    animateValue("kpiClientesNuevos", k.clientes_nuevos);
    animateValue("kpiProyectosActivos", k.proyectos_activos);
    animateValue("kpiProyectosCompletados", k.proyectos_completados);
    animateValue("kpiConsultas", k.consultas);
    animateValue("kpiRedes", k.redes);
    animateValue("kpiCampañas", k.campañas_activas);

    document.getElementById("kpiGanancias").textContent =
      "$" + k.ganancias_mensuales.toLocaleString();

    // LINE CHART
    new Chart(document.getElementById("lineChart"), {
      type: "line",
      data: {
        labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
        datasets: [{
          label: "Clientes",
          data: data.clientes_por_mes,
          borderColor: "#38bdf8",
          backgroundColor: "rgba(56,189,248,0.25)",
          tension: 0.4
        }]
      },
      options: {
        plugins: { legend: { display: false } }
      }
    });

    // DOUGHNUT CHART
    const labelsPlanes = [
      "Plan Redes Sociales",
      "Plan Meta ADS",
      "Plan Gráfico Profesional",
      "Plan Web Empresarial",
      "Plan Manager PRO"
    ];

    const valoresPlanes = [40, 25, 20, 10, 5];
    const total = valoresPlanes.reduce((a, b) => a + b, 0);

    new Chart(document.getElementById("doughnutChart"), {
      plugins: [ChartDataLabels],
      type: "doughnut",
      data: {
        labels: labelsPlanes,
        datasets: [{
          data: valoresPlanes,
          backgroundColor: [
            "#0ea5e9",
            "#10b981",
            "#facc15",
            "#f97316",
            "#6366f1"
          ],
          borderWidth: 3,
          borderColor: "#ffffff"
        }]
      },
      options: {
        plugins: {
          legend: { labels: { color: "white" } },
          datalabels: {
            color: "white",
            font: { weight: "bold", size: 14 },
            formatter: v => ((v / total) * 100).toFixed(1) + "%"
          }
        }
      }
    });

    // BAR CHART
    new Chart(document.getElementById("barChart"), {
      type: "bar",
      data: {
        labels: Object.keys(data.rendimiento_redes),
        datasets: [{
          data: Object.values(data.rendimiento_redes),
          backgroundColor: "#38bdf8"
        }]
      },
      options: {
        plugins: { legend: { display: false } }
      }
    });

    // RADAR CHART
    new Chart(document.getElementById("radarChart"), {
      type: "radar",
      data: {
        labels: Object.keys(data.comparativa_kpis),
        datasets: [{
          label: "Nivel",
          data: Object.values(data.comparativa_kpis),
          borderColor: "#38bdf8",
          backgroundColor: "rgba(56,189,248,0.2)"
        }]
      }
    });

    // ACTIVIDAD RECIENTE
    let tbody = document.getElementById("tablaActividad");
    tbody.innerHTML = "";

    data.actividad.forEach(a => {
      tbody.innerHTML += `
        <tr>
          <td>${a.cliente}</td>
          <td>${a.servicio}</td>
          <td>${a.fecha}</td>
          <td>${a.estado}</td>
        </tr>`;
    });

  })
  .catch(err => console.log("Error:", err));
