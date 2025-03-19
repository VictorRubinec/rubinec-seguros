import {
  servicesCardsForYou,
  servicesCardsForEnterprise,
} from "../index/components.js";

const navBarServices = document.getElementById("dropdown-section-services");

function addServicesToNavbar() {
  const leftSection = navBarServices.querySelector(".left-section");
  const rightSection = navBarServices.querySelector(".right-section");

  leftSection.innerHTML = "<h1>Para você</h1>"; 
  rightSection.innerHTML = "<h1>Para sua empresa</h1>"; 

  servicesCardsForYou.forEach(service => {
    const aTag = document.createElement("a");
    aTag.href = service.link;
    aTag.textContent = service.title;
    leftSection.appendChild(aTag);
  });

  servicesCardsForEnterprise.forEach(service => {
    const aTag = document.createElement("a");
    aTag.href = service.link;
    aTag.textContent = service.title;
    rightSection.appendChild(aTag);
  });
}

document.addEventListener("DOMContentLoaded", addServicesToNavbar);

function addSmoothScrollToNavbar() {
  const navLinks = document.querySelectorAll(".nav-item");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (targetId.startsWith("#")) {
        event.preventDefault();
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          const navbarHeight = document.querySelector("#header").offsetHeight;

          window.scrollTo({
            top: targetElement.offsetTop - navbarHeight,
            behavior: "smooth",
          });
        }
      } else {
        window.location.href = targetId;
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", addSmoothScrollToNavbar);