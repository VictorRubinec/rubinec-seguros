export function showError(fieldName, errorText) {
  console.log("Erro no campo:", fieldName);
  const errorMessage = getError(fieldName, errorText);

  const field = document.querySelector(`[name=${fieldName}]`);
  field.focus();

  if (fieldName !== "terms") {
    const label = document.getElementById(`${fieldName}-label`);
    label.classList.add("error");
  }

  const error = document.getElementById("error-message");
  error.textContent = errorMessage;
  error.style.display = "block";
}

function getError(field, errorText) {
  switch (field) {
    case "first-name":
      errorText = errorText.replace("first-name", "Primeiro nome");
      break;
    case "last-name":
      errorText = errorText.replace("last-name", "Sobrenome");
      break;
    case "business-name":
      errorText = errorText.replace("business-name", "Nome da empresa");
      break;
    case "name":
      errorText = errorText.replace("name", "Nome");
      break;
    case "cep":
      errorText = errorText.replace("cep", "CEP");
      break;
    case "address":
      errorText = errorText.replace("address", "Endereço");
      break;
    case "number":
      errorText = errorText.replace("number", "Número");
      break;
    case "email":
      errorText = errorText.replace("email", "E-mail");
      break;
    case "phone":
      errorText = errorText.replace("phone", "Telefone");
      break;
    case "type":
      errorText = errorText.replace("type", "Tipo");
      break;
    case "plate":
      errorText = errorText.replace("plate", "Placa");
      break;
    case "year":
      errorText = errorText.replace("year", "Ano");
      break;
    case "model":
      errorText = errorText.replace("model", "Modelo");
      break;
    case "quantity":
      errorText = errorText.replace("quantity", "Quantidade");
      break;
    case "value":
      errorText = errorText.replace("value", "Valor");
      break;
    case "message":
      errorText = errorText.replace("message", "Mensagem");
      break;
    default:
      break;
  }

  return errorText;
}
