// Main JavaScript file

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed!");

  // Initialize all components
  initMobileMenu()
  initSmoothScroll()
  initDarkMode()
  initBackToTop()
  initScrollHeader()
  initContactForm()

  // Add animation on scroll
  const animatedElements = document.querySelectorAll(".expertise-card, .project-card, .service-card, .about__card")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.1,
    },
  )

  animatedElements.forEach((element) => {
    observer.observe(element)
  })

  // Obiect cu traduceri
  const translations = {
    en: {
      heroSubtitle: "Hi, my name is",
      heroTitle: "Marius Militaru",
      heroTagline: "I build amazing things with <span class='highlight'>AI</span>",
      heroDescription: "I'm a software engineer specializing in building exceptional digital experiences using artificial intelligence. Currently, I'm focused on creating innovative AI-powered solutions that push the boundaries of what's possible.",
      chatButton: "Happy to chat on WhatsApp",
      aboutTitle: "Creative Code Artistry",
      aboutDescription: "Transforming complex ideas into elegant digital solutions through the perfect blend of art and technology. My code doesn't just function—it creates experiences that resonate and inspire.",
      contactTitle: "Let's Connect",
      contactDescription: "Have a project in mind or just want to say hello? I'd love to hear from you. Feel free to reach out using any of the methods below.",
      menuAbout: "About",
      menuProjects: "Projects",
      menuServices: "Services",
      menuContact: "Contact",
      menuDownload: "Download",
    },
    ro: {
      heroSubtitle: "Salut, numele meu este",
      heroTitle: "Marius Militaru",
      heroTagline: "Construiesc lucruri uimitoare cu <span class='highlight'>AI</span>",
      heroDescription: "Sunt un inginer software specializat în crearea de experiențe digitale excepționale folosind inteligența artificială. În prezent, mă concentrez pe crearea de soluții inovatoare bazate pe AI care împing limitele posibilului.",
      chatButton: "Încântat să discut pe WhatsApp",
      aboutTitle: "Artă Creativă în Cod",
      aboutDescription: "Transform idei complexe în soluții digitale elegante printr-un amestec perfect de artă și tehnologie. Codul meu nu doar funcționează—creează experiențe care rezonează și inspiră.",
      contactTitle: "Hai să Conectăm",
      contactDescription: "Ai un proiect în minte sau vrei doar să spui salut? Mi-ar plăcea să aud de la tine. Nu ezita să mă contactezi folosind oricare dintre metodele de mai jos.",
      menuAbout: "Despre",
      menuProjects: "Proiecte",
      menuServices: "Servicii",
      menuContact: "Contact",
      menuDownload: "Descarcă",
    },
  };
})

// Mobile Menu
function initMobileMenu() {
  const menuToggle = document.querySelector(".menu-toggle")
  const mainMenu = document.querySelector(".main-nav__list")

  if (!menuToggle || !mainMenu) return

  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true"

    menuToggle.setAttribute("aria-expanded", !isExpanded)
    mainMenu.classList.toggle("active")

    // Prevent scrolling when menu is open
    document.body.style.overflow = isExpanded ? "" : "hidden"
  })

  // Close menu when clicking on a link
  const menuLinks = mainMenu.querySelectorAll("a")
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false")
      mainMenu.classList.remove("active")
      document.body.style.overflow = ""
    })
  })
}

// Smooth Scroll
function initSmoothScroll() {
  const scrollLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])')

  scrollLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        // Scroll smoothly to the element
        targetElement.scrollIntoView({
          behavior: "smooth",
        })

        // Update URL without showing the hash
        history.pushState({}, "", window.location.pathname)
      }
    })
  })
}

// Dark Mode Toggle
function initDarkMode() {
  const themeToggle = document.querySelector(".theme-toggle")

  if (!themeToggle) return

  // Check for saved theme preference or use preferred color scheme
  const savedTheme = localStorage.getItem("theme")
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

  // Set initial theme
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme)
  } else if (prefersDark) {
    document.documentElement.setAttribute("data-theme", "dark")
  } else {
    document.documentElement.setAttribute("data-theme", "light")
  }

  // Toggle theme on click
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme")
    const newTheme = currentTheme === "dark" ? "light" : "dark"

    document.documentElement.setAttribute("data-theme", newTheme)
    localStorage.setItem("theme", newTheme)
  })
}

// Back to Top Button
function initBackToTop() {
  const backToTopButton = document.querySelector(".back-to-top")

  if (!backToTopButton) return

  // Show/hide button based on scroll position
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      backToTopButton.classList.add("visible")
    } else {
      backToTopButton.classList.remove("visible")
    }
  })

  // Scroll to top when clicked
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })
}

// Header scroll effect
function initScrollHeader() {
  const header = document.querySelector(".header")

  if (!header) return

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }
  })
}

// Contact Form
function initContactForm() {
  const contactForm = document.getElementById("contact-form")

  if (!contactForm) return

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form data
    const formData = new FormData(contactForm)
    const formValues = Object.fromEntries(formData.entries())

    // Simple validation
    let isValid = true
    const requiredFields = ["name", "email", "subject", "message"]

    requiredFields.forEach((field) => {
      const input = contactForm.querySelector(`[name="${field}"]`)
      if (!formValues[field].trim()) {
        isValid = false
        input.classList.add("error")
      } else {
        input.classList.remove("error")
      }
    })

    if (!isValid) {
      alert("Please fill in all required fields.")
      return
    }

    // Here you would normally send the data to a server
    console.log("Form submitted:", formValues)

    // Show success message (in a real app, this would happen after successful submission)
    alert("Thank you for your message! I will get back to you soon.")

    // Reset form
    contactForm.reset()
  })
}










// Verifică dacă există o temă salvată în localStorage
const savedTheme = localStorage.getItem('theme');

// Dacă nu există o temă salvată, setează dark mode ca implicit
if (!savedTheme) {
  document.documentElement.setAttribute('data-theme', 'dark');
  localStorage.setItem('theme', 'dark');
} else {
  // Aplică tema salvată
  document.documentElement.setAttribute('data-theme', savedTheme);
}

// Adaugă un event listener pentru butonul de schimbare a temei
const themeToggleButton = document.querySelector('.theme-toggle');
themeToggleButton.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

