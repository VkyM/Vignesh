// Section Navigation
const navButtons = document.querySelectorAll('.nav-icon');
const sections = document.querySelectorAll('.section');

navButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetSection = button.getAttribute('data-section');
        
        // Remove active class from all buttons and sections
        navButtons.forEach(btn => btn.classList.remove('active'));
        sections.forEach(section => section.classList.remove('active'));
        
        // Add active class to clicked button and corresponding section
        button.classList.add('active');
        document.getElementById(targetSection).classList.add('active');
    });
});

// Form Submission
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        
        console.log('Form submitted:', formData);
        
        // Show success message (you can customize this)
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

// Download CV Button
const downloadBtn = document.querySelector('.download-btn');

if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
        // You can replace this with actual CV download link
        alert('CV download will be available soon!');
        // window.open('path-to-your-cv.pdf', '_blank');
    });
}

// Smooth scroll for any future anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});