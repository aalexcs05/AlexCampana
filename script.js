document.addEventListener("DOMContentLoaded", () => {
    // 1. Efecto Máquina de Escribir en el Subtítulo
    const subtitleElement = document.querySelector(".subtitle");
    const text = "Graduado en ASIX & Especialista en Ciberseguridad";
    let index = 0;

    subtitleElement.textContent = "";
    subtitleElement.classList.add("typing-text");

    function typeEffect() {
        if (index < text.length) {
            subtitleElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 50);
        }
    }
    typeEffect();

    // 2. Efecto Scroll Reveal (Aparición suave de secciones)
    const sections = document.querySelectorAll("section");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});
