import { ServicesPages } from "./components.js";

const serviceId = window.location.search.substring(1);
const service = ServicesPages.find((s) => s.id === serviceId);

if (service) {
  const banner = document.getElementById("banner");
  banner.style.backgroundImage = `url(${service.banner})`;

  const bannerContainer = banner.querySelector(".banner-container");
  bannerContainer.innerHTML = `<p>${service.subtitle}</p><h1>${service.title}</h1>`;

  const serviceContent = document.getElementById("service-container");
  serviceContent.innerHTML = `<h1>O que contempla esse serviço?</h1>`;

  let contentIndex = 0;

  const contents = service.content;
  const rows = service.grid;
  rows.forEach((row) => {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("rows");
    row.forEach((quantity) => {
      const colDiv = document.createElement("div");
      colDiv.classList.add("cols");
      for (let i = 0; i < quantity; i++) {
        addComponent(
          contents[contentIndex],
          service.types[contentIndex],
          colDiv,
          row.length
        );
        contentIndex++;
      }
      rowDiv.appendChild(colDiv);
    });
    serviceContent.appendChild(rowDiv);
  });

  const form = document.getElementById("form");

  const fields = service.form;
  const formGrid = service.formGrid;

  const formTitle = document.createElement("h1");
  formTitle.innerHTML = "Solicite sua Cotação";
  form.appendChild(formTitle);

  const formText = document.createElement("p");
  formText.innerHTML = "Informe os dados iniciais para sua cotação, os seus dados só serão utilizados para identificá-lo em nosso processo de atendimento.";
  form.appendChild(formText);

  let formIndex = 0;

  formGrid.forEach((row) => {
    const rowDiv = document.createElement("div");

    switch (row) {
      case 1:
        rowDiv.classList.add("form-row");
        break;
      case 2:
        rowDiv.classList.add("form-row-2");
        break;
      case 3:
        rowDiv.classList.add("form-row-3");
        break;
      default:
        console.error("Quantidade de colunas inválida:", row);
    }

    for (let i = 0; i < row; i++) {
      if (fields[formIndex]) {
        addForm(fields[formIndex], rowDiv);
        formIndex++;
      }
    }

    form.appendChild(rowDiv);
  });

  const submitButton = document.createElement("button");
  submitButton.classList.add("submit");
  submitButton.innerHTML = `Envie seu formulário <img src="images/icons/seta.png" alt="" />`;
  submitButton.onclick = sendForm;
  form.appendChild(submitButton);

} else {
  console.error("Serviço não encontrado.");
  window.location.href = "/";
}

function addForm(field, rowDiv) {
  const inputs = ["text", "email", "tel", "number"];

  if (inputs.includes(field.type)) {
    createInput(rowDiv, field);
  } else if (field.type === "select") {
    createSelect(rowDiv, field);
  } else if (field.type === "textarea") {
    createTextArea(rowDiv, field);
  } else {
    console.error("Tipo de campo desconhecido:", field.type);
  }
}

function createInput(parent, field) {
  const label = document.createElement("label");
  const input = document.createElement("input");
  const span = document.createElement("span");

  input.type = field.type;
  input.name = field.name;
  input.required = field.required;
  input.placeholder = '';
  if (field.pattern) {
    input.pattern = field.validation;
  }
  
  span.innerHTML = field.label;
  
  label.appendChild(input);
  label.appendChild(span);
  
  parent.appendChild(label);
}

function createSelect(parent, field) {
  const label = document.createElement("label");
  const select = document.createElement("select");
  const span = document.createElement("span");
  
  select.name = field.name;
  
  span.innerHTML = field.label;
  
  field.options.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.value = option;
    optionElement.innerHTML = option;
    if (option.includes("Selecione")) {
      optionElement.selected = true;
      optionElement.disabled = true;
    }
    select.appendChild(optionElement);
  });
  
  label.appendChild(select);
  label.appendChild(span);
  
  parent.appendChild(label);
}

function createTextArea(parent, field) {
  const label = document.createElement("label");
  const textarea = document.createElement("textarea");
  const span = document.createElement("span");
  
  textarea.name = field.name;
  textarea.required = field.required;
  textarea.placeholder = '';
  
  span.innerHTML = field.label;
  
  label.appendChild(textarea);
  label.appendChild(span);
  
  parent.appendChild(label);
}

function addComponent(content, type, colDiv, quantity) {
  const newDiv = document.createElement("div");
  colDiv.appendChild(newDiv);

  if (quantity > 1) {
    newDiv.style.width = "410px";
  }

  switch (type) {
    case "text_simple":
      createTextElement(newDiv, content, "text-simple");
      break;

    case "text_bold":
      createTextBoldElement(newDiv, content);
      break;

    case "topic_simple":
      createTopicElement(newDiv, content, "topic-simple");
      break;

    case "topic_bold":
      createTopicElement(newDiv, content, "topic-bold", true);
      break;

    case "title":
      colDiv.style.width = "100%";
      createTitleElement(newDiv, content);
      break;

    case "contact_button":
      colDiv.style.width = "100%";
      createContactButton(newDiv);
      break;

    case "image_with_contact":
      createImageWithContact(newDiv, content);
      break;

    case "image_rectangle":
      createImageElement(newDiv, content, "img-rectangle");
      break;

    case "image_rectangle_2":
      createImageElement(newDiv, content, "img-rectangle-2");
      break;

    case "image_square":
      createImageElement(newDiv, content, "img-square");
      break;

    default:
      console.error("Tipo de componente desconhecido:", type);
  }
}

function createTextElement(parent, text, className) {
  parent.classList.add(className);
  text.forEach((textItem) => {
    const textElement = document.createElement("p");
    textElement.innerHTML = textItem;
    parent.appendChild(textElement);
  });
}

function createTextBoldElement(parent, content) {
  parent.classList.add("text-bold");
  const title_bold = document.createElement("h2");
  title_bold.innerHTML = content.title;
  parent.appendChild(title_bold);

  content.text.forEach((textItem) => {
    const text_bold = document.createElement("p");
    text_bold.innerHTML = textItem;
    parent.appendChild(text_bold);
  });
}

function createTopicElement(parent, content, className, isBold = false) {
  parent.classList.add(className);
  const title_topic = document.createElement(isBold ? "h2" : "p");
  title_topic.innerHTML = content.title;
  parent.appendChild(title_topic);

  const ul = document.createElement("ul");
  content.itens.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = item;
    ul.appendChild(li);
  });
  parent.appendChild(ul);
}

function createTitleElement(parent, text) {
  parent.classList.add("title");
  const header = document.createElement("h1");
  header.textContent = text;
  parent.appendChild(header);
}

function createContactButton(parent) {
  parent.classList.add("contact-button");
  const contactButton = document.createElement("a");
  contactButton.classList.add("btn-contact");
  contactButton.href = "https://wa.me/5511977866520";
  contactButton.innerHTML =
    'FALE CONOSCO <img src="images/icons/whatsapp.png" alt="WhatsApp">';
  parent.appendChild(contactButton);
}

function createImageWithContact(parent, imgSrc) {
  parent.classList.add("image-with-contact");

  const img = document.createElement("img");
  img.src = imgSrc;
  img.classList.add("img-rectangle");

  const contactButton = document.createElement("a");
  contactButton.classList.add("btn-contact");
  contactButton.href = "https://wa.me/5511977866520";
  contactButton.innerHTML =
    'FALE CONOSCO <img src="images/icons/whatsapp.png" alt="WhatsApp">';
  parent.append(img, contactButton);
}

function createImageElement(parent, imgSrc, className) {
  parent.classList.add(className);
  const img = document.createElement("img");
  img.src = imgSrc;
  img.classList.add(className);
  parent.appendChild(img);
}

function sendForm() {
  const form = document.querySelector("form");
  const formData = new FormData(form);

  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  console.log(data);
}

