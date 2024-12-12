// script.js

// Function to detect if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
}

// Function to handle the activation of sections
function handleScroll() {
    const sections = document.querySelectorAll('.section');

    sections.forEach((section) => {
        const text = section.querySelector('.text');
        const image = section.querySelector('.image');

        if (isInViewport(section)) {
            text.classList.add('active');
            image.classList.add('active');
        } else {
            text.classList.remove('active');
            image.classList.remove('active');
        }
    });
}

// Add Event Listener for Scrolling
window.addEventListener('scroll', handleScroll);

// Run handleScroll on page load to activate visible sections
window.onload = handleScroll;
