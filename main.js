import quotes from "./quotes.js";

document.addEventListener('DOMContentLoaded', function () {
  const collapsible = document.querySelector(".collapsible");
  const content = document.querySelector(".collapsible-content");

  const buttons = document.querySelectorAll(".toggle-instructions");
    const overlay = document.getElementById("instructions-overlay");
    const closeButtons = document.querySelectorAll(".close-instructions");
    const instructions = document.querySelectorAll(".instructions-content");

    // Show specific instructions on button click
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const targetId = button.getAttribute("data-target") + "-instructions";
            const targetEl = document.getElementById(targetId);

            // Hide all instructions first
            instructions.forEach(el => el.style.display = "none");

            // Show overlay and the targeted instructions
            overlay.style.display = "flex";
            targetEl.style.display = "block";
        });
    });

    // Close instructions on close button click
    closeButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            overlay.style.display = "none";
        });
    });

    // Close overlay if user clicks outside the content box
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            overlay.style.display = "none";
        }
    });

  const footerSocals = document.querySelectorAll('.footer-socal')

  footerSocals.forEach((socal) => {
      const hiddenElement = socal.querySelector('.hidden')

      socal.addEventListener('mouseenter', () => {
          hiddenElement.style.display = 'block'
      })

      socal.addEventListener('mouseleave', () => {
          hiddenElement.style.display = 'none'
      })
  })
})

const authorEl = document.getElementById("author")
const quoteEl = document.getElementById("quote")
const aboutEl = document.getElementById("about-el")

document.addEventListener("DOMContentLoaded", () => {
  const domainItems = document.querySelectorAll(".domain");
  const resetButton = document.querySelector(".btn");

  // Function to reset the completion status
  const resetDomains = () => {
    localStorage.setItem("lastResetDate", getCurrentDate());

    domainItems.forEach((item) => {
      item.classList.remove("completed");
      localStorage.removeItem(item.id); // Remove completion status from localStorage
    });
  };

  // Function to get the current date in the format YYYY-MM-DD
  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // Check if today is Saturday
  const today = 6; // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const valorItem = document.querySelector(".valor");

  if (valorItem) { // Ensure the element exists
    if (today === 6) { // If today is Saturday
      valorItem.style.display = "block";
    } else {
      valorItem.style.display = "none";
    }
  }

  /* ==== Add greeting and today's date ==== */
  const hours = new Date().getHours();
  let greeting;
  if (hours < 12) {
    greeting = "morning";
  } else if (hours < 18) {
    greeting = "afternoon";
  } else {
    greeting = "evening";
  }
  const greetingEmoji = hours < 12 ? "☀️" : hours < 18 ? "🌤️" : "🌙";
  document.getElementById('greeting-el').innerText = `Good ${greeting}! ${greetingEmoji}`;

  const dateEl = document.getElementById('date-el');
  if (dateEl) {
    dateEl.innerText = new Date().toDateString();
  }

  // Check if the stored date matches the current date
  const lastResetDate = localStorage.getItem("lastResetDate");
  if (lastResetDate !== getCurrentDate()) {
    resetDomains();
  } else {
    // Apply completion status from localStorage
    domainItems.forEach((item) => {
      const completed = localStorage.getItem(item.id) === "true";
      if (completed) {
        item.classList.add("completed");
      }
    });
  }

  // Event listener for domain item clicks
  domainItems.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("completed");
      // Update completion status in localStorage
      localStorage.setItem(item.id, item.classList.contains("completed"));
    });
  });

  // Event listener for the reset button
  if (resetButton) {
    resetButton.addEventListener("dblclick", resetDomains);
  }
});


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

document.getElementById('footer-el').innerHTML = `&copy; ${new Date().getFullYear()}`
