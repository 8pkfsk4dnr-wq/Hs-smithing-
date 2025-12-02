// Simple console message so you know the site is running
console.log("HS Smithing site is live");

// Button click example (works if you add a button with id="contactBtn")
const contactBtn = document.getElementById("contactBtn");

if (contactBtn) {
    contactBtn.addEventListener("click", () => {
        alert("Coming soon: Contact page for commissions.");
    });
}

// Fade-in effect for the whole page
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.transition = "1s";
        document.body.style.opacity = 1;
    }, 100);
});
