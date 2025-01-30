import {
  insurancesItemsPersonal,
  insurancesItemsEnterprise,
} from "./components.js";

const insurancesPersonal = document.getElementById("insurances-personal");
const insurancesEnterprise = document.getElementById("insurances-enterprise");

const insurancesNavbarPersonal = document.getElementById("dropdown-section-personal");
const insurancesNavbarEnterprise = document.getElementById("dropdown-section-enterprise");

function plotNavbarInsurances(insurances, container) {
  if (!container) {
    console.error("Container: " + container + " not found");
    return;
  }
  insurances.forEach((insurance) => {
    const navItem = document.createElement("a");
    navItem.href = insurance.link;
    navItem.textContent = insurance.title;

    container.appendChild(navItem);
  });
}    

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


function initializeMap() {
  var apiKey = "3976c5dc0d4d4bfa885a9685b18149f8";

  const address = "Rua Silva Melo, 54, Santo André, SP, Brasil";
  const nickname = "MASP";

  fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
      address
    )}&key=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.results.length > 0) {
        const latitude = data.results[0].geometry.lat;
        const longitude = data.results[0].geometry.lng;

        const map = L.map("map").setView([latitude, longitude], 15);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        const marker = L.marker([latitude, longitude]).addTo(map);
        marker.bindPopup(`<b>${nickname}</b><br>${address}`).openPopup();

        marker.on("click", function () {
          window.open(
            `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`,
            "_blank"
          );
        });
      } else {
        alert("Address not found.");
      }
    })
    .catch((error) => {
      console.error("Geocoding error:", error);
      alert("Unable to locate the address.");
    });
}

document.addEventListener("DOMContentLoaded", () => {
  plotInsurances(insurancesItemsPersonal, insurancesPersonal);
  plotInsurances(insurancesItemsEnterprise, insurancesEnterprise);
  
  plotNavbarInsurances(insurancesItemsPersonal, insurancesNavbarPersonal);
  plotNavbarInsurances(insurancesItemsEnterprise, insurancesNavbarEnterprise);

  addSmoothScrollToNavbar();
  initializeMap();
});
