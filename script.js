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


// Close popup functionality
document.addEventListener('DOMContentLoaded', () => {
    handleUserVisit();

    // Close the popup when the close button is clicked
    document.getElementById("closePopup").onclick = function() {
        document.getElementById("popup").style.display = "none";
    }
});

// Background animation for color boxes
const bganimation = document.getElementById('bganimation');
const numofcolorbox = 400;

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