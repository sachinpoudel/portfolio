document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Reset error messages
      const errorMessages = document.querySelectorAll(".error-message")
      errorMessages.forEach((message) => {
        message.style.display = "none"
        message.textContent = ""
      })

      // Get form fields
      const name = document.getElementById("name")
      const email = document.getElementById("email")
      const subject = document.getElementById("subject")
      const message = document.getElementById("message")

      let isValid = true

      // Validate name
      if (name.value.trim() === "") {
        showError(name, "Name is required")
        isValid = false
      }

      // Validate email
      if (email.value.trim() === "") {
        showError(email, "Email is required")
        isValid = false
      } else if (!isValidEmail(email.value)) {
        showError(email, "Please enter a valid email address")
        isValid = false
      }

      // Validate subject
      if (subject.value.trim() === "") {
        showError(subject, "Subject is required")
        isValid = false
      }

      // Validate message
      if (message.value.trim() === "") {
        showError(message, "Message is required")
        isValid = false
      }

      // If form is valid, submit it
      if (isValid) {
        // In a real application, you would send the form data to a server
        // For this example, we'll just show a success message
        contactForm.innerHTML = `
                    <div class="success-message">
                        <i class="fas fa-check-circle"></i>
                        <h3>Message Sent Successfully!</h3>
                        <p>Thank you for your message. I'll get back to you as soon as possible.</p>
                    </div>
                `
      }
    })

    // Helper functions
    function showError(input, message) {
      const errorElement = input.nextElementSibling
      errorElement.textContent = message
      errorElement.style.display = "block"
      input.classList.add("error")
    }

    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(email)
    }

    // Real-time validation
    const inputs = contactForm.querySelectorAll("input, textarea")
    inputs.forEach((input) => {
      input.addEventListener("blur", function () {
        if (this.value.trim() === "") {
          showError(this, `${this.previousElementSibling.textContent} is required`)
        } else if (this.id === "email" && !isValidEmail(this.value)) {
          showError(this, "Please enter a valid email address")
        } else {
          this.nextElementSibling.style.display = "none"
          this.classList.remove("error")
        }
      })
    })
  }
})

