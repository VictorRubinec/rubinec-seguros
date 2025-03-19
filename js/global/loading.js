export function hideLoadingScreen() {
  const loadingScreen = document.getElementById("loading-screen");

  if (loadingScreen) loadingScreen.style.display = "none";
}

export function showPage() {
  const footer = document.querySelector("footer");
  if (footer) footer.style.display = "flex";

  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    section.style.display = "flex";
  });
}
