// Create floating particles (more particles for advanced effect)
for(let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 10 + 's';
    particle.style.animationDuration = (Math.random() * 5 + 8) + 's';
    document.body.appendChild(particle);
}

// Navigation functionality
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('click', function() {
        navItems.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
        
        // Add click effect
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 100);
    });
});

// Simulate loading subscriber count with animation
setTimeout(() => {
    const subCount = Math.floor(Math.random() * 50000) + 10000;
    const viewCount = Math.floor(Math.random() * 5000000) + 1000000;
    
    animateValue('sub-count', 0, subCount, 2000);
    animateValue('sub-header', 0, subCount, 2000);
    animateValue('view-count', 0, viewCount, 2000);
    
    // Animate progress bars
    document.getElementById('sub-bar').style.width = '75%';
    document.getElementById('engage-bar').style.width = '62%';
    document.getElementById('growth-bar').style.width = '88%';
    
    // Update percentage values
    setTimeout(() => {
        document.getElementById('engage-count').textContent = '62%';
        document.getElementById('growth-count').textContent = '+18%';
    }, 1000);
}, 1000);

// Number animation function
function animateValue(id, start, end, duration) {
    const element = document.getElementById(id);
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current).toLocaleString();
    }, 16);
}

// Simulate loading videos with more detailed data
setTimeout(() => {
    const videoList = document.getElementById('video-list');
    videoList.innerHTML = `
        <div class="video-item">
            <div class="video-title">Epic Gaming Montage Vol. 47</div>
            <div class="video-date">2 days ago • 125K views</div>
        </div>
        <div class="video-item">
            <div class="video-title">Stream Highlights: Intense Battles</div>
            <div class="video-date">4 days ago • 89K views</div>
        </div>
        <div class="video-item">
            <div class="video-title">Tutorial: Pro Tips & Tricks</div>
            <div class="video-date">1 week ago • 156K views</div>
        </div>
        <div class="video-item">
            <div class="video-title">Community Challenge Winners</div>
            <div class="video-date">1 week ago • 67K views</div>
        </div>
        <div class="video-item">
            <div class="video-title">Behind The Scenes: Setup Tour</div>
            <div class="video-date">2 weeks ago • 203K views</div>
        </div>
        <div class="video-item">
            <div class="video-title">Q&A Session with Fans</div>
            <div class="video-date">2 weeks ago • 112K views</div>
        </div>
    `;
    
    // Add click handlers to video items
    document.querySelectorAll('.video-item').forEach(item => {
        item.addEventListener('click', function() {
            this.style.transform = 'translateX(15px)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
}, 1500);

// Animate Discord stats
setTimeout(() => {
    animateValue('discord-members', 0, 10234, 1500);
    animateValue('discord-online', 0, 1456, 1500);
}, 2000);

// Feature card interactions
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('click', function() {
        // Add ripple effect
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.background = 'rgba(0, 255, 242, 0.5)';
        ripple.style.borderRadius = '50%';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        ripple.style.pointerEvents = 'none';
        
        this.style.position = 'relative';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(20);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Simulate real-time ping updates
setInterval(() => {
    const pingValues = [23, 24, 25, 26, 27, 28, 29];
    const randomPing = pingValues[Math.floor(Math.random() * pingValues.length)];
    const pingElement = document.querySelector('.header-stats .stat-box:last-child .stat-value');
    if (pingElement) {
        pingElement.textContent = randomPing + 'ms';
    }
}, 5000);

// Add hover sound effect simulation (visual feedback)
document.querySelectorAll('.ui-button, .feature-btn, .cta-btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.2s ease';
    });
});

// Parallax effect for profile hex
document.addEventListener('mousemove', (e) => {
    const hex = document.querySelector('.profile-hex');
    if (hex) {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
        hex.style.transform = `translate(-50%, -50%) rotate(${moveX}deg) translateY(${moveY}px)`;
    }
});

// Smooth scroll for navigation
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

// Add glow effect on scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const header = document.querySelector('.ui-header');
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        header.style.boxShadow = '0 5px 40px rgba(112, 0, 255, 0.5)';
    } else {
        header.style.boxShadow = '0 0 30px rgba(112, 0, 255, 0.3)';
    }
    
    lastScroll = currentScroll;
});

// Console Easter Egg
console.log('%c07STINKY NEURAL INTERFACE', 'color: #00fff2; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px #00fff2;');
console.log('%cSystem Status: ONLINE', 'color: #0f0; font-size: 14px;');
console.log('%cWelcome to the mainframe...', 'color: #7000ff; font-size: 12px;');

// Dynamic time-based greeting
function updateGreeting() {
    const hour = new Date().getHours();
    let greeting = 'SYSTEM ONLINE';
    
    if (hour >= 5 && hour < 12) {
        greeting = 'GOOD MORNING // ONLINE';
    } else if (hour >= 12 && hour < 18) {
        greeting = 'GOOD AFTERNOON // ONLINE';
    } else if (hour >= 18 && hour < 22) {
        greeting = 'GOOD EVENING // ONLINE';
    } else {
        greeting = 'LATE NIGHT MODE // ACTIVE';
    }
    
    const statusElement = document.querySelector('.status-value');
    if (statusElement) {
        statusElement.textContent = greeting;
    }
}

updateGreeting();

// Initialize tooltip system (for future enhancements)
document.querySelectorAll('[data-tooltip]').forEach(element => {
    element.addEventListener('mouseenter', function() {
        const tooltip = document.createElement('div');
        tooltip.className = 'custom-tooltip';
        tooltip.textContent = this.getAttribute('data-tooltip');
        document.body.appendChild(tooltip);
        
        const rect = this.getBoundingClientRect();
        tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
        tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
    });
    
    element.addEventListener('mouseleave', function() {
        document.querySelector('.custom-tooltip')?.remove();
    });
});

// Performance monitor
setInterval(() => {
    const systemStatus = document.querySelector('.status-value');
    if (systemStatus && Math.random() > 0.95) {
        systemStatus.style.color = '#ff0';
        systemStatus.textContent = 'PROCESSING...';
        setTimeout(() => {
            systemStatus.style.color = '#0f0';
            updateGreeting();
        }, 500);
    }
}, 10000);