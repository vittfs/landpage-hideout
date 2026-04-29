// FORM
const form = document.getElementById("formReserva");
const msg = document.getElementById("msg");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  msg.innerText = "Reserva enviada com sucesso.";
  msg.style.color = "lime";

  form.reset();
});

// NAVBAR SCROLL EFFECT
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// SCROLL REVEAL
const reveals = document.querySelectorAll(".section, .card");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// INICIALIZA
revealOnScroll();