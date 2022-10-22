window.addEventListener("load", () => {
  document.querySelector(".main").classList.remove("hidden");
  document.querySelector(".home-section").classList.add("active");

  document.querySelector(".page-loader").classList.add("fade-out");
  setTimeout(() => {
    document.querySelector(".page-loader").style.display = "none";
  }, 600);
});

/* Toggler Navbar*/

const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () => {
  hideSection();
  togglerNavbar();
  document.body.classList.toggle("hide-scrolling");
});
function hideSection() {
  document.querySelector("section.active").classList.toggle("fade-out");
}

function togglerNavbar() {
  document.querySelector(".header").classList.toggle("active");
}

/* Active section */
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("link-item") && e.target.hash !== "") {
    document.querySelector(".overlay").classList.add("active");
    navToggler.classList.add("hide");
    if (e.target.classList.contains("nav-item")) {
      togglerNavbar();
    } else {
      hideSection();
      document.body.classList.add("hide-scrolling");
    }
    setTimeout(() => {
      document
        .querySelector("section.active")
        .classList.remove("active", "fade-out");
      document.querySelector(e.target.hash).classList.add("active");
      window.scrollTo(0, 0);
      document.body.classList.remove("hide-scrolling");
      navToggler.classList.remove("hide");
      document.querySelector(".overlay").classList.remove("active");
    }, 500);
  }
});

/* About tabs */

const tabContainer = document.querySelector(".about-tabs"),
  aboutSection = document.querySelector(".about-section");

tabContainer.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("tab-item") &&
    !e.target.classList.contains("active")
  ) {
    tabContainer.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    const target = e.target.getAttribute("data-target");
    aboutSection
      .querySelector(".tab-content.active")
      .classList.remove("active");
    aboutSection.querySelector(target).classList.add("active");
  }
});

/* Portfolio Popup*/

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("view-project-btn")) {
    togglePortfolioPopup();

    portfolioItemDetails(e.target.parentElement);
  }
});

function togglePortfolioPopup() {
  document.querySelector(".portfolio-popup").classList.toggle("open");
  document.body.classList.toggle("hide-scrolling");
  document.querySelector(".main").classList.toggle("fade-out");
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("pp-inner")) {
    togglePortfolioPopup();
  }
});

document
  .querySelector(".pp-close")
  .addEventListener("click", togglePortfolioPopup);

function portfolioItemDetails(portfolioItem) {
  console.log(portfolioItem);
  document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(
    ".portfolio-item-thumbnail img"
  ).src;

  document.querySelector(".pp-header h3").innerHTML =
    portfolioItem.querySelector(".portfolio-item-title").innerHTML;

  document.querySelector(".pp-body").innerHTML = portfolioItem.querySelector(
    ".portfolio-item-details"
  ).innerHTML;
}
