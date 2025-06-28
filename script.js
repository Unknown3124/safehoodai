// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Modal functionality
function openGuidance() {
    window.location.href = 'guidance.html';
}

function closeGuidance() {
    const modal = document.getElementById('guidanceModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function openDistressSupport() {
    window.location.href = 'distress.html';
}

function closeDistressSupport() {
    const modal = document.getElementById('distressModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    const guidanceModal = document.getElementById('guidanceModal');
    const distressModal = document.getElementById('distressModal');
    
    if (event.target === guidanceModal) {
        closeGuidance();
    }
    if (event.target === distressModal) {
        closeDistressSupport();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeGuidance();
        closeDistressSupport();
    }
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.feature-card, .stat-item, .about-text h2, .about-text p');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('h3');
            const target = parseInt(statNumber.textContent);
            animateCounter(statNumber, target);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach(item => {
        statsObserver.observe(item);
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Emergency alert simulation (for demo purposes)
function simulateEmergency() {
    const alertSound = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT');
    
    // Create emergency alert
    const alert = document.createElement('div');
    alert.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #e74c3c;
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(231, 76, 60, 0.3);
        z-index: 3000;
        animation: slideIn 0.5s ease;
        max-width: 300px;
    `;
    
    alert.innerHTML = `
        <h4 style="margin: 0 0 0.5rem 0;">🚨 Emergency Alert</h4>
        <p style="margin: 0; font-size: 0.9rem;">Nearest expert located! ETA: 3 minutes</p>
        <button onclick="this.parentElement.remove()" style="background: white; color: #e74c3c; border: none; padding: 0.5rem 1rem; border-radius: 5px; margin-top: 0.5rem; cursor: pointer;">Dismiss</button>
    `;
    
    document.body.appendChild(alert);
    
    // Remove alert after 10 seconds
    setTimeout(() => {
        if (alert.parentElement) {
            alert.remove();
        }
    }, 10000);
}

// Add CSS for slide-in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Demo emergency button (for demonstration purposes)
document.addEventListener('DOMContentLoaded', () => {
    const demoButton = document.createElement('button');
    demoButton.textContent = '🚨 Demo Emergency Alert';
    demoButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        background: #e74c3c;
        color: white;
        border: none;
        padding: 1rem 2rem;
        border-radius: 50px;
        cursor: pointer;
        z-index: 1000;
        font-weight: 600;
        box-shadow: 0 5px 15px rgba(231, 76, 60, 0.3);
        transition: all 0.3s ease;
    `;
    
    demoButton.addEventListener('mouseenter', () => {
        demoButton.style.transform = 'scale(1.05)';
    });
    
    demoButton.addEventListener('mouseleave', () => {
        demoButton.style.transform = 'scale(1)';
    });
    
    demoButton.addEventListener('click', simulateEmergency);
    
    document.body.appendChild(demoButton);
});

// Add some interactive features to the guidance modal
function addGuidanceInteractivity() {
    const steps = document.querySelectorAll('.step');
    
    steps.forEach((step, index) => {
        step.addEventListener('click', () => {
            // Highlight the clicked step
            steps.forEach(s => s.style.background = 'white');
            step.style.background = '#fff3cd';
            step.style.border = '2px solid #e74c3c';
            
            // Add a small animation
            step.style.transform = 'scale(1.02)';
            setTimeout(() => {
                step.style.transform = 'scale(1)';
            }, 200);
        });
        
        // Add hover effect
        step.addEventListener('mouseenter', () => {
            step.style.transform = 'translateX(5px)';
            step.style.transition = 'transform 0.3s ease';
        });
        
        step.addEventListener('mouseleave', () => {
            step.style.transform = 'translateX(0)';
        });
    });
}

// Initialize guidance interactivity when modal opens
const originalOpenGuidance = openGuidance;
openGuidance = function() {
    originalOpenGuidance();
    setTimeout(addGuidanceInteractivity, 100);
}; 