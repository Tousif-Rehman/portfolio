// Variable Declarations
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const bgAnimation = document.getElementById('bganimation');
const numOfColorBoxes = 600;

// Event Listeners
menuIcon.onclick = toggleMenu;
window.onscroll = handleScroll;

document.addEventListener('DOMContentLoaded', () => {
    handleUserVisit();
    setupPopupCloseEvents();
});

// Typed.js Text Animation Initialization
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Software Engineer', 'Data Analyst'],
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
    loop: true
});

// Background Animation for Color Boxes
for (let i = 0; i < numOfColorBoxes; i++) {
    const colorBox = document.createElement('div');
    colorBox.classList.add('colorbox');
    bgAnimation.append(colorBox);
}

// Function Definitions

// Toggle Menu
function toggleMenu() {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Handle Scroll for Sticky Header and Active Section Highlight
function handleScroll() {
    const top = window.scrollY;

    sections.forEach(section => {
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
            });
        }
    });

    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove active classes when scrolling
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Handle User Visit and Display Popup
function handleUserVisit() {
    const lastVisit = localStorage.getItem("lastVisit");
    const currentTime = new Date().getTime();
    const oneDayInMs = 24 * 60 * 60 * 1000;
    let message = "";

    if (!lastVisit) {
        message = "Hi there!<br>Welcome to my portfolio.";
        localStorage.setItem("lastVisit", currentTime);
    } else {
        const lastVisitTime = parseInt(lastVisit);

        if (currentTime - lastVisitTime > oneDayInMs) {
            message = "It's been a while!<br>Welcome back!";
        } else {
            message = "Welcome back!<br>Good to see you again.";
        }

        localStorage.setItem("lastVisit", currentTime);
    }

    document.getElementById("popup-message").innerHTML = message;
    document.getElementById("popup").style.display = "block";
}

// Setup Close Events for Popup
function setupPopupCloseEvents() {
    const closeButton = document.getElementById("closePopup");
    closeButton.onclick = hidePopup;

    document.onclick = (event) => {
        const popup = document.getElementById("popup");
        if (popup.style.display === "block" && event.target !== popup && event.target !== closeButton) {
            hidePopup();
        }
    };
}

// Hide Popup
function hidePopup() {
    const popup = document.getElementById("popup");
    popup.classList.add('hide');
}

// DOMContentLoaded to ensure the DOM is fully loaded before accessing elements
document.addEventListener('DOMContentLoaded', function() {
    
    // Element declarations
    const form = document.querySelector("form");
    const fullname = document.getElementById("name"); // corrected ID
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    // Function to send email using SMTP.js
    function sendEmail() {
        const bodyMessage = `
            Full Name: ${fullname.value}<br>
            Email: ${email.value}<br>
            Phone Number: ${phone.value}<br>
            Message: ${message.value}
        `;

        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "tousifrehman.ise.rymec@gmail.com",
            Password: "3FC85BE830FA894E674EF506D53B1A2BCFBD",
            To: 'tousifrehman.ise.rymec@gmail.com',
            From: "tousifrehman.ise.rymec@gmail.com",
            Subject: subject.value,
            Body: bodyMessage
        }).then(response => {
            if (response === "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                });
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "There was an issue sending the message.",
                    icon: "error"
                });
            }
        }).catch(error => {
            Swal.fire({
                title: "Error!",
                text: "Failed to send message. Please try again later.",
                icon: "error"
            });
        });
    }

    // Event listener for form submission
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        sendEmail();
    });
});


// Scroll Reveal.js Initialization

ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 1000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading, .ed-heading, .pr-heading, .con-heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .glowing-circle, .education-box, .project-box, .contact form ', { origin: 'bottom' });
// ScrollReveal().reveal('.sk-box, .home-content p', { origin: 'right' });
ScrollReveal().reveal('.home-content h1, .card-box', { origin: 'left' }); 
