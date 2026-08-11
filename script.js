// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', function() {
    menu.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.menu a').forEach(function(link) {
    link.addEventListener('click', function() {
        menu.classList.remove('active');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
            var headerHeight = 60;
            var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
    });
});

// FAQ Toggle
function toggleFaq(button) {
    var faqItem = button.parentElement;
    faqItem.classList.toggle('active');
    button.classList.toggle('active');
}
