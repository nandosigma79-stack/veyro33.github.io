document.querySelectorAll("[data-placeholder]").forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    alert(element.dataset.placeholder + "-Link ist noch nicht eingetragen. Öffne index.html und ersetze den Link.");
  });
});

const beobachter = new IntersectionObserver((eintraege) => {
  eintraege.forEach((eintrag) => {
    if (eintrag.isIntersecting) {
      eintrag.target.classList.add("sichtbar");
      beobachter.unobserve(eintrag.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".link-card,.content-image,.content-copy,.about-text,.about-image").forEach((element) => {
  element.classList.add("einblenden");
  beobachter.observe(element);
});
