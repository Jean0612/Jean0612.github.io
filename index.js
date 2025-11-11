document.addEventListener("DOMContentLoaded", () => {
    const spotlight = document.createElement("div");
    spotlight.classList.add("spotlight-container");
    document.body.appendChild(spotlight);

    document.addEventListener("mousemove", (e) => {
        const x = e.clientX;
        const y = e.clientY;
        spotlight.style.background = `radial-gradient(circle 500px at ${x}px ${y}px, rgba(255, 255, 255, 0.15), transparent 60%)`;
    });
});
// Detectar si es móvil con una expresión regular sobre el user agent
const esMovil = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);

// Crear y cargar el link al CSS correcto
const linkEstilo = document.createElement("link");
linkEstilo.rel = "stylesheet";
linkEstilo.type = "text/css";
linkEstilo.href = esMovil ? "estilo-movil.css" : "estilo-pc.css";

// Agregar el <link> al <head>
document.head.appendChild(linkEstilo);
