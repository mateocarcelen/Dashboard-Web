 **READ ME Agency 360°**
````
# 💻 Agency 360° - Plataforma de Servicios Digitales

Este repositorio contiene el código de una plataforma web diseñada para la "Agency 360°". El objetivo es mostrar los servicios ofrecidos (Productos), ofrecer un panel de control simulado (Dashboard) y facilitar el contacto con la agencia.

**Agency 360° transforma tu presencia digital.** Logra un crecimiento integral con estrategias de contenido profesional, campañas de publicidad en Meta (Facebook e Instagram) de alto rendimiento y diseño gráfico que eleva tu marca. Centraliza la gestión de tus redes y la conversión de clientes para alcanzar tus objetivos de negocio de manera eficiente.

## 🚀 Inicio Rápido

Para empezar a trabajar con el proyecto localmente, sigue las instrucciones de clonación y acceso:

### Clonar Repositorio

Puedes descargar el proyecto usando HTTPS o SSH.

**Repositorio:** `https://github.com/mateocarcelen/Dashboard-Web.git`

**Clonar con HTTPS:**
```bash
git clone [https://github.com/mateocarcelen/Dashboard-Web.git](https://github.com/mateocarcelen/Dashboard-Web.git)
````

**Clonar con SSH:**

```bash
git clone git@github.com:mateocarcelen/Dashboard-Web.git
```

### Acceso a la Plataforma

Una vez clonado, para ver la plataforma en funcionamiento, simplemente abre cualquiera de los archivos `.html` que se encuentran dentro de la carpeta `paginas/` en tu navegador web.

El punto de entrada principal es `paginas/productos.html`.

## 📁 Estructura del Proyecto

El proyecto sigue una estructura modular para mantener la separación de responsabilidades:

```
.
├── CSS/
│   ├── contacto.css
│   ├── dashboard.css
│   └── style_producto.css 
├── data/
│   ├── dashboard.json       # Datos simulados para el Dashboard (métricas, etc.)
│   └── data_productos.json  # Información detallada de los servicios (nombre, precio, etc.)
├── img/                     # Almacena todos los archivos de imágenes y activos visuales
├── js/
│   ├── app_productos.js     # Lógica para cargar y filtrar los productos desde data_productos.json
│   └── dashboard.js         # Lógica para manejar interacciones y datos del Dashboard
├── paginas/                 # Contiene los archivos HTML principales del sitio
│   ├── contacto.html        # Página de formulario de contacto
│   ├── dashboard.html       # Interfaz principal del panel de control
│   └── productos.html       # Página de visualización del catálogo de servicios
└── README.md
```

## 🎨 Diseño y Estilos

Los estilos de la aplicación están unificados bajo un concepto de **Dark Mode** en la barra lateral y **Light Mode** en el contenido principal, utilizando variables CSS para una fácil personalización:

  * **CSS/dashboard.css:** Contiene los estilos base, incluyendo el *Sidebar*, el *Footer*, y los estilos de tarjetas (`--card`) y texto (`--text`) que definen el tema de colores de los componentes principales.
  * **CSS/contacto.css** y **CSS/style\_producto.css:** Contienen los estilos específicos y ajustes de diseño para esas páginas.

## ⚙️ Funcionalidades Clave

### 1\. Sistema de Navegación

Todas las páginas utilizan un **Sidebar** fijo con diseño responsivo, lo que garantiza una navegación consistente:

  * **Menú:** Dashboard, Productos, Contacto.
  * **Diseño Desktop:** Sidebar fijo a la izquierda.
  * **Diseño Móvil:** El Sidebar se convierte en una barra de navegación horizontal en la parte superior.

### 2\. Catálogo de Productos (`productos.html`)

  * **Carga Dinámica:** Los datos de los productos (nombre, descripción, precio, etc.) se obtienen del archivo `data/data_productos.json`.
  * **Lógica:** La visualización de las tarjetas se maneja con `js/app_productos.js`.

### 3\. Dashboard (`dashboard.html`)

  * **Métricas Simuladas:** Muestra un resumen de datos de rendimiento de la agencia (simulados) cargados desde `data/dashboard.json`.
  * **Lógica:** Las interacciones y la representación de datos se gestionan con `js/dashboard.js`.

## 🤝 Contribución

Este proyecto fue desarrollado por:

  * **Juan Valencia**
  * **Paula Aguilar**
  * **Mateo Carcelén**
