// DOM Elements
const hamburger = document.querySelector(".hamburger")
const nav = document.querySelector("nav")
const themeToggle = document.querySelector(".theme-toggle")
const body = document.body

// Check for saved theme preference
document.addEventListener("DOMContentLoaded", () => {
  // Theme preference
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "dark") {
    body.classList.add("dark")
  }

  // Mobile menu toggle
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    nav.classList.toggle("active")
  })

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll("nav ul li a")
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active")
      nav.classList.remove("active")
    })
  })

  // Theme toggle
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark")

    // Save theme preference
    if (body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark")
    } else {
      localStorage.setItem("theme", "light")
    }
  })

  // Page transitions
  const links = document.querySelectorAll("a")
  links.forEach((link) => {
    // Only apply to internal links
    if (link.href.includes(window.location.origin) && !link.getAttribute("target")) {
      link.addEventListener("click", (e) => {
        // Skip if modifier keys are pressed
        if (e.metaKey || e.ctrlKey) return

        const href = link.getAttribute("href")

        // Skip anchor links
        if (href.startsWith("#")) return

        e.preventDefault()

        // Fade out
        body.style.opacity = 0

        // Navigate after transition
        setTimeout(() => {
          window.location.href = href
        }, 300)
      })
    }
  })

  // Fade in on page load
  body.style.opacity = 0
  setTimeout(() => {
    body.style.transition = "opacity 0.3s ease"
    body.style.opacity = 1
  }, 10)
})

