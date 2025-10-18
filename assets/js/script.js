// Sparsan Website JavaScript

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav-content')) {
            navMenu?.classList.remove('active');
            mobileMenuToggle?.classList.remove('active');
        }
    });
});

// Pricing Toggle (Monthly/Annual)
const billingToggle = document.getElementById('billingToggle');
if (billingToggle) {
    billingToggle.addEventListener('change', function() {
        const monthlyPrices = document.querySelectorAll('.monthly-price');
        const annualPrices = document.querySelectorAll('.annual-price');
        
        if (this.checked) {
            // Show annual prices
            monthlyPrices.forEach(price => price.style.display = 'none');
            annualPrices.forEach(price => price.style.display = 'inline');
        } else {
            // Show monthly prices
            monthlyPrices.forEach(price => price.style.display = 'inline');
            annualPrices.forEach(price => price.style.display = 'none');
        }
    });
}

// ROI Calculator
const calculateROI = () => {
    const agents = parseInt(document.getElementById('agents')?.value || 2);
    const salary = parseInt(document.getElementById('salary')?.value || 40000);
    const tools = parseInt(document.getElementById('tools')?.value || 5000);
    const automation = parseFloat(document.getElementById('automation')?.value || 0.6);
    
    // Current cost
    const currentCost = (agents * salary) + tools + 10000; // +10000 for overhead
    
    // Cost with Sparsan
    const reducedAgents = Math.ceil(agents * (1 - automation));
    const sparsanCost = 149 * 12; // Professional plan
    const newCost = (reducedAgents * salary) + sparsanCost;
    
    // Savings
    const savings = currentCost - newCost;
    const savingsPercent = Math.round((savings / currentCost) * 100);
    
    // Update display
    if (document.getElementById('currentCost')) {
        document.getElementById('currentCost').textContent = `$${currentCost.toLocaleString()}`;
        document.getElementById('newCost').textContent = `$${newCost.toLocaleString()}`;
        document.getElementById('savings').textContent = `$${savings.toLocaleString()}`;
        document.getElementById('savingsPercent').textContent = `${savingsPercent}% Reduction`;
    }
};

// Add event listeners to calculator inputs
const calculatorInputs = ['agents', 'salary', 'tools', 'automation'];
calculatorInputs.forEach(inputId => {
    const input = document.getElementById(inputId);
    if (input) {
        input.addEventListener('input', calculateROI);
        input.addEventListener('change', calculateROI);
    }
});

// Initialize calculator on page load
if (document.getElementById('agents')) {
    calculateROI();
}

// Contact Form - No JavaScript handling
// Let Netlify handle the form completely with native HTML submission
// RudderStack tracking will happen on the success page load instead

// Smooth scroll for anchor links
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

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements with animation classes
document.querySelectorAll('.feature-card, .step, .testimonial-card, .pricing-card').forEach(el => {
    observer.observe(el);
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar?.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !navbar?.classList.contains('scroll-down')) {
        // Scrolling down
        navbar?.classList.remove('scroll-up');
        navbar?.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navbar?.classList.contains('scroll-down')) {
        // Scrolling up
        navbar?.classList.remove('scroll-down');
        navbar?.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
});

// Statistics counter animation
const animateCounter = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value.toLocaleString();
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};

// Observe stat numbers for counter animation
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target;
            const endValue = parseInt(statNumber.getAttribute('data-count') || statNumber.textContent.replace(/[^0-9]/g, ''));
            if (endValue) {
                animateCounter(statNumber, 0, endValue, 2000);
                statObserver.unobserve(statNumber);
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number, .metric-value').forEach(stat => {
    statObserver.observe(stat);
});

// FAQ Accordion (if needed in future)
document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('h3');
    if (question) {
        question.style.cursor = 'pointer';
        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    }
});

// Add loading state to buttons (removed - was interfering with Netlify Forms)

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Copy to clipboard functionality (for code snippets if needed)
const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Copied to clipboard');
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
};

// Toast notification system
const showToast = (message, type = 'success') => {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: ${type === 'success' ? 'var(--success)' : 'var(--error)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
};

// Add CSS for toast animations
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
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .animate-in {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .navbar.scroll-down {
        transform: translateY(-100%);
        transition: transform 0.3s ease;
    }
    
    .navbar.scroll-up {
        transform: translateY(0);
        transition: transform 0.3s ease;
    }
    
    @media (max-width: 768px) {
        .nav-menu.active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            padding: 1rem;
            gap: 0.5rem;
        }
        
        .mobile-menu-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .mobile-menu-toggle.active span:nth-child(2) {
            opacity: 0;
        }
        
        .mobile-menu-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    }
`;
document.head.appendChild(style);

// Initialize all features when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('Sparsan website loaded successfully');
    
    // Add any initialization code here
    
    // Track page views (you would integrate with your analytics)
    if (typeof gtag !== 'undefined') {
        gtag('config', 'YOUR-GA-ID', {
            page_path: window.location.pathname
        });
    }
});

// Export functions for use in other scripts
window.Sparsan = {
    showToast,
    copyToClipboard,
    calculateROI
};