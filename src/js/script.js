document.addEventListener("DOMContentLoaded", () => {
    const banner = document.querySelector(".banner");

    const imagens = [
        { src: "./src/assets/churros.jpg", alt: "Churros com calda" },
        { src: "./src/assets/nachos.jpg", alt: "Nachos com molho" },
        { src: "./src/assets/tacos.jpg", alt: "Tacos recheados" }
    ];

    imagens.forEach((imagem, index) => {
        const img = document.createElement("img");
        img.src = imagem.src;
        img.alt = imagem.alt;
        banner.appendChild(img);
    });

    // Carrossel automático
    let currentIndex = 0;

    setInterval(() => {
        const imgs = document.querySelectorAll(".banner img");
        imgs.forEach((img, index) => {
            img.style.opacity = "0.4";
            img.style.transform = "scale(0.9)";
        });

        // imagem central atual
        const current = imgs[currentIndex];
        current.style.opacity = "1";
        current.style.transform = "scale(1.05)";

        currentIndex = (currentIndex + 1) % imgs.length;
    }, 2000); // troca a cada 3 segundos
});

// Splash Screen
window.addEventListener('load', () => {
    const splash = document.getElementById('splash');
    setTimeout(() => {
      splash.style.opacity = '0';
      setTimeout(() => {
        splash.style.display = 'none';
      }, 1000);
    }, 1200); // Tempo que a splash fica visível (2 segundos)
  });
  