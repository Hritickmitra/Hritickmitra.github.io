// Wait for the HTML document to fully load before running the script
document.addEventListener("DOMContentLoaded", function () {
  // Select all elements with the class 'fade-in'
  const fadeElements = document.querySelectorAll(".fade-in");

  // Set up the Intersection Observer
  const observerOptions = {
    root: null, // Use the viewport as the container
    rootMargin: "0px",
    threshold: 0.15, // Trigger when 15% of the element is visible
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      // If the element is in view, add the 'visible' class
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        // Unobserve the element so it only fades in once
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Attach the observer to each fade-in element
  fadeElements.forEach((element) => {
    observer.observe(element);
  });
});
