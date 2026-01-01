// Initialize
let noClickCount = 0;
const funnyTexts = ["Please 🥺", "Think again 💭", "Ek aor baar soch lo ❤️"];

// Generate 20 petals for rose
function generatePetals() {
    const petalsContainer = document.querySelector('.petals');
    const petalCount = 20;
    
    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        
        // Calculate position in a spiral pattern
        const angle = (360 / petalCount) * i;
        const radius = Math.floor(i / 4) * 10;
        const rotation = angle + (i * 18);
        
        petal.style.setProperty('--rotation', `${rotation}deg`);
        petal.style.left = `${50 + radius * Math.cos(angle * Math.PI / 180)}px`;
        petal.style.top = `${50 + radius * Math.sin(angle * Math.PI / 180)}px`;
        petal.style.animationDelay = `${i * 0.1}s`;
        
        // Add click handler to pluck petal
        petal.addEventListener('click', function() {
            if (!this.classList.contains('plucked')) {
                this.classList.add('plucked');
            }
        });
        
        petalsContainer.appendChild(petal);
    }
}

// Show second card
function showCard2() {
    const card1 = document.getElementById('card1');
    const card2 = document.getElementById('card2');
    
    card1.classList.add('hide');
    setTimeout(() => {
        card2.classList.add('show');
    }, 400);
}

// Show third card
function showCard3() {
    const card2 = document.getElementById('card2');
    const card3 = document.getElementById('card3');
    
    card2.classList.add('hide');
    setTimeout(() => {
        card3.classList.add('show');
    }, 400);
}

// Handle YES button
function handleYes() {
    const envelope = document.getElementById('envelope');
    const card3 = document.getElementById('card3');
    const roseContainer = document.getElementById('roseContainer');
    
    // Hide card and show it going back
    card3.style.animation = 'goBackToEnvelope 1s ease-in-out forwards';
    
    setTimeout(() => {
        card3.style.display = 'none';
        envelope.classList.add('close');
        
        // After envelope closes, show rose
        setTimeout(() => {
            envelope.style.animation = 'fadeOut 1s ease-out forwards';
            setTimeout(() => {
                envelope.style.display = 'none';
                roseContainer.classList.add('bloom');
                generatePetals();
            }, 1000);
        }, 1000);
    }, 1000);
}

// Add fadeOut animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        to {
            opacity: 0;
            transform: scale(0.5);
        }
    }
    
    @keyframes goBackToEnvelope {
        to {
            opacity: 0;
            transform: translateY(100px) scale(0.3);
        }
    }
`;
document.head.appendChild(style);

// Handle NO button
function handleNo() {
    const noBtn = document.getElementById('noBtn');
    
    // Shake animation
    noBtn.classList.add('shake');
    setTimeout(() => {
        noBtn.classList.remove('shake');
    }, 500);
    
    // Change text
    if (noClickCount < funnyTexts.length) {
        noBtn.textContent = funnyTexts[noClickCount];
        noClickCount++;
    }
    
    // Make button escape
    noBtn.classList.add('escape');
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

// Mouse move handler for NO button escape effect
document.addEventListener('mousemove', (e) => {
    const noBtn = document.getElementById('noBtn');
    if (noBtn.classList.contains('escape')) {
        const rect = noBtn.getBoundingClientRect();
        const btnCenterX = rect.left + rect.width / 2;
        const btnCenterY = rect.top + rect.height / 2;
        
        const distance = Math.sqrt(
            Math.pow(e.clientX - btnCenterX, 2) + 
            Math.pow(e.clientY - btnCenterY, 2)
        );
        
        if (distance < 100) {
            const angle = Math.atan2(btnCenterY - e.clientY, btnCenterX - e.clientX);
            const moveX = Math.cos(angle) * 150;
            const moveY = Math.sin(angle) * 150;
            
            let newX = rect.left + moveX;
            let newY = rect.top + moveY;
            
            // Keep button within viewport
            newX = Math.max(0, Math.min(window.innerWidth - rect.width, newX));
            newY = Math.max(0, Math.min(window.innerHeight - rect.height, newY));
            
            noBtn.style.left = `${newX}px`;
            noBtn.style.top = `${newY}px`;
        }
    }
});