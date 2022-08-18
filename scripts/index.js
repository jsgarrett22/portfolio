const contact = document.querySelector('a[href="#contact.html"]'); // use css element has attribute pseudo selector
const contactOverlay = document.querySelector('#contact-overlay');

contact.addEventListener('click', () => {
    contactOverlay.style.display = "block";
    console.log("Turning overlay ON.");
});

contactOverlay.addEventListener('click', () => {
    contactOverlay.style.display = "none";
    console.log("Turning overlay OFF");
});

