// This script runs after the HTML document has been fully loaded.
document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Toggle Functionality ---
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    // Check if both the button and the menu exist to avoid errors.
    if (menuBtn && mobileMenu) {
        // Add a 'click' event listener to the menu button.
        menuBtn.addEventListener('click', () => {
            // Toggle the 'hidden' class on the mobile menu to show or hide it.
            mobileMenu.classList.toggle('hidden');
        });
    }


    // --- Smooth Scrolling for Anchor Links ---
    // Select all anchor links that start with a '#'
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    // Loop through each anchor link.
    anchorLinks.forEach(anchor => {
        // Add a 'click' event listener to each link.
        anchor.addEventListener('click', function (e) {
            // Prevent the default browser behavior of jumping to the anchor.
            e.preventDefault();

            // Get the target element's ID from the href attribute.
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            // If the target element exists, scroll to it smoothly.
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth' // This enables the smooth scrolling animation.
                });
            }
        });
    });

});
