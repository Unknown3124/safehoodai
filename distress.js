// Distress Support Page JavaScript

// Emergency Functions
function callEmergency() {
    if (confirm('This will attempt to call 911. Continue?')) {
        // In a real app, this would initiate a phone call
        alert('Calling 911... Please stay on the line.');
        // Simulate emergency call
        setTimeout(() => {
            alert('Emergency services have been contacted. Help is on the way.');
        }, 2000);
    }
}

function requestExpert() {
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
        <h4 style="margin: 0 0 0.5rem 0;">🚨 Expert Requested</h4>
        <p style="margin: 0; font-size: 0.9rem;">Nearest expert notified! ETA: 2-5 minutes</p>
        <button onclick="this.parentElement.remove()" style="background: white; color: #e74c3c; border: none; padding: 0.5rem 1rem; border-radius: 5px; margin-top: 0.5rem; cursor: pointer;">Dismiss</button>
    `;
    
    document.body.appendChild(alert);
    
    setTimeout(() => {
        if (alert.parentElement) {
            alert.remove();
        }
    }, 10000);
}

function connectExpert() {
    alert('Connecting you with the nearest available expert...');
    setTimeout(() => {
        alert('Expert connected! You can now communicate directly.');
    }, 1500);
}

// Crisis Support Functions
function callCrisisLine() {
    alert('Calling Crisis Line (988)... Please stay on the line for immediate support.');
}

function chatSupport() {
    alert('Opening crisis chat support... A trained counselor will be with you shortly.');
}

function callDomesticViolence() {
    alert('Calling Domestic Violence Hotline... You are not alone. Help is available.');
}

function findShelter() {
    alert('Searching for nearby shelters and safe spaces...');
    setTimeout(() => {
        alert('Found 3 shelters within 10 miles. Would you like directions?');
    }, 2000);
}

function callChildSafety() {
    alert('Calling Child Safety Hotline... Your call is confidential and help is available.');
}

function reportAbuse() {
    alert('Opening abuse reporting form... Your report will be handled with care and confidentiality.');
}

// Real-time Support Functions
function startVideoCall() {
    alert('Initiating video consultation... Please allow camera and microphone access.');
}

function startChat() {
    alert('Starting live chat... A crisis counselor will join shortly.');
}

function shareLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                alert(`Location shared! Coordinates: ${position.coords.latitude}, ${position.coords.longitude}`);
            },
            (error) => {
                alert('Unable to get location. Please enter your address manually.');
            }
        );
    } else {
        alert('Geolocation not supported. Please enter your location manually.');
    }
}

// Emergency Form Handling
document.addEventListener('DOMContentLoaded', () => {
    const emergencyForm = document.querySelector('.emergency-form');
    if (emergencyForm) {
        emergencyForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const emergencyType = document.getElementById('emergency-type').value;
            const urgencyLevel = document.getElementById('urgency-level').value;
            const description = document.getElementById('description').value;
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const location = document.getElementById('location').value;
            
            if (!emergencyType || !urgencyLevel || !description || !name || !phone) {
                alert('Please fill in all required fields.');
                return;
            }
            
            const submitBtn = emergencyForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending Alert...';
            submitBtn.disabled = true;
            
            // Simulate emergency alert processing
            setTimeout(() => {
                alert(`Emergency alert sent! Type: ${emergencyType}, Urgency: ${urgencyLevel}. Help is being dispatched.`);
                emergencyForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 3000);
        });
    }
});

// Add CSS for slide-in animation if not already present
if (!document.querySelector('#distress-animations')) {
    const style = document.createElement('style');
    style.id = 'distress-animations';
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
}

// Interactive elements
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click effects to crisis cards
    const crisisCards = document.querySelectorAll('.crisis-card');
    crisisCards.forEach(card => {
        card.addEventListener('click', () => {
            card.style.transform = 'scale(0.98)';
            setTimeout(() => {
                card.style.transform = 'scale(1)';
            }, 150);
        });
    });
    
    // Add pulse animation to emergency buttons
    const emergencyButtons = document.querySelectorAll('.btn-emergency');
    emergencyButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.animation = 'pulse 1s infinite';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.animation = 'pulse 2s infinite';
        });
    });
});

// Location-based features
function useGPS() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                document.getElementById('location-input').value = 'Using GPS location';
                alert('GPS location obtained! Searching for nearby experts...');
                setTimeout(() => {
                    alert('Found 5 experts within 2 miles of your location.');
                }, 2000);
            },
            (error) => {
                alert('Unable to get GPS location. Please enter your location manually.');
            }
        );
    } else {
        alert('GPS not supported. Please enter your location manually.');
    }
}

function findNearbyExperts() {
    const location = document.getElementById('location-input').value;
    if (!location) {
        alert('Please enter a location or use GPS.');
        return;
    }
    
    alert(`Searching for experts near: ${location}`);
    setTimeout(() => {
        alert('Found 8 experts in your area. Displaying results...');
    }, 1500);
} 