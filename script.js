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

ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 1000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading, .ed-heading, .pr-heading, .con-heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .glowing-circle, .education-box, .project-box, .contact form ', { origin: 'bottom' });
ScrollReveal().reveal('.sk-box, .home-content p', { origin: 'right' });
ScrollReveal().reveal('.home-content h1, .card-box', { origin: 'left' });


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


//smtp js

// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.querySelector("form");
//     const fullname = document.getElementById("fullname");
//     const email = document.getElementById("email");
//     const phone = document.getElementById("phone");
//     const subject = document.getElementById("subject");
//     const mess = document.getElementById("message");

//     function sendEmail() {
//         const bodymessage = `Full Name: ${fullname.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;

//         Email.send({
//             Host : "smtp.elasticemail.com",
//             Username : "tousifrehman.ise.rymec@gmail.com",
//             Password : "3FC85BE830FA894E674EF506D53B1A2BCFBD",
//             To : 'tousifrehman.ise.rymec@gmail.com',
//             From : "tousifrehman.ise.rymec@gmail.com",
//             Subject : subject.value,
//             Body : bodymessage
//         }).then(
//             message => {
//                 if (message == "OK") {
//                     Swal.fire({
//                         title: "Success!",
//                         text: "Message sent successfully!",
//                         icon: "success"
//                     });
//                 }
//             }
//         );
//     }

//     form.addEventListener("submit", (e) => {
//         e.preventDefault();
//         sendEmail();
//     });
// });  