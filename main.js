const projectImages = {
    1: [
        { src: "img/puchoflix1.PNG", desc: "Login con ingreso de usuario y contraseña" },
        { src: "img/puchoflix2.PNG", desc: "Registro de usuario con validaciones" },
        { src: "img/puchoflix3.PNG", desc: "Home con listado de películas y series, opcion de favoritos" },
        { src: "img/puchoflix4.PNG", desc: "Descripcion de objetos" },
        { src: "img/puchoflix5.PNG", desc: "Vista de perfil con datos del usuario y opciones de modificacion" }
    ],
    2: [
        "https://picsum.photos/seed/proy2a/600/400",
        "https://picsum.photos/seed/proy2b/600/400",
        "https://picsum.photos/seed/proy2c/600/400"
    ],
    3: [
        "https://picsum.photos/seed/proy3a/600/400",
        "https://picsum.photos/seed/proy3b/600/400",
        "https://picsum.photos/seed/proy3c/600/400"
    ]
};

// Esperar que el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    const cards = document.querySelectorAll(".project-card");
    const wrapper = document.querySelector(".swiper-wrapper");

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            const id = card.getAttribute("data-project");
            const slides = projectImages[id]
                .map(item => `
    <div class="swiper-slide">
      <img src="${item.src}" alt="Imagen proyecto ${id}" />
      <p class="slide-desc">${item.desc}</p>
    </div>
  `)
                .join("");
            wrapper.innerHTML = slides;
            swiper.update();
            swiper.slideTo(0);
        });
    });
});