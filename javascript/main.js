// Main JavaScript file for CV Profile
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize animations and interactions
    initializeAnimations();
    initializeSkillBars();
    initializeHoverEffects();
    initializeSmoothScrolling();
    
});

/**
 * Initialize page animations
 */
function initializeAnimations() {
    // Add entrance animations to sections
    const sections = document.querySelectorAll('.section');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
}

/**
 * Initialize skill bar animations
 */
function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const skillObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const progress = progressBar.getAttribute('data-progress');
                
                // Animate skill bar
                setTimeout(() => {
                    progressBar.style.width = progress + '%';
                }, 300);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

/**
 * Initialize hover effects
 */
function initializeHoverEffects() {
    // Profile photo hover effect
    const profilePhoto = document.querySelector('.profile-photo');
    if (profilePhoto) {
        profilePhoto.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotate(5deg)';
        });
        
        profilePhoto.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    }
    
    // Section titles hover effect
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        title.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(10deg)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        
        title.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
    
    // Experience items hover effect
    const experienceItems = document.querySelectorAll('.experience-item, .project-item, .education-item');
    experienceItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px) scale(1.02)';
            this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) scale(1)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });
}

/**
 * Initialize smooth scrolling for internal links
 */
function initializeSmoothScrolling() {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Handle scroll-to-top functionality (if needed)
    let scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #FFD700, #FFA500);
        color: #1a1a1a;
        border: 2px solid #8B4513;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(255, 215, 0, 0.4);
        transition: all 0.3s ease;
        opacity: 0;
        visibility: hidden;
        z-index: 1000;
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top functionality
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    scrollToTopBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.boxShadow = '0 6px 20px rgba(255, 215, 0, 0.6)';
        this.style.background = 'linear-gradient(135deg, #FFA500, #FFD700)';
    });
    
    scrollToTopBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 4px 15px rgba(255, 215, 0, 0.4)';
        this.style.background = 'linear-gradient(135deg, #FFD700, #FFA500)';
    });
}

/**
 * Utility function to add typewriter effect to text
 */
function typewriterEffect(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function typeWriter() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    
    typeWriter();
}

/**
 * Utility function to animate numbers (for statistics, if needed)
 */
function animateNumber(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        element.textContent = Math.floor(current);
        
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, 16);
}

/**
 * Add print functionality
 */
function initializePrintFunction() {
    // Add print button (optional)
    const printBtn = document.createElement('button');
    printBtn.innerHTML = '<i class="fas fa-print"></i> Print CV';
    printBtn.className = 'print-btn';
    printBtn.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #8B4513, #A0522D);
        color: #FFD700;
        border: 2px solid #FFD700;
        padding: 12px 20px;
        border-radius: 25px;
        cursor: pointer;
        font-family: inherit;
        font-weight: 500;
        box-shadow: 0 4px 15px rgba(139, 69, 19, 0.4);
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    document.body.appendChild(printBtn);
    
    printBtn.addEventListener('click', function() {
        window.print();
    });
    
    printBtn.addEventListener('mouseenter', function() {
        this.style.background = 'linear-gradient(135deg, #A0522D, #8B4513)';
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 6px 20px rgba(255, 215, 0, 0.5)';
    });
    
    printBtn.addEventListener('mouseleave', function() {
        this.style.background = 'linear-gradient(135deg, #8B4513, #A0522D)';
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 15px rgba(139, 69, 19, 0.4)';
    });
}

/**
 * Initialize theme switching (light/dark mode) - Optional feature
 */
function initializeThemeSwitch() {
    const themeBtn = document.createElement('button');
    themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
    themeBtn.className = 'theme-btn';
    themeBtn.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #FFD700, #FFA500);
        color: #1a1a1a;
        border: 2px solid #8B4513;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(255, 215, 0, 0.4);
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    document.body.appendChild(themeBtn);
    
    let isDarkMode = false;
    
    themeBtn.addEventListener('click', function() {
        isDarkMode = !isDarkMode;
        
        if (isDarkMode) {
            // Apply darker copper theme
            document.body.style.background = 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #8B4513 100%)';
            this.innerHTML = '<i class="fas fa-sun"></i>';
            this.style.background = 'linear-gradient(135deg, #FFA500, #FFD700)';
        } else {
            // Apply lighter copper theme
            document.body.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 50%, #8B4513 100%)';
            this.innerHTML = '<i class="fas fa-moon"></i>';
            this.style.background = 'linear-gradient(135deg, #FFD700, #FFA500)';
        }
    });
}

// Initialize optional features
document.addEventListener('DOMContentLoaded', function() {
    // Uncomment these lines if you want to add these features
    // initializePrintFunction();
    // initializeThemeSwitch();
});

// Export functions for potential external use
window.CVProfile = {
    typewriterEffect,
    animateNumber,
    initializePrintFunction,
    initializeThemeSwitch
};

/**
 * Download CV functionality
 */
function downloadCV() {
    // Method 1: Print to PDF
    window.print();
    
    // Method 2: If you have a CV file, uncomment below and replace with your CV file path
    // const link = document.createElement('a');
    // link.href = 'path/to/your/cv.pdf'; // Replace with actual CV file path
    // link.download = 'Le_Phan_Gia_Minh_CV.pdf';
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
}

// Make downloadCV function globally available
window.downloadCV = downloadCV;