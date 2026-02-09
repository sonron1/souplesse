// Initialize particles
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#FFD700'
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            }
        },
        opacity: {
            value: 0.1,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.05,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#FFD700',
            opacity: 0.1,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 0.2
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// Check URL hash on page load
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.hash === '#register') {
        switchToRegister();
    } else {
        switchToLogin();
    }
});

// Form switching animations
function switchToRegister() {
    const loginCard = document.querySelector('.login-card');
    const registerCard = document.querySelector('.register-card');

    loginCard.classList.add('slide-out-left');
    window.location.hash = 'register';

    setTimeout(() => {
        loginCard.classList.remove('active', 'slide-out-left');
        registerCard.classList.add('slide-in-right');

        setTimeout(() => {
            registerCard.classList.remove('slide-in-right');
            registerCard.classList.add('active');

            // Add entrance animation for form elements
            animateFormElements(registerCard);
        }, 50);
    }, 300);
}

function switchToLogin() {
    const loginCard = document.querySelector('.login-card');
    const registerCard = document.querySelector('.register-card');

    registerCard.classList.add('slide-out-right');
    window.location.hash = '';

    setTimeout(() => {
        registerCard.classList.remove('active', 'slide-out-right');
        loginCard.classList.add('slide-in-left');

        setTimeout(() => {
            loginCard.classList.remove('slide-in-left');
            loginCard.classList.add('active');

            // Add entrance animation for form elements
            animateFormElements(loginCard);
        }, 50);
    }, 300);
}

// Animate form elements
function animateFormElements(card) {
    const elements = card.querySelectorAll('.form-group, .auth-header, .social-login, .auth-switch');
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.4s ease';

        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Password toggle
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const button = input.parentElement.querySelector('.toggle-password');
    const icon = button.querySelector('i');

    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }

    // Add animation
    button.style.transform = 'translateY(-50%) scale(0.8)';
    setTimeout(() => {
        button.style.transform = 'translateY(-50%) scale(1)';
    }, 150);
}




// Form validation for Benin phone numbers
function validatePhone(phone) {
    // Format béninois: exactement 8 chiffres
    const re = /^[0-9]{8}$/;
    return re.test(phone);
}

function validatePassword(password) {
    return password.length >= 8;
}

function validatePasswordMatch(password, confirmPassword) {
    return password === confirmPassword;
}


// Format phone number input (permet uniquement les chiffres)
function formatPhoneInput(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
}

// Input animation states
function setInputState(inputElement, state) {
    const wrapper = inputElement.closest('.input-wrapper');
    wrapper.classList.remove('loading', 'success', 'error');

    if (state) {
        wrapper.classList.add(state);
    }
}

// Photo upload handler
document.addEventListener('DOMContentLoaded', function() {
    const photoInput = document.getElementById('profilePhoto');
    const photoPreview = document.getElementById('photoPreview');

    if (photoInput) {
        photoInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    photoPreview.classList.add('has-image');
                    photoPreview.innerHTML = `<img src="${event.target.result}" alt="Photo de profil">`;
                };
                reader.readAsDataURL(file);
            }
        });
    }
});

// Password strength checker
document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('registerPassword');
    if (passwordInput) {
        passwordInput.addEventListener('input', function() {
            const password = this.value;
            const strengthIndicator = document.querySelector('.password-strength');
            const strengthFill = document.querySelector('.strength-fill');
            const strengthText = document.querySelector('.strength-text');

            if (password.length > 0) {
                strengthIndicator.classList.add('show');

                let strength = 0;
                if (password.length >= 8) strength++;
                if (password.match(/[a-z]/)) strength++;
                if (password.match(/[A-Z]/)) strength++;
                if (password.match(/[0-9]/)) strength++;
                if (password.match(/[^a-zA-Z0-9]/)) strength++;

                strengthFill.className = 'strength-fill';
                strengthText.className = 'strength-text';

                if (strength <= 2) {
                    strengthFill.classList.add('weak');
                    strengthText.classList.add('weak');
                    strengthText.textContent = 'Faible';
                } else if (strength <= 3) {
                    strengthFill.classList.add('medium');
                    strengthText.classList.add('medium');
                    strengthText.textContent = 'Moyen';
                } else {
                    strengthFill.classList.add('strong');
                    strengthText.classList.add('strong');
                    strengthText.textContent = 'Fort';
                }
            } else {
                strengthIndicator.classList.remove('show');
            }
        });
    }
});

// Real-time validation for phone numbers and passwords
document.addEventListener('DOMContentLoaded', function() {
    const phoneInputs = document.querySelectorAll('input[type="tel"]');

    phoneInputs.forEach(input => {
        input.addEventListener('blur', function() {
            const value = this.value.trim();

            if (value) {
                if (validatePhone(value)) {
                    setInputState(this, 'success');
                } else {
                    setInputState(this, 'error');
                }
            }
        });

        input.addEventListener('focus', function() {
            setInputState(this, 'loading');
        });

        // Format phone input en temps réel - uniquement les chiffres
        input.addEventListener('input', function() {
            formatPhoneInput(this);
        });
    });

    // Confirm password validation
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const passwordInput = document.getElementById('registerPassword');

    if (confirmPasswordInput && passwordInput) {
        confirmPasswordInput.addEventListener('blur', function() {
            const password = passwordInput.value;
            const confirmPassword = this.value;

            if (confirmPassword && password) {
                if (validatePasswordMatch(password, confirmPassword)) {
                    setInputState(this, 'success');
                } else {
                    setInputState(this, 'error');
                }
            }
        });
    }
});

// Loading button animation
function setButtonLoading(button, isLoading) {
    if (isLoading) {
        button.classList.add('loading');
        button.disabled = true;
    } else {
        button.classList.remove('loading');
        button.disabled = false;
    }
}

// Success animation
function showSuccessAnimation() {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-animation';
    successDiv.innerHTML = '<div class="success-check"></div>';
    document.body.appendChild(successDiv);

    setTimeout(() => {
        document.body.removeChild(successDiv);
    }, 1500);
}

// Modal functions
function showModal() {
    document.getElementById('successModal').classList.add('show');
}

function closeModal() {
    document.getElementById('successModal').classList.remove('show');
}

// Form submissions
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const button = this.querySelector('button[type="submit"]');
    const phone = document.getElementById('loginPhone').value;
    const password = document.getElementById('loginPassword').value;

    // Validation
    if (!validatePhone(phone)) {
        setInputState(document.getElementById('loginPhone'), 'error');
        alert('Veuillez entrer un numéro de téléphone béninois valide (8 chiffres).\nExemple: 97123456');
        return;
    }

    if (!validatePassword(password)) {
        setInputState(document.getElementById('loginPassword'), 'error');
        alert('Le mot de passe doit contenir au moins 8 caractères.');
        return;
    }

    // Simulate login
    setButtonLoading(button, true);

    setTimeout(() => {
        setButtonLoading(button, false);
        showSuccessAnimation();

        setTimeout(() => {
            alert(`Connexion réussie ! Bienvenue au +229 ${phone.substring(0, 2)}******${phone.substring(6)}`);
            // window.location.href = 'dashboard.html';
        }, 1000);
    }, 1500);
});

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const button = this.querySelector('button[type="submit"]');
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const phone = document.getElementById('registerPhone').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const termsAccepted = document.getElementById('termsAccepted').checked;
    const photoFile = document.getElementById('profilePhoto').files[0];

    // Validation
    if (!firstName || !lastName) {
        alert('Veuillez entrer votre nom et prénom.');
        return;
    }

    if (!validatePhone(phone)) {
        setInputState(document.getElementById('registerPhone'), 'error');
        alert('Veuillez entrer un numéro de téléphone béninois valide (8 chiffres).\nExemple: 97123456');
        return;
    }

    if (!validatePassword(password)) {
        setInputState(document.getElementById('registerPassword'), 'error');
        alert('Le mot de passe doit contenir au moins 8 caractères.');
        return;
    }

    if (!validatePasswordMatch(password, confirmPassword)) {
        setInputState(document.getElementById('confirmPassword'), 'error');
        alert('Les mots de passe ne correspondent pas.');
        return;
    }

    if (!termsAccepted) {
        alert('Veuillez accepter les conditions d\'utilisation.');
        return;
    }

    // Simulate registration
    setButtonLoading(button, true);

    setTimeout(() => {
        setButtonLoading(button, false);
        showSuccessAnimation();

        setTimeout(() => {
            showModal();
        }, 1000);
    }, 2000);
});


// Smooth scrolling for mobile
document.addEventListener('DOMContentLoaded', function() {
    // Prevent zoom on double tap
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);

    // Auto-focus first input
    setTimeout(() => {
        const firstInput = document.querySelector('.auth-card.active input');
        if (firstInput) {
            firstInput.focus();
        }
    }, 500);
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const activeCard = document.querySelector('.auth-card.active');
        if (activeCard) {
            const submitButton = activeCard.querySelector('button[type="submit"]');
            if (submitButton && !submitButton.disabled) {
                submitButton.click();
            }
        }
    }
});

// Add floating animation to elements
function addFloatingAnimation() {
    const floatingElements = document.querySelectorAll('.floating-element');
    floatingElements.forEach(element => {
        element.style.animationDelay = Math.random() * 2 + 's';
        element.style.animationDuration = (Math.random() * 3 + 5) + 's';
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
    addFloatingAnimation();

    // Animate initial form elements
    setTimeout(() => {
        const activeCard = document.querySelector('.auth-card.active');
        if (activeCard) {
            animateFormElements(activeCard);
        }
    }, 100);
});

// Performance optimizations
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler
const handleScroll = debounce(() => {
    const scrollTop = window.pageYOffset;
    const navbar = document.querySelector('.navbar');

    if (scrollTop > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
    }
}, 10);

window.addEventListener('scroll', handleScroll);

// Preload images
function preloadImages() {
    const images = ['images/logo.jpg'];
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

preloadImages();

// Error handling
window.addEventListener('error', function(e) {
    console.error('Une erreur s\'est produite:', e.error);
});

// Cleanup on page unload
window.addEventListener('beforeunload', function() {
    // Clear any timeouts
    const timeouts = window.setTimeout(() => {}, 0);
    for (let i = 0; i < timeouts; i++) {
        window.clearTimeout(i);
    }
});