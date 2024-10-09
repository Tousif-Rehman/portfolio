let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


function handleUserVisit() {
    const lastVisit = localStorage.getItem("lastVisit");
    const currentTime = new Date().getTime();
    const oneDayInMs = 24 * 60 * 60 * 1000;

    let message = ""; // Variable to hold the message for the popup

    if (!lastVisit) {
        // First-time visitor
        message = "Hi there!<br>Welcome to my portfolio.";
        localStorage.setItem("lastVisit", currentTime);
    } else {
        // Returning visitor
        const lastVisitTime = parseInt(lastVisit);

        // Check if it's been more than a week
        if (currentTime - lastVisitTime > oneDayInMs) {
            message = "It's been a while!<br>Welcome back!";
        } else {
            message = "Welcome back!<br>Good to see you again.";
        }

        // Update the last visit time
        localStorage.setItem("lastVisit", currentTime);
    }

    // Show the custom popup with the message
    document.getElementById("popup-message").innerHTML = message;
    document.getElementById("popup").style.display = "block"; // Display the popup
}

// Close popup functionality when user clicks anywhere on the website
document.addEventListener('DOMContentLoaded', () => {
    handleUserVisit();

    // Close the popup when the close button is clicked
    document.getElementById("closePopup").onclick = function() {
        hidePopup(); // Call the hide function
    }

    // Close the popup when the user clicks anywhere on the document
    document.onclick = function(event) {
        const popup = document.getElementById("popup");
        const closeButton = document.getElementById("closePopup");

        // Check if the clicked target is not the popup or the close button
        if (popup.style.display === "block" && event.target !== popup && event.target !== closeButton) {
            hidePopup(); // Call the hide function
        }
    }
});

// Function to hide the popup
function hidePopup() {
    const popup = document.getElementById("popup");
    popup.classList.add('hide'); // Add hide class to trigger fade-out
}





// Background animation for color boxes
const bganimation = document.getElementById('bganimation');
const numofcolorbox = 600;

for (let i = 0; i < numofcolorbox; i++) {
    const colorbox = document.createElement('div');
    colorbox.classList.add('colorbox');
    bganimation.append(colorbox);
}



// typed js

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Software Engineer', 'Data Analyst'],
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
    loop: true
});
