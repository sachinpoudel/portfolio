// Canvas animation for the home page
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas")

  // Only run if canvas exists (home page)
  if (canvas) {
    const ctx = canvas.getContext("2d")

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 5 + 1
        this.speedX = Math.random() * 3 - 1.5
        this.speedY = Math.random() * 3 - 1.5
        this.color = getComputedStyle(document.documentElement).getPropertyValue("--accent-color")
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY
        }
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create particles
    const particles = []
    const particleCount = Math.min(100, Math.floor((window.innerWidth * window.innerHeight) / 10000))

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Connect particles with lines
    function connectParticles() {
      const maxDistance = 150

      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            // Set opacity based on distance
            const opacity = 1 - distance / maxDistance
            ctx.strokeStyle = `${particles[i].color}${Math.floor(opacity * 50).toString(16)}`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()
      }

      connectParticles()
      requestAnimationFrame(animate)
    }

    animate()

    // Mouse interaction
    const mouse = {
      x: null,
      y: null,
      radius: 150,
    }

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.x
      mouse.y = e.y
    })

    // Update particle behavior based on mouse position
    function handleMouseInteraction() {
      for (let i = 0; i < particles.length; i++) {
        const dx = mouse.x - particles[i].x
        const dy = mouse.y - particles[i].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < mouse.radius) {
          const force = mouse.radius / distance
          const angle = Math.atan2(dy, dx)
          const moveX = Math.cos(angle) * force * 0.5
          const moveY = Math.sin(angle) * force * 0.5

          particles[i].x -= moveX
          particles[i].y -= moveY
        }
      }
    }

    // Add mouse interaction to animation loop
    const originalAnimate = animate
    animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()
      }

      connectParticles()
      if (mouse.x !== null && mouse.y !== null) {
        handleMouseInteraction()
      }
      requestAnimationFrame(animate)
    }

    animate()
  }
})

