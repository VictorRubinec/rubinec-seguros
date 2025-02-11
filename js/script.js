import {
    insurancesItemsPersonal,
    insurancesItemsEnterprise,
  } from "./index/components.js";

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
  plotNavbarInsurances(insurancesItemsPersonal, insurancesNavbarPersonal);
  plotNavbarInsurances(insurancesItemsEnterprise, insurancesNavbarEnterprise);

  initializeMap();
});
