document.addEventListener("DOMContentLoaded", () => {
    const spotlight = document.createElement("div");
    spotlight.classList.add("spotlight-container");
    document.body.appendChild(spotlight);

    document.addEventListener("mousemove", (e) => {
        const x = e.clientX;
        const y = e.clientY;
        spotlight.style.background = `radial-gradient(circle 700px at ${x}px ${y}px, rgba(255, 255, 255, 0.15), transparent 60%)`;
    });
});
