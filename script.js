// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Gestion des onglets de code
    const codeTabs = document.querySelectorAll('.code-tab');
    
    codeTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Retirer la classe active de tous les onglets et contenus
            document.querySelectorAll('.code-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.code-content').forEach(c => c.classList.remove('active'));
            
            // Ajouter la classe active à l'onglet cliqué
            this.classList.add('active');
            
            // Afficher le contenu correspondant
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Animation au défilement
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .advantage-card, .trend-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Initialiser les animations
    window.addEventListener('load', function() {
        document.querySelectorAll('.feature-card, .advantage-card, .trend-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
        
        animateOnScroll();
    });
    
    window.addEventListener('scroll', animateOnScroll);
});