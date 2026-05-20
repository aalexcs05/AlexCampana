document.addEventListener("DOMContentLoaded", () => {
    
    // Base de datos de la información del perfil técnico
    const infoData = {
        about: {
            title: "Sobre Mí",
            icon: "👤",
            details: "Graduado en Administración de Sistemas Informáticos en Red (ASIX). Especializado en el diseño de infraestructuras seguras, hardening de servidores basados en Linux, configuración de redes y automatización de procesos mediante contenedores."
        },
        experience: {
            title: "Experiencia Laboral",
            icon: "💼",
            list: [
                { title: "Vendedor de Telefonía e Informática en MediaMarkt (2025-2026)", desc: "Asesor especializado en tecnología, resolución de dudas técnicas y configuración de dispositivos." },
                { title: "Técnico en Redes y Sistemas en Sicma21 (2025)", desc: "Soporte técnico L1/L2, configuración de routers/switches, gestión de servidores y virtualización con Docker." },
                { title: "Profesor de Programación en Nubotica Academy (2024-2025)", desc: "Instructor STEAM de robótica y programación en Python y Arduino." },
                { title: "Beta Tester en Scarecrow Studio (2023-2024)", desc: "Ejecución de planes de prueba, detección y documentación de bugs." }
            ]
        },
        studies: {
            title: "Estudios y Títulos",
            icon: "🎓",
            list: [
                { title: "Grado Superior en Administración de Sistemas Informáticos en Red (2024-2026)", desc: "Completado en Vedruna Vall." },
                { title: "Grado Medio en Sistemas Microinformáticos y Redes (2022-2024)", desc: "Completado en Vedruna Vall." },
                { title: "Grado en Inteligencia Artificial (Próximamente)", desc: "Cursando en la Universidad Europea de forma online." },
                { title: "Certificaciones adicionales", desc: "Certificado UDIA | AI Fundamentals (2024)." }
            ]
        },
        projects: {
            title: "Proyectos",
            icon: "🛡️",
            isProject: true,
            projectName: "Proyecto AIIOC — Final de Grado",
            details: "API Platform centralizada para la gestión, almacenamiento y análisis técnico de indicadores de compromiso (IoC) y logs de ciberseguridad. Desarrollado con un enfoque moderno de cara a la automatización de la seguridad.",
            tags: ["Node.js", "MongoDB", "Docker", "Git Workflow"],
            link: "https://github.com/aalexcs05/aiioc-api"
        }
    };

    const menuInterface = document.getElementById("sphere-interface");
    const detailsContent = document.getElementById("details-content");
    const contentArea = document.getElementById("content-area");
    const backBtn = document.querySelector(".back-btn");
    const spheres = document.querySelectorAll(".sphere-card");

    function showSection(container) {
        container.classList.add("active-section");
        setTimeout(() => container.style.opacity = "1", 50);
    }

    function hideSection(container) {
        container.style.opacity = "0";
        container.classList.remove("active-section");
    }

    function render(key) {
        const data = infoData[key];
        contentArea.innerHTML = "";

        const detailDiv = document.createElement("div");
        detailDiv.className = "content-detail";

        let html = `<h2>${data.icon} ${data.title}</h2>`;

        if (data.details) { html += `<p>${data.details}</p>`; }

        if (data.list) {
            html += `<ul>`;
            data.list.forEach(item => {
                html += `<li><strong>${item.title}</strong><br><span style="font-size:0.95rem; display:block; margin-top:0.2rem;">${item.desc}</span></li>`;
            });
            html += `</ul>`;
        }

        if (data.isProject) {
            html += `
                <div class="project-box">
                    <h4>${data.projectName}</h4>
                    <div class="tech-tags">
                        ${data.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                    </div>
                    <a href="${data.link}" target="_blank" rel="noopener" class="project-link">→ Ver repositorio de código</a>
                </div>
            `;
        }

        detailDiv.innerHTML = html;
        contentArea.appendChild(detailDiv);
    }

    spheres.forEach(sphere => {
        sphere.addEventListener("click", () => {
            const key = sphere.getAttribute("data-section");
            render(key);
            hideSection(menuInterface);
            showSection(detailsContent);
        });
    });

    backBtn.addEventListener("click", () => {
        hideSection(detailsContent);
        showSection(menuInterface);
    });
});
