document.addEventListener("DOMContentLoaded", function () {

  // ===== Feedback Form Handling =====
  const feedbackForm = document.querySelector("form");

  // Only run this on the feedback page
  if (feedbackForm && document.title.includes("Feedback")) {
    feedbackForm.addEventListener("submit", function (event) {
      event.preventDefault();

      // Remove existing message if already shown
      const existingMessage = document.querySelector(".feedback-alert");
      if (existingMessage) {
        existingMessage.remove();
      }

      // Create success message
      const successMessage = document.createElement("div");
      successMessage.className = "alert alert-success mt-3 feedback-alert";
      successMessage.textContent = "Thank you! Your feedback has been submitted successfully.";

      // Add message below form
      feedbackForm.appendChild(successMessage);

      // Reset form fields
      feedbackForm.reset();
    });
  }


  // ===== Smooth Scroll for Availability Page =====
  const internalLinks = document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      const targetId = this.getAttribute("href");

      if (targetId.length > 1) {
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          event.preventDefault();

          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      }
    });
  });

});