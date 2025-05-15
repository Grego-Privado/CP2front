document.addEventListener("DOMContentLoaded", () => {
    const banner = document.querySelector(".banner");

    const imagens = [
        {
            src: "../src/assets/churros.jpg",
            alt: "Churros com calda de chocolate"
        },
        {
            src: "../src/assets/nachos.jpg",
            alt: "Nachos crocantes com molho"
        },
        {
            src: "../src/assets/tacos.jpg",
            alt: "Tacos mexicanos recheados"
        }
    ];

    imagens.forEach(imagem => {
        const img = document.createElement("img");
        img.src = imagem.src;
        img.alt = imagem.alt;
        banner.appendChild(img);
    });
});