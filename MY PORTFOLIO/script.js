// NAVBAR SCROLL
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".custom-navbar");

    if (window.scrollY > 350) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// CONTACT BUTTON
function contactAlert() {
    alert("Thanks for reaching out!");
}


// ALL DOM-BASED CODE HERE
document.addEventListener("DOMContentLoaded", function () {

  // =========================
  // TICKER
  // =========================
  const tickerInner = document.getElementById('tickerInner');
  const tickerText = document.getElementById('tickerText');

  function runTicker(rawText) {
    tickerInner.classList.remove('running');
    tickerInner.style.removeProperty('--dur');
    void tickerInner.offsetWidth;

    tickerText.innerHTML = rawText.replace(/\*(.*?)\*/g, '<em>$1</em>');

    requestAnimationFrame(() => {
      const textW = tickerText.offsetWidth;
      const totalTravel = window.innerWidth + textW;
      const speed = 130;
      const duration = Math.max(7, totalTravel / speed);

      tickerInner.style.setProperty('--dur', duration + 's');
      tickerInner.classList.add('running');
    });
  }

  runTicker("UI/UX Audit  .  UX Research  .  Wireframing  .  Prototyping  .  UI design  .  Responsive design  .  Usability Testing");


  // =========================
  // ABOUT ANIMATION
  // =========================
  const elements = document.querySelectorAll("h2, .col-right p");

  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("show");
    }, index * 200);
  });


  // =========================
  // ZOOM EFFECT
  // =========================
  const zoomItems = document.querySelectorAll('.zoom');

  zoomItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.zIndex = "2";
    });

    item.addEventListener('mouseleave', () => {
      item.style.zIndex = "1";
    });
  });


  // =========================
  // TOGGLE IMAGE SWITCH
  // =========================
  const toggle = document.getElementById("designToggle");
  const label = document.getElementById("toggleLabel");
  const section = document.querySelector(".projects-section");
  const images = document.querySelectorAll(".mosaic img");
  const purpleCard = document.querySelector(".mosaic-card.purple");

  function switchImages(type) {
    images.forEach(img => {
      img.classList.add("img-hide");

      setTimeout(() => {
        img.src = img.dataset[type];

        img.classList.remove("img-hide");
        img.classList.add("img-show");

        setTimeout(() => {
          img.classList.remove("img-show");
        }, 300);

      }, 200);
    });
  }

  toggle.addEventListener("change", () => {

    if (toggle.checked) {
      label.textContent = "Graphic Design";
      section.classList.add("dark");
      switchImages("graphic");

      // 👉 ADD THIS
      purpleCard.classList.add("graphic");

    } else {
      label.textContent = "UI/UX Design";
      section.classList.remove("dark");
      switchImages("uiux");
      purpleCard.classList.remove("graphic");
    }


    // =========================
// FAQ TOGGLE (CLICK AGAIN TO CLOSE)
// =========================
const faqButtons = document.querySelectorAll('.accordion-button');

faqButtons.forEach(button => {
  button.addEventListener('click', function () {
    const isOpen = this.classList.contains('collapsed');

    // Close all first
    faqButtons.forEach(btn => btn.classList.add('collapsed'));
    
    // If it was already open → close it
    if (!isOpen) {
      this.classList.add('collapsed');
    }
  });
});


  });

});
