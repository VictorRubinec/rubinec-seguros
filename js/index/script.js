import {
  insurancesItemsPersonal,
  insurancesItemsEnterprise,
} from "./components.js";

const insurancesPersonal = document.getElementById("insurances-personal");
const insurancesEnterprise = document.getElementById("insurances-enterprise");

function plotInsurances(insurances, container) {
  if (!container) {
    console.error("Container: " + container + " not found");
    return;
  }
  insurances.forEach((insurance) => {
    const insuranceElement = document.createElement("div");
    insuranceElement.classList.add("insurance");

    const insuranceText = document.createElement("div");
    insuranceText.classList.add("insurance-text");

    const insuranceContent = document.createElement("div");
    insuranceContent.classList.add("insurance-content");

    const insuranceTitle = document.createElement("h2");
    insuranceTitle.textContent = insurance.title;

    const insuranceDescription = document.createElement("p");
    insuranceDescription.textContent = insurance.description;

    insuranceContent.append(insuranceTitle, insuranceDescription);

    const insuranceButton = document.createElement("button");
    insuranceButton.textContent = "Saiba Mais";
    insuranceButton.addEventListener("click", () => {
      window.location.href = insurance.link;
    });

    insuranceText.append(insuranceContent, insuranceButton);

    const insuranceImageContainer = document.createElement("div");
    insuranceImageContainer.classList.add("insurance-image-container");

    const insuranceImage = document.createElement("img");
    insuranceImage.src = insurance.image;
    insuranceImage.alt = insurance.title;
    insuranceImage.loading = "lazy";
    insuranceImage.classList.add("insurance-image");

    insuranceImageContainer.appendChild(insuranceImage);
    insuranceElement.append(insuranceText, insuranceImageContainer);

    container.appendChild(insuranceElement);
  });
}

function addSmoothScrollToNavbar() {
  const navLinks = document.querySelectorAll(".nav-item");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const navbarHeight = document.querySelector("#header").offsetHeight;

        window.scrollTo({
          top: targetElement.offsetTop - navbarHeight,
          behavior: "smooth",
        });
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  plotInsurances(insurancesItemsPersonal, insurancesPersonal);
  plotInsurances(insurancesItemsEnterprise, insurancesEnterprise);

  addSmoothScrollToNavbar();
  initializeMap();
});
