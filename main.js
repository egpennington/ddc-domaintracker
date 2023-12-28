import quotes from "./quotes.js";

const authorEl = document.getElementById("author")
const quoteEl = document.getElementById("quote")
const aboutEl = document.getElementById("about-el")

document.addEventListener("DOMContentLoaded", () => {
  const domainItems = document.querySelectorAll(".domain")
  const resetButton = document.querySelector(".btn")

  // Function to reset the completion status
  const resetDomains = () => {
    localStorage.setItem("lastResetDate", getCurrentDate())

    domainItems.forEach((item) => {
      item.classList.remove("completed")
      localStorage.removeItem(item.id) // Remove completion status from localStorage
    })
  };

  // Function to get the current date in the format YYYY-MM-DD
  const getCurrentDate = () => {
    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, "0")
    const day = String(now.getDate()).padStart(2, "0")
    return `${year}-${month}-${day}`
  };

  // Check if the stored date matches the current date
  const lastResetDate = localStorage.getItem("lastResetDate")
  if (lastResetDate !== getCurrentDate()) {
    resetDomains()
  } else {
    // Apply completion status from localStorage
    domainItems.forEach((item) => {
      const completed = localStorage.getItem(item.id) === "true"
      if (completed) {
        item.classList.add("completed")
      }
    });
  }

  // Event listener for domain item clicks
  domainItems.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("completed")
      // Update completion status in localStorage
      localStorage.setItem(item.id, item.classList.contains("completed"))
    })
  })

  // Event listener for the reset button
  resetButton.addEventListener("dblclick", resetDomains);
})

aboutEl.addEventListener("click", () => {
    const aboutModalEl = document.getElementById("about-modal-el")
    const aboutCloseEl = document.getElementById("about-close-el")
    aboutModalEl.style.display = "block"

    aboutCloseEl.addEventListener("click", () => {
      aboutModalEl.style.display = "none"
    })
})

// quotes generator
function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  const randomQuote = quotes[randomIndex]

  quoteEl.innerHTML = `
        <h1>${randomQuote.quote}</h1>
        `
  authorEl.innerHTML = `
        <h2 class="rt-side">- ${randomQuote.author}</h2>
        `
}

generateRandomQuote()
