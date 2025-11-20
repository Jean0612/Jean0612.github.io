document.addEventListener("mousemove", (e) => {
    const eye = document.querySelector(".eye");
    const iris = document.querySelector(".iris");
    // const pupil = document.querySelector(".pupil");  <-- ya no lo usamos

    const rect = eye.getBoundingClientRect();
    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;

    const dx = e.clientX - eyeCenterX;
    const dy = e.clientY - eyeCenterY;

    const rotationDeg = 45;
    const rotationRad = (rotationDeg * Math.PI) / 180;

    const rotatedX = dx * Math.cos(-rotationRad) - dy * Math.sin(-rotationRad);
    const rotatedY = dx * Math.sin(-rotationRad) + dy * Math.cos(-rotationRad);

    const distance = Math.min(Math.sqrt(rotatedX ** 2 + rotatedY ** 2), 50);
    const angle = Math.atan2(rotatedY, rotatedX);

    const irisX = Math.cos(angle) * distance;
    const irisY = Math.sin(angle) * distance;

    // Solo movemos el iris
    iris.style.transform = `translate(${irisX}px, ${irisY}px)`;
});


// Centrar el iris cuando el mouse sale de la ventana
document.addEventListener("mouseleave", () => {
    const iris = document.querySelector(".iris");
    const pupil = document.querySelector(".pupil");
    iris.style.transform = "translate(0, 0)";
    
});
