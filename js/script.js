// js/script.js

document.addEventListener('DOMContentLoaded', function () {
    // Footer: Update current year
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Modal Form Submission
    const bookingForm = document.getElementById('bookingForm');
    const formStatusDiv = document.getElementById('form-status');

    if (bookingForm && formStatusDiv) {
        bookingForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default HTML form submission

            // Basic client-side validation (HTML5 'required' attributes handle most of this)
            // You could add more complex validation here if needed.
            const name = document.getElementById('modalName').value.trim();
            const email = document.getElementById('modalEmail').value.trim();
            const message = document.getElementById('modalMessage').value.trim();

            if (!name || !email || !message) {
                displayFormStatus('Please fill out all required fields.', 'error');
                return;
            }

            // Simulate form submission
            // In a real application, you would send this data to a server
            // using fetch() or XMLHttpRequest.
            // Example:
            // const formData = new FormData(bookingForm);
            // fetch('/your-server-endpoint', {
            //     method: 'POST',
            //     body: formData
            // })
            // .then(response => response.json())
            // .then(data => {
            //     if (data.success) {
            //         displayFormStatus('Thank you! Your session request has been submitted.', 'success');
            //         bookingForm.reset(); // Clear the form
            //     } else {
            //         displayFormStatus('Sorry, there was an error. Please try again.', 'error');
            //     }
            // })
            // .catch(error => {
            //     console.error('Error submitting form:', error);
            //     displayFormStatus('An unexpected error occurred. Please try again later.', 'error');
            // });

            // For this example, we'll just show a success message and reset the form.
            // This simulates a successful submission without a backend.
            displayFormStatus('Thank you! Your request has been received. We will contact you shortly.', 'success');
            bookingForm.reset();

            // Optional: Close the modal after a short delay
            setTimeout(() => {
                const modalElement = document.getElementById('bookSessionModal');
                if (modalElement) {
                    const modalInstance = bootstrap.Modal.getInstance(modalElement);
                    if (modalInstance) {
                        modalInstance.hide();
                    }
                }
                // Clear status message after modal is hidden or after some time
                setTimeout(()_ => {
                    displayFormStatus('', ''); // Clear message
                }, 2000);
            }, 3000); // Hide modal after 3 seconds
        });
    }

    function displayFormStatus(message, type) {
        if (formStatusDiv) {
            formStatusDiv.textContent = message;
            formStatusDiv.className = ''; // Clear existing classes
            if (type === 'success') {
                formStatusDiv.classList.add('alert', 'alert-success'); // Using Bootstrap alert styles
            } else if (type === 'error') {
                formStatusDiv.classList.add('alert', 'alert-danger');
            }
        }
    }

    // Smooth scroll for anchor links (e.g., hero CTA to #practice)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const hrefAttribute = this.getAttribute('href');
            // Ensure it's not just a lone '#'
            if (hrefAttribute && hrefAttribute.length > 1) {
                const targetElement = document.querySelector(hrefAttribute);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

});
