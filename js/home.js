//funcionalidade de slides ( moodle )

// Inicia e atualiza
document.addEventListener("DOMContentLoaded", updateDateTime);
setInterval(updateDateTime, 1000);
// Atualiza a cada segundo
setInterval(updateDateTime, 1000);
document.addEventListener("DOMContentLoaded", updateDateTime);

document.addEventListener("DOMContentLoaded", function() {
    
    let slideIndex = 0;
    const slides = document.getElementsByClassName("fade-slides");

    // Função principal do slide
    function showSlides() {
        // Se não encontrar slides, para a execução para não dar erro
        if (slides.length === 0) return;

        // Esconde todos os slides
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }

        // Avança o índice
        slideIndex++;

        // Se passar do último, volta para o primeiro
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }    

        // Mostra o slide atual
        slides[slideIndex - 1].style.display = "block";  
        
        // Chama a função novamente em 4 segundos
        setTimeout(showSlides, 4000); 
    }

    // Inicia o slideshow
    showSlides();
});