window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    const loaderBg = document.querySelector(".loader-bg");
    const content = document.getElementById("content");

    // Adiciona um atraso de 3 segundos antes de exibir o conteúdo
    setTimeout(function () {
        loader.style.display = "none";
        loaderBg.style.display = "none"; // Oculta o loader
        content.style.display = "block"; // Exibe o conteúdo
    }, 4000); 
});
