// Animación numérica suave
function animateValue(id, target) {
  const el = document.getElementById(id);
  if (!el) return;
  let start = 0;
  const duration = 600; // ms
  const stepTime = 20;
  const increment = target / (duration / stepTime);

  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      start = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(start);
  }, stepTime);
}

// Cargar datos desde JSON
fetch("../data/dashboard.json")
  .then((res) => res.json())
  .then((data) => {
    const k = data.kpis;

    // KPIs
    animateValue("kpiClientes", k.clientes);
    animateValue("kpiClientesNuevos", k.clientes_nuevos);
    animateValue("kpiProyectosActivos", k.proyectos_activos);
    animateValue("kpiProyectosCompletados", k.proyectos_completados);
    animateValue("kpiConsultas", k.consultas);
    animateValue("kpiRedes", k.redes);
    animateValue("kpiCampañas", k.campañas_activas);

    const gan = document.getElementById("kpiGanancias");
    if (gan) gan.textContent = "$" + k.ganancias_mensuales.toLocaleString();

    // Gráfica de línea: clientes por mes
    new Chart(document.getElementById("lineChart"), {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Clients",
            data: data.clientes_por_mes,
            borderColor: "#38bdf8",
            backgroundColor: "rgba(56,189,248,0.2)",
            tension: 0.4
          }
        ]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } }
      }
    });

    // Donut: servicios usados
    const labelsServicios = Object.keys(data.servicios_usados);
    const valoresServicios = Object.values(data.servicios_usados);

    new Chart(document.getElementById("doughnutChart"), {
      type: "doughnut",
      data: {
        labels: labelsServicios,
        datasets: [
          {
            data: valoresServicios,
            backgroundColor: ["#0ea5e9", "#10b981", "#facc15", "#f97316"]
          }
        ]
      },
      options: {
        responsive: true
      }
    });

    // Barras: rendimiento redes
    const labelsRedes = Object.keys(data.rendimiento_redes);
    const valoresRedes = Object.values(data.rendimiento_redes);

    new Chart(document.getElementById("barChart"), {
      type: "bar",
      data: {
        labels: labelsRedes,
        datasets: [
          {
            label: "Performance",
            data: valoresRedes,
            backgroundColor: "#38bdf8"
          }
        ]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } }
      }
    });

    // Radar: comparación KPIs
    new Chart(document.getElementById("radarChart"), {
      type: "radar",
      data: {
        labels: ["Clients", "Projects", "Queries", "Networks", "Conversions"],
        datasets: [
          {
            label: "KPI level",
            data: [
              k.clientes,
              k.proyectos_activos,
              k.consultas,
              k.redes,
              k.conversiones
            ],
            borderColor: "#38bdf8",
            backgroundColor: "rgba(56,189,248,0.2)"
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          r: {
            angleLines: { color: "#1f2937" },
            grid: { color: "#111827" }
          }
        }
      }
    });

    // Tabla de actividad
    const tbody = document.getElementById("tablaActividad");
    if (tbody) {
      tbody.innerHTML = "";
      data.actividad.forEach((row) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${row.cliente}</td>
          <td>${row.servicio}</td>
          <td>${row.fecha}</td>
          <td>
            <span class="status ${
              row.estado === "Activo"
                ? "status-activo"
                : row.estado === "Pendiente"
                ? "status-pendiente"
                : "status-finalizado"
            }">
              ${row.estado}
            </span>
          </td>
        `;
        tbody.appendChild(tr);
      });
    }
  })
  .catch((err) => {
    console.error("Error loading dashboard data:", err);
  });
