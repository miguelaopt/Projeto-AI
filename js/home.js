//funcionalidade de slides (copiado do moodle mas adaptado)

// relogio sempre atualizado 
document.addEventListener("DOMContentLoaded", updateDateTime);
setInterval(updateDateTime, 1000);

document.addEventListener("DOMContentLoaded", function() {
    
    let slideIndex = 0;
    const slides = document.getElementsByClassName("fade-slides");

    // Funcao principal do slide
    function showSlides() {
        // se nao houver slides sai
        if (slides.length === 0) return;

        // esconde tudo
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }

        // proximo
        slideIndex++;

        // volta ao inicio se passar do fim
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }    

        // mostra o atual
        slides[slideIndex - 1].style.display = "block";  
        
        // roda a cada 4 segundos
        setTimeout(showSlides, 4000); 
    }

    //arranca a festa
    showSlides();
});