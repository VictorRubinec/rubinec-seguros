import { validateForm } from "./validations.js";

export function buildForm(service) {
  const form = document.getElementById("form");

  const fields = service.form;
  const formGrid = service.formGrid;

  const formTitle = document.createElement("h1");
  formTitle.innerHTML = "Solicite sua Cotação";
  form.appendChild(formTitle);

  const formText = document.createElement("p");
  formText.innerHTML =
    "Informe os dados iniciais para sua cotação, os seus dados só serão utilizados para identificá-lo em nosso processo de atendimento.";
  form.appendChild(formText);

  let formIndex = 0;

  const serviceInput = document.createElement("input");
  serviceInput.type = "hidden";
  serviceInput.name = "service";
  serviceInput.value = service.id.replaceAll("-", " ");
  form.appendChild(serviceInput);

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
        addField(fields[formIndex], rowDiv);
        formIndex++;
      }
    }

    form.appendChild(rowDiv);
  });

  const termsContainer = document.createElement("div");
  termsContainer.classList.add("terms-container");
  
  const termsCheckbox = document.createElement("input");
  termsCheckbox.type = "checkbox";
  termsCheckbox.id = "terms";
  termsCheckbox.name = "terms";
  termsCheckbox.required = true;
  
  const termsP = document.createElement("p");
  termsP.innerHTML = `Li e concordo com a <a href="politicas.html" target="_blank">política de privacidade</a>.`;
  
  termsContainer.appendChild(termsCheckbox);
  termsContainer.appendChild(termsP);
  
  form.appendChild(termsContainer);

  const error = document.createElement("div");
  error.id = "error-message";
  error.classList.add("error-message");
  error.style.display = "none";
  form.appendChild(error);

  const submitButton = document.createElement("button");
  submitButton.classList.add("submit");
  submitButton.innerHTML = `Envie seu formulário <img src="images/icons/seta.png" alt="" />`;
  submitButton.onclick = validateForm;
  form.appendChild(submitButton);
}

function addField(field, rowDiv) {
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

  label.id = field.name + "-label";
  label.classList.add("form-field");

  input.type = field.type;
  input.name = field.name;
  input.required = field.required;
  input.placeholder = field.placeholder || "";

  if (field.name === "cep") {
    input.addEventListener("input", formatCep);
  } else if (field.name === "phone") {
    input.addEventListener("input", formatPhone);
  } else if (field.name === "value") {
    input.addEventListener("input", formatMoney);
  } else if (field.name === "plate") {
    input.addEventListener("input", formatPlate);
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

  label.id = field.name + "-label";
  label.classList.add("form-field");

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

  label.id = field.name + "-label";
  label.classList.add("form-field");

  textarea.name = field.name;
  textarea.required = field.required;
  textarea.placeholder = field.placeholder || "";

  span.innerHTML = field.label;

  label.appendChild(textarea);
  label.appendChild(span);

  parent.appendChild(label);
}

function formatCep(event) {
  const cep = event.target.value.replace(/\D/g, "");
  if (cep.length <= 5) {
    event.target.value = cep.replace(/(\d{2})(\d{0,3})/, "$1$2");
  } else {
    event.target.value = cep.replace(/(\d{2})(\d{3})(\d{0,3})/, "$1$2-$3");
  }
}

function formatPhone(event) {
  const phone = event.target.value.replace(/\D/g, "");
  if (phone.length <= 10) {
    event.target.value = phone.replace(
      /(\d{2})(\d{0,1})(\d{0,4})(\d{0,4})/,
      "($1) $2 $3-$4"
    );
  } else {
    event.target.value = phone.replace(
      /(\d{2})(\d{1})(\d{4})(\d{4})/,
      "($1) $2 $3-$4"
    );
  }
}

function formatMoney(event) {
  let money = event.target.value.replace(/\D/g, "");

  let integerPart = money.slice(0, -2) || "0";
  let decimalPart = money.slice(-2);

  if (money.length > 3) {
    integerPart = integerPart.replace(/^0+/, "");
  }

  integerPart = integerPart.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");

  if (decimalPart) {
    event.target.value = `R$ ${integerPart},${decimalPart}`;
  } else {
    event.target.value = `R$ ${integerPart},00`;
  }
}

function formatPlate(event) {
  const plate = event.target.value.replace(/[^a-zA-Z0-9]/g, "");
  if (plate.length <= 3) {
    event.target.value = plate.toUpperCase();
  } else {
    event.target.value =
      plate.slice(0, 3).toUpperCase() + "-" + plate.slice(3, 7);
  }
}

export function successModal() {
  const form = document.getElementById("form");
  if (form) form.reset();

  const error = document.getElementById("error-message");
  if (error) error.style.display = "none";

  const successModal = document.getElementById("success-modal");
  if (successModal) successModal.classList.add("show");
}

document.addEventListener("DOMContentLoaded", () => {
  const modalClose = document.getElementById("modal-close");
  if (modalClose) {
    modalClose.onclick = () => {
      const successModal = document.getElementById("success-modal");
      if (successModal) successModal.classList.remove("show");
    };
  }
});
