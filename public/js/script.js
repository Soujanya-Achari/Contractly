document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


function openLogin() {
    // Clear session or token from localStorage/sessionStorage
    localStorage.removeItem("authToken"); // Replace "authToken" with your token key if different
    localStorage.removeItem("userRole");  // Optional: If you're storing the user's role
    sessionStorage.clear();               // Optional: Clear session storage if used

    // Redirect to the login page
    window.location.href = "index.html"; // Replace "login.html" with your desired page
}

function goBack() {
    window.history.back();
}


// Function to show alert or redirect to sign-up page
function openSignup() {
    // You can replace the alert with a redirection to your signup page.
    window.location.href = "signup1.html";
}
function openSignup1() {
    // You can replace the alert with a redirection to your signup page.
    window.location.href = "login.html";
}
function openAccount() {
    // You can replace the alert with a redirection to your signup page.
    window.location.href = "account.html";
}

function openProjectPortal() {
    // You can replace the alert with a redirection to your signup page.
    window.location.href = "project.html";
}
function OpenApply() {
    // You can replace the alert with a redirection to your signup page.
    window.location.href = "apply.html";
}

function openClientProject() {
    // You can replace the alert with a redirection to your signup page.
    window.location.href = "searchproject.html";
}

function openWorkerProject() {
    // You can replace the alert with a redirection to your signup page.
    window.location.href = "works.html";
}


// Mobile menu toggle
const nav = document.querySelector('nav');
const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

// Toggle the navigation bar for mobile view
menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close the mobile menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

  

//search projrct
// In the HTML file (e.g., searchProjects.html or trackProjects.html)
