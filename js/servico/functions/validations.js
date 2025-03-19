import { templateEmail } from "./template.js";
import { sendForm } from "./email.js";
import { showError } from "./error.js";

export function validateForm(event) {
  event.preventDefault();

  const form = document.querySelector("form");
  const formData = new FormData(form);

  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  data["terms"] = document.getElementById("terms").checked;

  console.log("Validando formulário:", data);

  const validations = [
    {
      field: "email",
      validator: validateEmail,
      errorMessage: "não é válido. Por favor, insira um e-mail válido.",
    },
    {
      field: "phone",
      validator: validatePhone,
      errorMessage: "não é válido. Por favor, insira um telefone válido.",
    },
    {
      field: "cep",
      validator: validateCep,
      errorMessage: "é inválido. Por favor, insira um CEP válido.",
    },
    {
      field: "plate",
      validator: validatePlate,
      errorMessage: "é inválida. Por favor, insira uma placa válida.",
    },
    {
      field: "year",
      validator: validateYear,
      errorMessage: "é inválido. Por favor, insira um ano válido.",
    },
    {
      field: "quantity",
      validator: validateQuantity,
      errorMessage: "não é válida. Por favor, insira uma quantidade válida.",
    },
    {
      field: "value",
      validator: validateMoneyText,
      errorMessage:
        "não é válido. Por favor, insira um valor válido para o equipamento.",
    },
    {
      field: "type",
      validator: validateSelect,
      errorMessage: "não foi selecionado. Por favor, escolha uma opção válida.",
    }
  ];

  let isValid = true;

  const allFields = [
    "first-name",
    "last-name",
    "business-name",
    "address",
    "cep",
    "number",
    "name",
    "email",
    "phone",
    "type",
    "plate",
    "year",
    "model",
    "quantity",
    "value",
    "message",
    "terms",
  ];

  for (const field of allFields) {
    if (data[field] === undefined) continue;

    if (field === "terms" && !data[field]) {
      showError(field, "Você deve aceitar as políticas de privacidade.");
      isValid = false;
      break;
    }

    if (field !== "message" && !validateEmpty(data[field])) {
      showError(field, `${field} não pode estar vazio.`);
      isValid = false;
      break;
    }

    const validation = validations.find((v) => v.field === field);
    if (validation && data[field] && !validation.validator(data[field])) {
      showError(field, validation.errorMessage);
      isValid = false;
      break;
    }

    const errorLabel = document.getElementById(`${field}-label`);
    const errorMessage = document.getElementById("error-message");

    if (errorLabel.classList.contains("error")) {
      errorLabel.classList.remove("error");
      errorMessage.style.display = "none";
    }
  }

  if (isValid) {
    console.log("Formulário válido:", data);
    sendForm(templateEmail(data));
  }
}

function validateEmpty(value) {
  return value && value.trim() !== "";
}

function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailPattern.test(email);
}

function validatePhone(phone) {
  const phonePattern = /^\([1-9]{2}\) [2-9] [0-9]{3,4}-[0-9]{4}$/;
  return phonePattern.test(phone);
}

function validateCep(cep) {
  const cepPattern = /^[0-9]{5}-[0-9]{3}$/;
  return cepPattern.test(cep);
}

function validatePlate(plate) {
  const platePattern1 = /^[A-Z]{3}-[0-9]{4}$/;
  const platePattern2 = /^[A-Z]{3}-[0-9]{1}[A-Z]{1}[0-9]{2}$/;

  return platePattern1.test(plate) || platePattern2.test(plate);
}

function validateYear(year) {
  const currentYear = new Date().getFullYear();
  return /^\d{4}$/.test(year) && year >= 1900 && year <= currentYear;
}

function validateQuantity(quantity) {
  return Number.isInteger(quantity) && quantity > 0;
}

function validateMoneyText(value) {
  const regex =
    /^R\$\s([1-9]{1}\d{0,2}(\.\d{3})*|[1-9]{1}\d{0,2}(\.\d{3}){0,2})\,\d{2}$/;
  const match = value.match(regex);

  if (!match) return false;

  const numberValue = value.replace(/[^\d,]/g, "").replace(",", ".");
  const parsedValue = parseFloat(numberValue);

  return parsedValue >= 1 && parsedValue <= 999000000;
}

function validateSelect(select) {
  return !select.includes("Selecione");
}