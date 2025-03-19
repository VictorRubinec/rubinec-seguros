import {
  servicesCardsForYou,
  servicesCardsForEnterprise,
} from "./components.js";
import { hideLoadingScreen, showPage } from "../global/loading.js";

function ChangeServices(active) {
  const forYou = document.getElementById("services-for-you");
  const forBusiness = document.getElementById("services-for-business");

  if (!forYou || !forBusiness || !btnForYou || !btnForBusiness) {
    console.error("Um ou mais elementos não encontrados.");
    return;
  }

  switch (active) {
    case "1":
      forYou.style.display = "block";
      forBusiness.style.display = "none";

      btnForYou.classList.add("active");
      btnForBusiness.classList.remove("active");
      break;
    case "2":
      forYou.style.display = "none";
      forBusiness.style.display = "block";

      btnForYou.classList.remove("active");
      btnForBusiness.classList.add("active");
      break;
    default:
      break;
  }
}

function loadServices(cards, container) {
  if (!container) {
    console.error("Container não encontrado.");
    return;
  }

  const servicesContainer = container.querySelector(".services-container");
  if (!servicesContainer) {
    console.error("services-container não encontrado.");
    return;
  }

  cards.forEach((card) => {
    const serviceCard = document.createElement("div");
    serviceCard.classList.add("services-card");

    const serviceImage = document.createElement("img");
    serviceImage.src = card.image;
    serviceImage.alt = card.title;

    const serviceCardText = document.createElement("div");
    serviceCardText.classList.add("services-card-text");

    const serviceTitle = document.createElement("h2");
    serviceTitle.textContent = card.title;

    const serviceButton = document.createElement("a");
    serviceButton.classList.add("service-button");
    serviceButton.textContent = "Saiba mais";
    serviceButton.href = card.link;

    serviceCardText.append(serviceTitle, serviceButton);
    serviceCard.append(serviceImage, serviceCardText);

    servicesContainer.appendChild(serviceCard);
  });
}

const btnForYou = document.getElementById("btn-for-you");
const btnForBusiness = document.getElementById("btn-for-business");

if (!btnForYou || !btnForBusiness) {
  console.error("Um ou mais botões não encontrados.");
}

btnForYou.addEventListener("click", () => ChangeServices("1"));
btnForBusiness.addEventListener("click", () => ChangeServices("2"));

const btnScrollServices = document.getElementById("scrollButton");

btnScrollServices.addEventListener("click", () => {
  const section = document.querySelector(".services-section");
  window.scrollTo({
    top: section.offsetTop - 120,
    behavior: "smooth",
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const containerForYou = document.getElementById("services-for-you");
  const containerForBusiness = document.getElementById("services-for-business");

  if (!containerForYou) {
    console.error("containerForYou não encontrado.");
  }
  if (!containerForBusiness) {
    console.error("containerForBusiness não encontrado.");
  }

  ChangeServices("1");
  loadServices(servicesCardsForYou, containerForYou);
  loadServices(servicesCardsForEnterprise, containerForBusiness);

  hideLoadingScreen();
  showPage();
});
