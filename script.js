// Variable Declarations
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

// Event Listeners
menuIcon.onclick = toggleMenu; // Toggle menu on click
window.addEventListener('scroll', handleScroll); // Handle scroll events

// Toggle Menu
function toggleMenu() {
    menuIcon.classList.toggle('bx-x'); // Change menu icon
    navbar.classList.toggle('active'); // Toggle navbar visibility
}

// Handle Scroll for Sticky Header and Active Section Highlight
function handleScroll() {
    const top = window.scrollY;

    sections.forEach(section => {
        const offset = section.offsetTop - 150; // Adjust for your layout
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        // Check if scroll position is within section's bounds
        if (top >= offset && top < offset + height) {
            // Remove 'active' class from all nav links
            navLinks.forEach(link => link.classList.remove('active'));

            // Add 'active' class to current section's nav link
            const activeLink = document.querySelector(`header nav a[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });

    // Sticky header functionality
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
}

// Close the mobile navbar when a nav link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x'); // Change menu icon back
        navbar.classList.remove('active'); // Hide navbar
    });
});


document.addEventListener('DOMContentLoaded', () => {
    handleUserVisit();
    setupPopupCloseEvents();
});

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

    // Close popup when close button is clicked
    closeButton.onclick = hidePopup;

    // Close popup when clicking outside of it
    document.onclick = (event) => {
        const popup = document.getElementById("popup");
        if (popup.style.display === "block" && event.target !== popup && event.target !== closeButton) {
            hidePopup();
        }
    };

    // Close popup when user scrolls
    window.onscroll = () => {
        const popup = document.getElementById("popup");
        if (popup.style.display === "block") {
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
            SecureToken : "a38c08b7-64f4-4493-8a44-e3650b38981c",
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
                    text: "Failed to send message. Please try again later.",
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

    function checkInputs() {
        const items = document.querySelectorAll(".item");

        for (const item of items) {
            if (item.value == "") {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }

            if (items[1].value != "") {
                checkEmail();
            }

            if (items[2].value !== "") {
                checkNumber();
            }

            items[1].addEventListener("keyup", () => {
                checkEmail();
            });

            items[2].addEventListener("keyup", () => {
                checkNumber();
            });

            item.addEventListener("keyup", () => {
                if (item.value != "") {
                    item.classList.remove("error");
                    item.parentElement.classList.remove("error");
                }
                else {
                    item.classList.add("error");
                    item.parentElement.classList.add("error");
                }
            });
        }
    }

    function checkEmail() {
        const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
        const errorTxtEmail = document.querySelector(".error-txt.email");

        if (!email.value.match(emailRegex)) {
            email.classList.add("error");
            email.parentElement.classList.add("error");

            if (email.value != "") {
                errorTxtEmail.innerText = "Enter a valid email address";
            }
            else {
                errorTxtEmail.innerText = "Email address can't be blank!";
            }
        }
        else {
            email.classList.remove("error");
            email.parentElement.classList.remove("error");
        }
    }

    function checkNumber() {
        const phoneRegex = /^[0-9]{10}$/; // Example regex for 10-digit phone numbers
        const errorTxtPhone = document.querySelector(".error-txt.phone");

        if (!phone.value.match(phoneRegex)) {
            phone.classList.add("error");
            phone.parentElement.classList.add("error");

            if (phone.value !== "") {
                errorTxtPhone.innerText = "Enter a valid phone number (10 digits)";
            } else {
                errorTxtPhone.innerText = "Phone number can't be blank!";
            }
        } else {
            phone.classList.remove("error");
            phone.parentElement.classList.remove("error");
        }
    }

    // Event listener for form submission
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        checkInputs();

        if (!fullname.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !subject.classList.contains("error") && !message.classList.contains("error")) {
            sendEmail();

            form.reset();
            return false;
        }
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
ScrollReveal().reveal('.home-img, .glowing-circle, .education-box, .project-box, .contact form, .skills-grid', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .home-content p, .card-box', { origin: 'left' }); 


// Typed.js Text Animation Initialization
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer','Cybersecurity Analyst', 'Software Engineer', 'Data Analyst'],
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
    loop: true
});