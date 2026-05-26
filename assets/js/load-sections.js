async function loadSection(id, file) {
  const response = await fetch(file);
  const html = await response.text();
  document.getElementById(id).innerHTML = html;
}

async function loadAllSections() {
  await loadSection("header-placeholder", "sections/header.html");
  await loadSection("hero-placeholder", "sections/hero.html");
  await loadSection("about-placeholder", "sections/about.html");
  await loadSection("stats-placeholder", "sections/stats.html");
  await loadSection("skills-placeholder", "sections/skills.html");
  await loadSection("resume-placeholder", "sections/resume.html");
  await loadSection("portfolio-placeholder", "sections/portfolio.html");
  await loadSection("contact-placeholder", "sections/contact.html");
  await loadSection("footer-placeholder", "sections/footer.html");

  const preloader = document.querySelector("#preloader");
  if (preloader) {
    preloader.remove();
  }

  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
    AOS.refreshHard();
  }

  if (typeof PureCounter !== "undefined") {
    new PureCounter();
  }

  const mainScript = document.createElement("script");
  mainScript.src = "assets/js/main.js";
  mainScript.onload = function () {
    window.dispatchEvent(new Event("load"));
  };
  document.body.appendChild(mainScript);
}


loadAllSections();