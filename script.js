const popTargets = document.querySelectorAll(
  ".hero .stats article, .hero .hero-tags span, .hero .hero-card"
);

popTargets.forEach((element) => {
  element.classList.add("tap-pop");
  element.setAttribute("tabindex", "0");
  let popTimeoutId;

  const triggerPop = () => {
    clearTimeout(popTimeoutId);
    element.classList.remove("pop-active");
    void element.offsetWidth;
    element.classList.add("pop-active");
    popTimeoutId = window.setTimeout(() => {
      element.classList.remove("pop-active");
    }, 220);
  };

  element.addEventListener("click", triggerPop);
  element.addEventListener("pointerdown", triggerPop);
  element.addEventListener("touchstart", triggerPop, { passive: true });
  element.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      triggerPop();
    }
  });
});

const brandLogo = document.querySelector(".brand");

if (brandLogo) {
  let logoTimeoutId;

  const bringLogoFront = () => {
    clearTimeout(logoTimeoutId);
    brandLogo.classList.remove("logo-front");
    void brandLogo.offsetWidth;
    brandLogo.classList.add("logo-front");
    logoTimeoutId = window.setTimeout(() => {
      brandLogo.classList.remove("logo-front");
    }, 900);
  };

  brandLogo.addEventListener("click", bringLogoFront);
  brandLogo.addEventListener("touchstart", bringLogoFront, { passive: true });
}
