  // Navigation functionality
        document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.getElementById('hamburger');
            const closeMenu = document.getElementById('close-menu');
            const navMobile = document.getElementById('nav-mobile');
            const navLinks = document.querySelectorAll('a[data-section]');
            
            // Show mobile menu
            hamburger.addEventListener('click', function() {
                navMobile.classList.add('active');
            });
            
            // Hide mobile menu
            closeMenu.addEventListener('click', function() {
                navMobile.classList.remove('active');
            });
            
            // Handle navigation
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetSection = this.getAttribute('data-section');
                    
                    // Hide all sections
                    document.querySelectorAll('section').forEach(section => {
                        section.classList.remove('active');
                    });
                    
                    // Show target section
                    document.getElementById(targetSection).classList.add('active');
                    
                    // Close mobile menu if open
                    navMobile.classList.remove('active');
                    
                    // Scroll to top
                    window.scrollTo(0, 0);
                });
            });
        });



















// Quiz functionality

        document.addEventListener('DOMContentLoaded', function() {
            // Get all subject cards
            const subjectCards = document.querySelectorAll('.quiz-subject-card');
            const quizDetails = document.querySelectorAll('.quiz-details');
            const backButtons = document.querySelectorAll('.back-to-subjects');
            const quizItems = document.querySelectorAll('.quiz-item');
            
            // Add click event to subject cards
            subjectCards.forEach(card => {
                card.addEventListener('click', function() {
                    const subject = this.getAttribute('data-subject');
                    
                    // Hide all quiz details
                    quizDetails.forEach(detail => {
                        detail.classList.remove('active');
                    });
                    
                    // Show the selected subject's quiz details
                    document.getElementById(`${subject}-details`).classList.add('active');
                });
            });
            
            // Add click event to back buttons
            backButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Hide all quiz details
                    quizDetails.forEach(detail => {
                        detail.classList.remove('active');
                    });
                });
            });
            
            // Add click event to quiz items
            quizItems.forEach(item => {
                item.addEventListener('click', function() {
                    // Remove active class from all quiz items
                    quizItems.forEach(i => {
                        i.classList.remove('active');
                    });
                    
                    // Add active class to clicked quiz item
                    this.classList.add('active');
                    
                    // In a real implementation, you would load the content for the selected quiz here
                    // For this example, we'll just update the heading
                    const quizTitle = this.querySelector('h4').textContent;
                    const quizTopic = this.querySelector('p').textContent;
                    const contentHeader = this.closest('.quiz-details').querySelector('.quiz-content h4');
                    contentHeader.textContent = `${quizTitle}: ${quizTopic}`;
                });
            });
        });
















// Select all FAQ items
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        // Toggle 'active' class on clicked item
        item.classList.toggle('active');

        // Toggle the answer visibility
        const answer = item.querySelector('p');
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});









// Set the registration end date
const registrationEnd = new Date("September 15, 2025 23:59:59").getTime();

// Update countdown every second
const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = registrationEnd - now;

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("days").innerText = "0";
        document.getElementById("hours").innerText = "0";
        document.getElementById("minutes").innerText = "0";
        document.getElementById("seconds").innerText = "0";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}, 1000);
