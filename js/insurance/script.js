import { InsuranceComponents } from "./components.js";

const insuranceType = window.location.search.substring(1);

const pageComponents = InsuranceComponents.filter((component) => {
  return component.id === insuranceType;
});

if (pageComponents.length === 0) {
  window.location.href = "/";
}

function createElement(tag, className = "", textContent = "") {
  const element = document.createElement(tag);
  if (className) element.classList.add(className);
  if (textContent) element.textContent = textContent;
  return element;
}

function createComponentElement(type, content) {
  const container = createElement("div", "insurance-component");

  switch (type) {
    case "title":
      const title = createElement("h1", "insurance-title", content);
      container.appendChild(title);
      break;

    case "header":
      const header = createElement("h2", "insurance-header", content);
      container.appendChild(header);
      break;

    case "text_simple":
      content.forEach((paragraph) => {
        const p = createElement("p", "insurance-text", paragraph);
        container.appendChild(p);
      });
      break;

    case "text_bold":
      const boldTitle = createElement(
        "h3",
        "insurance-title-bold",
        content.title
      );
      container.appendChild(boldTitle);
      content.text.forEach((text) => {
        const p = createElement("p", "insurance-text", text);
        container.appendChild(p);
      });
      break;

    case "topic_simple":
      const topicText = createElement("p", "insurance-title", content.title);
      container.appendChild(topicText);
      const ulSimple = createElement("ul", "insurance-list");
      content.itens.forEach((item) => {
        const li = createElement("li", "insurance-list-item", item);
        ulSimple.appendChild(li);
      });
      container.appendChild(ulSimple);
      break;

    case "topic_bold":
      const topicTitle = createElement(
        "h3",
        "insurance-title-bold",
        content.title
      );
      container.appendChild(topicTitle);
      const ulBold = createElement("ul", "insurance-list");
      content.itens.forEach((item) => {
        const li = createElement("li", "insurance-list-item", item);
        ulBold.appendChild(li);
      });
      container.appendChild(ulBold);
      break;
  }

  return container;
}

function loadPageComponents() {
  const insurancesContainer = document.getElementById("insurances-container");
  if (!insurancesContainer) return;
  if (pageComponents.length === 0) return;

  const fragment = document.createDocumentFragment();

  const title = pageComponents[0].title;
  const types = pageComponents[0].types;
  const components = pageComponents[0].contents;

  console.log(title);
  console.log(types);
  console.log(components);

  const header = createComponentElement("title", title);
  fragment.appendChild(header);

  components.forEach((component, index) => {
    const componentElement = createComponentElement(types[index], component);
    fragment.appendChild(componentElement);
  });

  insurancesContainer.appendChild(fragment);
}

document.addEventListener("DOMContentLoaded", loadPageComponents);
