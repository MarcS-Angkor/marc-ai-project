document.getElementById("year").textContent = new Date().getFullYear();

const ctaButtons = document.querySelectorAll(".btn-primary");
const contactSection = document.getElementById("contact");

ctaButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
