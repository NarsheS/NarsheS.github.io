// =========================
// Hero Animation
// =========================

window.addEventListener("load", () => {
  setTimeout(() => {
    document
      .getElementById("hero")
      .classList.add("show");
  }, 150);
});

// =========================
// Tabs
// =========================

const tabs = document.querySelectorAll(".tab");
const cards = document.querySelectorAll(".card");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.target;

    cards.forEach(card => {
      card.classList.add("hidden");
    });

    tabs.forEach(btn => {
      btn.classList.remove("active-tab");
      btn.classList.add("inactive-tab");
    });

    document
      .getElementById(target)
      .classList.remove("hidden");

    tab.classList.remove("inactive-tab");
    tab.classList.add("active-tab");
  });
});

// =========================
// Lucide Icons
// =========================

if (window.lucide) {
  lucide.createIcons();
}

// =========================
// Terminal
// =========================

const terminal = document.getElementById("terminal");

const terminalText = `> profile

Full-Stack Developer

> stack

✓ TypeScript
✓ React / Next.js
✓ Node.js / NestJS
✓ PostgreSQL

> building

✓ E-commerce Applications
✓ REST APIs
✓ Full-Stack Projects

Ready `;

function typeTerminal(text, speed = 30) {
  let index = 0;

  function type() {
    if (index < text.length) {
      terminal.textContent += text.charAt(index);
      index++;

      setTimeout(type, speed);
    } else {
      terminal.innerHTML += '<span class="cursor">_</span>';
    }
  }

  type();
}

window.addEventListener("load", () => {
  setTimeout(() => {
    typeTerminal(terminalText);
  }, 700);
});