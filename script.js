// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', function() {
    menu.classList.toggle('active');
    const isExpanded = menu.classList.contains('active');
    menuToggle.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
});

// Close menu when clicking a link
document.querySelectorAll('.menu a').forEach(function(link) {
    link.addEventListener('click', function() {
        menu.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
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
    var isOpen = faqItem.classList.toggle('active');
    button.classList.toggle('active');
    button.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}

// Services Show More Toggle
(function() {
    var grid = document.getElementById('servicesGrid');
    var toggle = document.getElementById('servicesToggle');
    if (!grid || !toggle) return;

    toggle.addEventListener('click', function() {
        var expanded = grid.classList.toggle('collapsed');
        toggle.classList.toggle('expanded', !expanded);
        toggle.setAttribute('aria-expanded', expanded ? 'false' : 'true');
        toggle.querySelector('span').textContent = expanded ? 'Show More Services' : 'Show Less Services';
    });
})();

// Contact form -> WhatsApp
(function() {
    var form = document.getElementById('contactForm');
    if (!form) return;

    var WA_NUMBER = '919908473572';

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        var website = document.getElementById('cfWebsite');
        if (website && website.value) return;

        var name = document.getElementById('cfName').value.trim();
        var phone = document.getElementById('cfPhone').value.trim();
        var model = document.getElementById('cfModel').value.trim();
        var problem = document.getElementById('cfProblem').value;
        var message = document.getElementById('cfMessage').value.trim();

        var lines = [];
        lines.push('*IFB Washing Machine Repair Enquiry*');
        lines.push('Name: ' + name);
        lines.push('Phone: ' + phone);
        if (model) lines.push('Model: ' + model);
        lines.push('Problem: ' + problem);
        if (message) lines.push('Details: ' + message);

        var text = encodeURIComponent(lines.join('\n'));
        window.open('https://wa.me/' + WA_NUMBER + '?text=' + text, '_blank');
    });
})();