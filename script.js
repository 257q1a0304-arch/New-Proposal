// ====================================
// ENHANCED ROMANTIC PROPOSAL SCRIPT
// ====================================

// Global variables
let noClickCount = 0;
let petalCount = 0;
const maxPetals = 100;
let rosePetals = [];
const TOTAL_ROSE_PETALS = 20;

// ====================================
// INITIALIZATION
// ====================================
document.addEventListener('DOMContentLoaded', function() {
    initializeElements();
    startBackgroundAnimations();
    createRosePetals();
    initializeCursorTrail();
    addButtonEventListeners();
    createFloatingHearts();
});

// ====================================
// ELEMENT INITIALIZATION
// ====================================
function initializeElements() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    
    if (yesBtn) {
        yesBtn.style.transition = 'all 0.3s ease';
    }
    
    if (noBtn) {
        noBtn.style.transition = 'all 0.3s ease';
    }
}

// ====================================
// BUTTON EVENT LISTENERS
// ====================================
function addButtonEventListeners() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    
    if (yesBtn) {
        yesBtn.addEventListener('click', handleYesClick);
        yesBtn.addEventListener('mouseenter', handleYesHover);
    }
    
    if (noBtn) {
        noBtn.addEventListener('click', handleNoClick);
        noBtn.addEventListener('mouseenter', handleNoHover);
    }
}

// ====================================
// YES BUTTON HANDLERS
// ====================================
function handleYesClick() {
    // Create massive confetti explosion
    createMassiveConfetti();
    
    // Create heart burst
    createHeartBurst();
    
    // Create sparkle explosion
    createSparkleExplosion();
    
    // Rainbow animation
    createRainbowAnimation();
    
    // Show success message
    showSuccessMessage();
    
    // Play romantic music (optional)
    playRomanticSound();
    
    // Redirect after celebration
    setTimeout(() => {
        window.location.href = 'celebration.html';
    }, 3000);
}

function handleYesHover() {
    const yesBtn = document.getElementById('yesBtn');
    yesBtn.style.transform = 'scale(1.15) rotate(2deg)';
    createSparkles(yesBtn);
}

// ====================================
// NO BUTTON HANDLERS
// ====================================
function handleNoClick(e) {
    e.preventDefault();
    noClickCount++;
    
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    
    // Make NO button escape
    escapeNoButton(noBtn);
    
    // Make YES button bigger
    growYesButton(yesBtn, noClickCount);
    
    // Show encouraging message
    showEncouragingMessage(noClickCount);
    
    // Create sad effects
    createSadPetals();
    
    // Shake screen
    if (noClickCount > 3) {
        shakeScreen();
    }
    
    // Hide NO button after many attempts
    if (noClickCount > 10) {
        hideNoButton(noBtn);
    }
}

function handleNoHover() {
    const noBtn = document.getElementById('noBtn');
    
    // Make button run away on hover
    if (noClickCount > 0) {
        escapeNoButton(noBtn);
    }
}

// ====================================
// NO BUTTON ESCAPE BEHAVIOR
// ====================================
function escapeNoButton(noBtn) {
    const container = noBtn.parentElement;
    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();
    
    const maxX = containerRect.width - btnRect.width - 20;
    const maxY = containerRect.height - btnRect.height - 20;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    noBtn.style.transform = 'scale(0.9) rotate(' + (Math.random() * 20 - 10) + 'deg)';
    
    // Create poof effect
    createPoofEffect(randomX + btnRect.width/2, randomY + btnRect.height/2);
}

function hideNoButton(noBtn) {
    noBtn.style.opacity = '0';
    noBtn.style.transform = 'scale(0) rotate(360deg)';
    setTimeout(() => {
        noBtn.style.display = 'none';
    }, 500);
    
    showFinalMessage();
}

// ====================================
// YES BUTTON GROWTH
// ====================================
function growYesButton(yesBtn, count) {
    const newScale = 1 + (count * 0.15);
    yesBtn.style.transform = `scale(${newScale})`;
    yesBtn.style.fontSize = `${1 + count * 0.1}rem`;
    
    // Add pulse animation
    yesBtn.style.animation = 'pulse 0.5s ease-in-out';
    setTimeout(() => {
        yesBtn.style.animation = '';
    }, 500);
}

// ====================================
// FLOATING HEARTS
// ====================================
function createFloatingHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
        heart.style.opacity = Math.random() * 0.5 + 0.3;
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 7000);
    }, 800);
}

// ====================================
// FALLING PETALS
// ====================================
function startBackgroundAnimations() {
    setInterval(() => {
        if (petalCount < maxPetals) {
            createFallingPetal();
        }
    }, 400);
}

function createFallingPetal() {
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.innerHTML = '🌸';
    petal.style.left = Math.random() * 100 + '%';
    petal.style.fontSize = (Math.random() * 15 + 10) + 'px';
    petal.style.animationDuration = (Math.random() * 3 + 5) + 's';
    petal.style.animationDelay = Math.random() * 2 + 's';
    petal.style.opacity = Math.random() * 0.6 + 0.4;
    
    document.body.appendChild(petal);
    petalCount++;
    
    setTimeout(() => {
        petal.remove();
        petalCount--;
    }, 8000);
}

function createSadPetals() {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const petal = document.createElement('div');
            petal.className = 'sad-petal';
            petal.innerHTML = '💔';
            petal.style.left = '50%';
            petal.style.top = '50%';
            petal.style.position = 'fixed';
            petal.style.fontSize = '30px';
            petal.style.zIndex = '10000';
            
            const angle = (Math.random() * 360) * Math.PI / 180;
            const distance = Math.random() * 200 + 100;
            const endX = Math.cos(angle) * distance;
            const endY = Math.sin(angle) * distance;
            
            petal.style.animation = `sadPetalFall 2s ease-out forwards`;
            petal.style.setProperty('--endX', endX + 'px');
            petal.style.setProperty('--endY', endY + 'px');
            
            document.body.appendChild(petal);
            
            setTimeout(() => petal.remove(), 2000);
        }, i * 100);
    }
}

// ====================================
// SPARKLING STARS
// ====================================
function createSparkles(element) {
    const rect = element.getBoundingClientRect();
    
    for (let i = 0; i < 8; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.innerHTML = '✨';
        sparkle.style.left = (rect.left + Math.random() * rect.width) + 'px';
        sparkle.style.top = (rect.top + Math.random() * rect.height) + 'px';
        sparkle.style.fontSize = (Math.random() * 15 + 10) + 'px';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 1000);
    }
}

function createSparkleExplosion() {
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.innerHTML = '✨';
            sparkle.style.position = 'fixed';
            sparkle.style.left = '50%';
            sparkle.style.top = '50%';
            sparkle.style.fontSize = (Math.random() * 20 + 15) + 'px';
            sparkle.style.zIndex = '10000';
            sparkle.style.pointerEvents = 'none';
            
            const angle = (Math.random() * 360) * Math.PI / 180;
            const distance = Math.random() * 300 + 100;
            
            sparkle.animate([
                { transform: 'translate(-50%, -50%) scale(0)', opacity: 1 },
                { transform: `translate(calc(-50% + ${Math.cos(angle) * distance}px), calc(-50% + ${Math.sin(angle) * distance}px)) scale(1.5)`, opacity: 0 }
            ], {
                duration: 1500,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });
            
            document.body.appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 1500);
        }, i * 20);
    }
}

// ====================================
// CONFETTI EFFECTS
// ====================================
function createMassiveConfetti() {
    const colors = ['#ff6b6b', '#ee5a6f', '#f06595', '#cc5de8', '#845ef7', '#5c7cfa', '#339af0', '#22b8cf', '#20c997', '#51cf66', '#94d82d', '#ffd43b', '#ffa94d'];
    const emojis = ['❤️', '💕', '💖', '💗', '💓', '💝', '🌹', '🌺', '🌸', '💐', '🎉', '✨', '⭐', '🌟'];
    
    for (let i = 0; i < 200; i++) {
        setTimeout(() => {
            createConfettiPiece(colors, emojis);
        }, i * 15);
    }
    
    // Continue confetti for 3 seconds
    const confettiInterval = setInterval(() => {
        for (let i = 0; i < 10; i++) {
            createConfettiPiece(colors, emojis);
        }
    }, 100);
    
    setTimeout(() => clearInterval(confettiInterval), 3000);
}

function createConfettiPiece(colors, emojis) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    
    const useEmoji = Math.random() > 0.5;
    if (useEmoji) {
        confetti.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
        confetti.style.fontSize = (Math.random() * 20 + 15) + 'px';
    } else {
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = (Math.random() * 10 + 5) + 'px';
        confetti.style.height = (Math.random() * 10 + 5) + 'px';
    }
    
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.top = '-20px';
    confetti.style.position = 'fixed';
    confetti.style.zIndex = '10000';
    confetti.style.pointerEvents = 'none';
    
    const angle = (Math.random() * 360) * Math.PI / 180;
    const velocity = Math.random() * 100 + 50;
    const endX = Math.cos(angle) * velocity;
    const endY = window.innerHeight + 100;
    const rotation = Math.random() * 720 - 360;
    
    confetti.animate([
        { transform: 'translate(0, 0) rotate(0deg)', opacity: 1 },
        { transform: `translate(${endX}px, ${endY}px) rotate(${rotation}deg)`, opacity: 0 }
    ], {
        duration: Math.random() * 2000 + 2000,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    });
    
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 4000);
}

// ====================================
// HEART BURST EFFECT
// ====================================
function createHeartBurst() {
    const hearts = ['❤️', '💕', '💖', '💗', '💓', '💝', '💘', '💞'];
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.position = 'fixed';
            heart.style.left = '50%';
            heart.style.top = '50%';
            heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
            heart.style.zIndex = '10000';
            heart.style.pointerEvents = 'none';
            
            const angle = (i * 360 / 30) * Math.PI / 180;
            const distance = Math.random() * 250 + 150;
            
            heart.animate([
                { transform: 'translate(-50%, -50%) scale(0) rotate(0deg)', opacity: 1 },
                { transform: `translate(calc(-50% + ${Math.cos(angle) * distance}px), calc(-50% + ${Math.sin(angle) * distance}px)) scale(1.5) rotate(${Math.random() * 360}deg)`, opacity: 0 }
            ], {
                duration: 2000,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });
            
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 2000);
        }, i * 50);
    }
}

// ====================================
// RAINBOW ANIMATION
// ====================================
function createRainbowAnimation() {
    const rainbow = document.createElement('div');
    rainbow.className = 'rainbow-overlay';
    rainbow.style.position = 'fixed';
    rainbow.style.top = '0';
    rainbow.style.left = '0';
    rainbow.style.width = '100%';
    rainbow.style.height = '100%';
    rainbow.style.background = 'linear-gradient(45deg, rgba(255,0,0,0.3), rgba(255,127,0,0.3), rgba(255,255,0,0.3), rgba(0,255,0,0.3), rgba(0,0,255,0.3), rgba(75,0,130,0.3), rgba(148,0,211,0.3))';
    rainbow.style.backgroundSize = '400% 400%';
    rainbow.style.zIndex = '9999';
    rainbow.style.pointerEvents = 'none';
    rainbow.style.animation = 'rainbowShift 2s ease-in-out';
    
    document.body.appendChild(rainbow);
    
    setTimeout(() => rainbow.remove(), 2000);
}

// ====================================
// CURSOR TRAIL
// ====================================
function initializeCursorTrail() {
    document.addEventListener('mousemove', (e) => {
        if (Math.random() > 0.7) {
            const trail = document.createElement('div');
            trail.className = 'cursor-trail';
            trail.innerHTML = ['❤️', '💕', '✨', '⭐'][Math.floor(Math.random() * 4)];
            trail.style.left = e.pageX + 'px';
            trail.style.top = e.pageY + 'px';
            trail.style.fontSize = (Math.random() * 10 + 10) + 'px';
            
            document.body.appendChild(trail);
            
            setTimeout(() => trail.remove(), 1000);
        }
    });
}

// ====================================
// ROSE PETALS (PLUCKABLE)
// ====================================
function createRosePetals() {
    const roseContainer = document.getElementById('roseContainer');
    if (!roseContainer) return;
    
    const centerX = 50;
    const centerY = 50;
    const radius = 30;
    
    for (let i = 0; i < TOTAL_ROSE_PETALS; i++) {
        const angle = (i * 360 / TOTAL_ROSE_PETALS) * Math.PI / 180;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        const rotation = i * (360 / TOTAL_ROSE_PETALS);
        
        const petal = document.createElement('div');
        petal.className = 'rose-petal';
        petal.innerHTML = '🌹';
        petal.style.left = x + '%';
        petal.style.top = y + '%';
        petal.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
        petal.dataset.petalId = i;
        
        petal.addEventListener('click', function() {
            pluckPetal(this);
        });
        
        roseContainer.appendChild(petal);
        rosePetals.push(petal);
    }
}

function pluckPetal(petalElement) {
    // Animate petal plucking
    petalElement.style.transition = 'all 0.8s ease-out';
    petalElement.style.transform = `translate(-50%, -50%) translateY(-100px) rotate(${Math.random() * 720}deg) scale(0)`;
    petalElement.style.opacity = '0';
    
    // Create sparkle effect
    const rect = petalElement.getBoundingClientRect();
    for (let i = 0; i < 5; i++) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'fixed';
        sparkle.style.left = rect.left + 'px';
        sparkle.style.top = rect.top + 'px';
        sparkle.style.fontSize = '20px';
        sparkle.style.zIndex = '10000';
        sparkle.style.pointerEvents = 'none';
        
        const angle = (Math.random() * 360) * Math.PI / 180;
        const distance = Math.random() * 50 + 30;
        
        sparkle.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0)`, opacity: 0 }
        ], {
            duration: 800,
            easing: 'ease-out'
        });
        
        document.body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 800);
    }
    
    // Remove petal after animation
    setTimeout(() => {
        petalElement.remove();
        
        // Check if all petals are plucked
        const remainingPetals = document.querySelectorAll('.rose-petal').length;
        if (remainingPetals === 0) {
            showAllPetalsPluckedMessage();
        }
    }, 800);
}

function showAllPetalsPluckedMessage() {
    const message = document.createElement('div');
    message.className = 'petal-message';
    message.innerHTML = '🌹 All petals plucked! But my love remains eternal! 💕';
    message.style.position = 'fixed';
    message.style.top = '50%';
    message.style.left = '50%';
    message.style.transform = 'translate(-50%, -50%)';
    message.style.fontSize = '24px';
    message.style.fontWeight = 'bold';
    message.style.color = '#ff1744';
    message.style.textAlign = 'center';
    message.style.zIndex = '10001';
    message.style.background = 'rgba(255, 255, 255, 0.95)';
    message.style.padding = '30px';
    message.style.borderRadius = '20px';
    message.style.boxShadow = '0 10px 40px rgba(255, 23, 68, 0.3)';
    message.style.animation = 'popIn 0.5s ease-out';
    
    document.body.appendChild(message);
    
    createHeartBurst();
    
    setTimeout(() => {
        message.style.animation = 'popOut 0.5s ease-in';
        setTimeout(() => message.remove(), 500);
    }, 3000);
}

// ====================================
// MESSAGES
// ====================================
function showEncouragingMessage(count) {
    const messages = [
        "Are you sure? 🥺",
        "Please reconsider! 💕",
        "My heart is breaking... 💔",
        "Give me a chance! 🙏",
        "I promise to make you happy! 😊",
        "Think about all the good times! 🌟",
        "Don't you feel the connection? ✨",
        "I'll do anything! 🎁",
        "You're making a mistake! 😢",
        "Last chance to change your mind! 💖",
        "The YES button is right there! 👉"
    ];
    
    const messageIndex = Math.min(count - 1, messages.length - 1);
    showFloatingMessage(messages[messageIndex]);
}

function showFinalMessage() {
    const message = document.createElement('div');
    message.className = 'final-message';
    message.innerHTML = '❤️ I knew you\'d come around! The YES button awaits! ❤️';
    message.style.position = 'fixed';
    message.style.top = '20%';
    message.style.left = '50%';
    message.style.transform = 'translateX(-50%)';
    message.style.fontSize = '28px';
    message.style.fontWeight = 'bold';
    message.style.color = '#ff1744';
    message.style.textAlign = 'center';
    message.style.zIndex = '10001';
    message.style.animation = 'bounce 0.8s ease-in-out infinite';
    message.style.textShadow = '2px 2px 4px rgba(0,0,0,0.3)';
    
    document.body.appendChild(message);
}

function showSuccessMessage() {
    const message = document.createElement('div');
    message.className = 'success-message';
    message.innerHTML = '💕 YES! I knew you loved me! 💕<br><span style="font-size: 20px;">Preparing your celebration...</span>';
    message.style.position = 'fixed';
    message.style.top = '50%';
    message.style.left = '50%';
    message.style.transform = 'translate(-50%, -50%)';
    message.style.fontSize = '36px';
    message.style.fontWeight = 'bold';
    message.style.color = '#ff1744';
    message.style.textAlign = 'center';
    message.style.zIndex = '10002';
    message.style.background = 'rgba(255, 255, 255, 0.98)';
    message.style.padding = '50px';
    message.style.borderRadius = '30px';
    message.style.boxShadow = '0 20px 60px rgba(255, 23, 68, 0.4)';
    message.style.animation = 'heartBeat 0.5s ease-in-out infinite';
    
    document.body.appendChild(message);
}

function showFloatingMessage(text) {
    const message = document.createElement('div');
    message.className = 'floating-message';
    message.innerHTML = text;
    message.style.position = 'fixed';
    message.style.top = '15%';
    message.style.left = '50%';
    message.style.transform = 'translateX(-50%)';
    message.style.fontSize = '20px';
    message.style.fontWeight = 'bold';
    message.style.color = '#ff1744';
    message.style.textAlign = 'center';
    message.style.zIndex = '10001';
    message.style.background = 'rgba(255, 255, 255, 0.95)';
    message.style.padding = '20px 40px';
    message.style.borderRadius = '15px';
    message.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
    message.style.animation = 'fadeInOut 2s ease-in-out';
    
    document.body.appendChild(message);
    
    setTimeout(() => message.remove(), 2000);
}

// ====================================
// SCREEN EFFECTS
// ====================================
function shakeScreen() {
    document.body.style.animation = 'shake 0.5s ease-in-out';
    setTimeout(() => {
        document.body.style.animation = '';
    }, 500);
}

function createPoofEffect(x, y) {
    const poof = document.createElement('div');
    poof.innerHTML = '💨';
    poof.style.position = 'fixed';
    poof.style.left = x + 'px';
    poof.style.top = y + 'px';
    poof.style.fontSize = '30px';
    poof.style.zIndex = '10000';
    poof.style.animation = 'poof 0.6s ease-out';
    poof.style.pointerEvents = 'none';
    
    document.body.appendChild(poof);
    
    setTimeout(() => poof.remove(), 600);
}

// ====================================
// AUDIO (OPTIONAL)
// ====================================
function playRomanticSound() {
    // This would play a sound if you have an audio file
    // const audio = new Audio('romantic-sound.mp3');
    // audio.play();
    console.log('🎵 Playing romantic celebration music! 🎵');
}

// ====================================
// CSS ANIMATIONS (INJECTED)
// ====================================
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0) translateX(-50%); }
        50% { transform: translateY(-20px) translateX(-50%); }
    }
    
    @keyframes fadeInOut {
        0% { opacity: 0; transform: translateX(-50%) translateY(-20px); }
        20% { opacity: 1; transform: translateX(-50%) translateY(0); }
        80% { opacity: 1; transform: translateX(-50%) translateY(0); }
        100% { opacity: 0; transform: translateX(-50%) translateY(20px); }
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
        20%, 40%, 60%, 80% { transform: translateX(10px); }
    }
    
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
    
    @keyframes heartBeat {
        0%, 100% { transform: translate(-50%, -50%) scale(1); }
        25% { transform: translate(-50%, -50%) scale(1.1); }
        50% { transform: translate(-50%, -50%) scale(1); }
        75% { transform: translate(-50%, -50%) scale(1.1); }
    }
    
    @keyframes bounce {
        0%, 100% { transform: translateX(-50%) translateY(0); }
        50% { transform: translateX(-50%) translateY(-20px); }
    }
    
    @keyframes poof {
        0% { opacity: 1; transform: scale(0); }
        50% { opacity: 0.8; transform: scale(1.5); }
        100% { opacity: 0; transform: scale(2); }
    }
    
    @keyframes popIn {
        0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
        50% { transform: translate(-50%, -50%) scale(1.1); }
        100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
    }
    
    @keyframes popOut {
        0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
    }
    
    @keyframes rainbowShift {
        0% { opacity: 0; background-position: 0% 50%; }
        50% { opacity: 0.5; background-position: 100% 50%; }
        100% { opacity: 0; background-position: 0% 50%; }
    }
    
    @keyframes sadPetalFall {
        0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        100% { transform: translate(calc(-50% + var(--endX)), calc(-50% + var(--endY))) scale(0) rotate(180deg); opacity: 0; }
    }
    
    .floating-heart {
        position: fixed;
        bottom: -50px;
        animation: floatUp 7s linear;
        pointer-events: none;
        z-index: 1;
    }
    
    @keyframes floatUp {
        0% { bottom: -50px; opacity: 0; transform: translateX(0) rotate(0deg); }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { bottom: 110%; opacity: 0; transform: translateX(var(--drift, 0)) rotate(360deg); }
    }
    
    .petal {
        position: fixed;
        top: -50px;
        animation: petalFall 8s linear;
        pointer-events: none;
        z-index: 1;
    }
    
    @keyframes petalFall {
        0% { top: -50px; opacity: 0; transform: translateX(0) rotate(0deg); }
        10% { opacity: 1; }
        90% { opacity: 0.8; }
        100% { top: 110%; opacity: 0; transform: translateX(var(--drift, 100px)) rotate(360deg); }
    }
    
    .sparkle {
        position: fixed;
        animation: sparkleAnim 1s ease-out;
        pointer-events: none;
        z-index: 9999;
    }
    
    @keyframes sparkleAnim {
        0% { opacity: 0; transform: scale(0) rotate(0deg); }
        50% { opacity: 1; transform: scale(1.5) rotate(180deg); }
        100% { opacity: 0; transform: scale(0) rotate(360deg); }
    }
    
    .cursor-trail {
        position: fixed;
        pointer-events: none;
        z-index: 9998;
        animation: trailFade 1s ease-out;
        transform: translate(-50%, -50%);
    }
    
    @keyframes trailFade {
        0% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        100% { opacity: 0; transform: translate(-50%, -50%) scale(0); }
    }
    
    .rose-petal {
        position: absolute;
        cursor: pointer;
        transition: transform 0.3s ease;
        font-size: 24px;
        z-index: 10;
    }
    
    .rose-petal:hover {
        transform: translate(-50%, -50%) scale(1.3) !important;
        filter: brightness(1.2);
    }
`;
document.head.appendChild(style);

// ====================================
// CONSOLE MESSAGE
// ====================================
console.log('%c💕 Enhanced Romantic Proposal Script Loaded! 💕', 'color: #ff1744; font-size: 20px; font-weight: bold;');
console.log('%c✨ Features: Floating Hearts, Falling Petals, Sparkling Stars, Confetti, Heart Burst, Rainbow Animation, Cursor Trail, Playful NO Button, Interactive Rose Petals, and More! ✨', 'color: #f50057; font-size: 14px;');
