// Guidance Page JavaScript

// Navigation Functions
function scrollToProcedures() {
    const proceduresSection = document.getElementById('procedures');
    if (proceduresSection) {
        proceduresSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function startTraining() {
    alert('Starting emergency response training... Please complete all modules for certification.');
}

// Procedure Display Functions
function showProcedure(procedureType) {
    // Hide all procedure cards
    const allProcedures = document.querySelectorAll('.procedure-card');
    allProcedures.forEach(proc => proc.style.display = 'none');
    
    // Show the selected procedure
    const targetProcedure = document.getElementById(`${procedureType}-procedure`);
    if (targetProcedure) {
        targetProcedure.style.display = 'block';
        targetProcedure.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Update active category
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => card.classList.remove('active'));
    
    const activeCard = document.querySelector(`[onclick="showProcedure('${procedureType}')"]`);
    if (activeCard) {
        activeCard.classList.add('active');
    }
}

// Timer Functions
function startCPRTimer() {
    let time = 0;
    const timerDisplay = document.createElement('div');
    timerDisplay.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #e74c3c;
        color: white;
        padding: 2rem;
        border-radius: 15px;
        font-size: 2rem;
        font-weight: bold;
        z-index: 3000;
        text-align: center;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    `;
    
    timerDisplay.innerHTML = `
        <div>CPR Timer</div>
        <div id="timer-display">00:00</div>
        <button onclick="this.parentElement.remove()" style="background: white; color: #e74c3c; border: none; padding: 0.5rem 1rem; border-radius: 5px; margin-top: 1rem; cursor: pointer;">Stop Timer</button>
    `;
    
    document.body.appendChild(timerDisplay);
    
    const interval = setInterval(() => {
        time++;
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        const display = document.getElementById('timer-display');
        if (display) {
            display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        } else {
            clearInterval(interval);
        }
    }, 1000);
}

function startChokingTimer() {
    let time = 0;
    const timerDisplay = document.createElement('div');
    timerDisplay.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #f39c12;
        color: white;
        padding: 2rem;
        border-radius: 15px;
        font-size: 2rem;
        font-weight: bold;
        z-index: 3000;
        text-align: center;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    `;
    
    timerDisplay.innerHTML = `
        <div>Choking Response Timer</div>
        <div id="choking-timer">00:00</div>
        <div style="font-size: 1rem; margin-top: 0.5rem;">Continue until object is expelled</div>
        <button onclick="this.parentElement.remove()" style="background: white; color: #f39c12; border: none; padding: 0.5rem 1rem; border-radius: 5px; margin-top: 1rem; cursor: pointer;">Stop Timer</button>
    `;
    
    document.body.appendChild(timerDisplay);
    
    const interval = setInterval(() => {
        time++;
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        const display = document.getElementById('choking-timer');
        if (display) {
            display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        } else {
            clearInterval(interval);
        }
    }, 1000);
}

function startFirstAidTimer() {
    alert('Starting first aid assessment... Please follow the step-by-step instructions carefully.');
}

// Video Functions
function showCPRVideo() {
    alert('Opening CPR demonstration video... This will show proper technique and timing.');
}

function showChokingVideo() {
    alert('Opening Heimlich maneuver demonstration video... This will show proper hand placement and technique.');
}

function showFirstAidVideo() {
    alert('Opening first aid basics video... This will cover essential emergency response procedures.');
}

// New timer functions for additional procedures
function startHeartAttackTimer() {
    let time = 0;
    const timerDisplay = document.createElement('div');
    timerDisplay.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #e74c3c;
        color: white;
        padding: 2rem;
        border-radius: 15px;
        font-size: 2rem;
        font-weight: bold;
        z-index: 3000;
        text-align: center;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    `;
    
    timerDisplay.innerHTML = `
        <div>Heart Attack Response Timer</div>
        <div id="heart-attack-timer">00:00</div>
        <div style="font-size: 1rem; margin-top: 0.5rem;">Time since symptoms started</div>
        <button onclick="this.parentElement.remove()" style="background: white; color: #e74c3c; border: none; padding: 0.5rem 1rem; border-radius: 5px; margin-top: 1rem; cursor: pointer;">Stop Timer</button>
    `;
    
    document.body.appendChild(timerDisplay);
    
    const interval = setInterval(() => {
        time++;
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        const display = document.getElementById('heart-attack-timer');
        if (display) {
            display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        } else {
            clearInterval(interval);
        }
    }, 1000);
}

function startStrokeTimer() {
    let time = 0;
    const timerDisplay = document.createElement('div');
    timerDisplay.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #9b59b6;
        color: white;
        padding: 2rem;
        border-radius: 15px;
        font-size: 2rem;
        font-weight: bold;
        z-index: 3000;
        text-align: center;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    `;
    
    timerDisplay.innerHTML = `
        <div>Stroke Response Timer</div>
        <div id="stroke-timer">00:00</div>
        <div style="font-size: 1rem; margin-top: 0.5rem;">Time is brain - treatment window: 3 hours</div>
        <button onclick="this.parentElement.remove()" style="background: white; color: #9b59b6; border: none; padding: 0.5rem 1rem; border-radius: 5px; margin-top: 1rem; cursor: pointer;">Stop Timer</button>
    `;
    
    document.body.appendChild(timerDisplay);
    
    const interval = setInterval(() => {
        time++;
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        const display = document.getElementById('stroke-timer');
        if (display) {
            display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        } else {
            clearInterval(interval);
        }
    }, 1000);
}

function startBurnTimer() {
    let time = 0;
    const timerDisplay = document.createElement('div');
    timerDisplay.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #e67e22;
        color: white;
        padding: 2rem;
        border-radius: 15px;
        font-size: 2rem;
        font-weight: bold;
        z-index: 3000;
        text-align: center;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    `;
    
    timerDisplay.innerHTML = `
        <div>Burn Treatment Timer</div>
        <div id="burn-timer">00:00</div>
        <div style="font-size: 1rem; margin-top: 0.5rem;">Cool for 10-15 minutes</div>
        <button onclick="this.parentElement.remove()" style="background: white; color: #e67e22; border: none; padding: 0.5rem 1rem; border-radius: 5px; margin-top: 1rem; cursor: pointer;">Stop Timer</button>
    `;
    
    document.body.appendChild(timerDisplay);
    
    const interval = setInterval(() => {
        time++;
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        const display = document.getElementById('burn-timer');
        if (display) {
            display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        } else {
            clearInterval(interval);
        }
    }, 1000);
}

// Video functions for new procedures
function showHeartAttackVideo() {
    alert('Opening heart attack response video... This will show proper recognition and immediate response techniques.');
}

function showStrokeVideo() {
    alert('Opening stroke recognition video... This will demonstrate the FAST assessment method.');
}

function showBurnVideo() {
    alert('Opening burn treatment video... This will show proper cooling and assessment techniques.');
}

// Training Functions
function findCPRClass() {
    alert('Searching for CPR certification classes in your area...');
    setTimeout(() => {
        alert('Found 3 classes within 20 miles. Would you like to see details?');
    }, 2000);
}

function downloadApp() {
    alert('Downloading Safehood mobile app... This will provide offline access to emergency procedures.');
}

function joinTraining() {
    alert('Joining community training session... You will be connected with other emergency responders.');
}

// Interactive Features
document.addEventListener('DOMContentLoaded', () => {
    // Add click effects to category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove active class from all cards
            categoryCards.forEach(c => c.classList.remove('active'));
            // Add active class to clicked card
            card.classList.add('active');
        });
    });
    
    // Add interactive effects to procedure steps
    const steps = document.querySelectorAll('.step');
    steps.forEach((step, index) => {
        step.addEventListener('click', () => {
            // Highlight the clicked step
            steps.forEach(s => {
                s.style.background = 'white';
                s.style.border = 'none';
            });
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
    
    // Add hover effects to training cards
    const trainingCards = document.querySelectorAll('.training-card');
    trainingCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add pulse animation to emergency category cards
    const emergencyCategories = document.querySelectorAll('.category-card');
    emergencyCategories.forEach(card => {
        const timeElement = card.querySelector('.category-time');
        if (timeElement && timeElement.textContent.includes('Critical')) {
            card.style.animation = 'pulse 3s infinite';
        }
    });
});

// Add CSS for active states
if (!document.querySelector('#guidance-styles')) {
    const style = document.createElement('style');
    style.id = 'guidance-styles';
    style.textContent = `
        .category-card.active {
            background: #e74c3c;
            color: white;
            transform: translateY(-10px) scale(1.05);
        }
        
        .category-card.active .category-icon {
            color: white;
        }
        
        .category-card.active .category-time {
            color: #ffeb3b;
        }
        
        .step.active {
            background: #fff3cd !important;
            border: 2px solid #e74c3c !important;
        }
    `;
    document.head.appendChild(style);
}

// Progress tracking
let completedSteps = new Set();

function markStepComplete(stepNumber) {
    completedSteps.add(stepNumber);
    const step = document.querySelector(`[data-step="${stepNumber}"]`);
    if (step) {
        step.classList.add('completed');
        step.style.background = '#d4edda';
        step.style.border = '2px solid #28a745';
    }
    
    // Check if all steps are completed
    const totalSteps = document.querySelectorAll('.step').length;
    if (completedSteps.size === totalSteps) {
        alert('Congratulations! You have completed all steps. Consider getting certified for real emergency response.');
    }
}

// Accessibility features
function enableVoiceGuidance() {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance('Voice guidance enabled. Click on any step to hear instructions.');
        speechSynthesis.speak(utterance);
    } else {
        alert('Voice guidance not supported in this browser.');
    }
}

// Add keyboard navigation
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        const steps = document.querySelectorAll('.step');
        const currentStep = document.querySelector('.step.active');
        let nextStep;
        
        if (currentStep) {
            const currentIndex = Array.from(steps).indexOf(currentStep);
            if (event.key === 'ArrowDown') {
                nextStep = steps[currentIndex + 1] || steps[0];
            } else {
                nextStep = steps[currentIndex - 1] || steps[steps.length - 1];
            }
        } else {
            nextStep = steps[0];
        }
        
        if (nextStep) {
            steps.forEach(s => s.classList.remove('active'));
            nextStep.classList.add('active');
            nextStep.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
}); 