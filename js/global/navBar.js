import {
  servicesCardsForYou,
  servicesCardsForEnterprise,
} from "../index/components.js";

const navBarServices = document.getElementById("dropdown-section-services");

function addServicesToNavbar() {
  const leftSection = navBarServices.querySelector(".left-section");
  const rightSection = navBarServices.querySelector(".right-section");

  leftSection.innerHTML = "<h1>Para você</h1>"; // Resetando o título
  rightSection.innerHTML = "<h1>Para sua empresa</h1>"; // Resetando o título

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
