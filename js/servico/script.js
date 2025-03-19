import { ServicesPages } from "./components.js";

import { buildForm } from "./functions/form.js";
import { buildServicePage } from "./functions/servicePage.js";

import { hideLoadingScreen, showPage } from "../global/loading.js";

const serviceId = window.location.search.substring(1);
const service = ServicesPages.find((s) => s.id === serviceId);

if (service) {
  buildServicePage(service);
  buildForm(service);

  hideLoadingScreen();
  showPage();
} else {
  console.error("Serviço não encontrado.");
  window.location.href = "/";
}

