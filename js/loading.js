window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    const loaderBg = document.querySelector(".loader-bg");
    const content = document.getElementById("content");
    const photo = document.querySelector(".banner-photo");
    const bannerTitle = document.querySelector(".banner-section .main-title");
    const bannerSubtitle = document.querySelector(".banner-section .main-subtitle");
    const mainMenu = document.querySelector(".banner-section .main-menu");


    // Adiciona um atraso de 3 segundos antes de exibir o conteúdo
    setTimeout(function () {
        loader.style.display = "none";
        loaderBg.style.display = "none"; // Oculta o loader
        content.style.display = "block"; // Exibe o conteúdo
        photo.classList.add("fadeInLeft");
    }, 4000); 

    setTimeout(function () {
        bannerTitle.style.display = "block"; // Exibe o conteúdo
        bannerTitle.classList.add("fadeInUp");
    }, 4250); 

    setTimeout(function () {
        bannerSubtitle.style.display = "block"; // Exibe o conteúdo
        bannerSubtitle.classList.add("fadeInUp");
    }, 4500); 

    setTimeout(function () {
        mainMenu.style.display = "block"; // Exibe o conteúdo
        mainMenu.classList.add("fadeInUp");
    }, 5000); 
});
