import {
  servicesCardsForYou,
  servicesCardsForEnterprise,
} from "../js/index/components.js";

const navBarServices = document.getElementById("dropdown-section-services");

function addServicesToNavbar() {
  // Seleciona as seções da navbar
  const leftSection = navBarServices.querySelector(".left-section");
  const rightSection = navBarServices.querySelector(".right-section");

  // Limpa as seções antes de adicionar novos itens
  leftSection.innerHTML = "<h1>Para você</h1>"; // Resetando o título
  rightSection.innerHTML = "<h1>Para sua empresa</h1>"; // Resetando o título

  // Adiciona os itens da lista de serviços "Para você" à seção esquerda
  servicesCardsForYou.forEach(service => {
    const aTag = document.createElement("a");
    aTag.href = service.link;
    aTag.textContent = service.title;
    leftSection.appendChild(aTag);
  });

  // Adiciona os itens da lista de serviços "Para sua empresa" à seção direita
  servicesCardsForEnterprise.forEach(service => {
    const aTag = document.createElement("a");
    aTag.href = service.link;
    aTag.textContent = service.title;
    rightSection.appendChild(aTag);
  });
}

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
document.addEventListener("DOMContentLoaded", addServicesToNavbar);