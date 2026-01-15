document.addEventListener("DOMContentLoaded", function() {
    // Select all elements with the 'scroll-reveal-item' class
    const revealElements = document.querySelectorAll("p:not(.subhead), .topParagraph");

    // Configure the observer
    const observerOptions = {
        root: null, // observe the viewport
        rootMargin: "0px",
        threshold: 0.2 // trigger when 10% of the item is visible
    };

    // Callback function to handle the intersection
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the reveal class when the element enters the viewport
                entry.target.classList.add("is-revealed");
                // Optional: Stop observing the element once revealed
                observer.unobserve(entry.target);
            }
        });
    };

    // Create the observer and start observing each element
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    revealElements.forEach(el => {
        observer.observe(el);
    });
});