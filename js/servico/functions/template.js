export function templateEmail(data) {
  let emailTemplate = null;

  if (data["first-name"]) {
    if (data["value"]) {
      emailTemplate = {
        title: "Cotação de Seguro para Equipamento",
        content: `Nova cotação solicitada!
  
  Recebemos uma solicitação de cotação do seguro de equipamento para o cliente ${data["first-name"]} ${data["last-name"]}.
  
  Dados do Equipamento:
  - Tipo: ${data["type"]}
  - Valor estimado: R$ ${data["value"]}
  
  Dados do Cliente:
  - Nome: ${data["first-name"]} ${data["last-name"]}
  - E-mail: ${data["email"]}
  - Telefone: ${data["phone"]}
  
  Mensagem:  
  ${data["message"]}
  
  Por favor, entre em contato com o cliente.
  
  Atenciosamente,  
  Equipe Rubinec Seguros`,
      };
    } else if (data["type"]) {
      emailTemplate = {
        title: "Cotação de Seguro para Veículo",
        content: `Nova cotação solicitada!
  
  Recebemos uma solicitação de cotação do seguro de veículo para o cliente ${data["first-name"]} ${data["last-name"]}.
  
  Dados do Veículo:
  - Tipo: ${data["type"]}
  - Placa: ${data["plate"]}
  - Ano: ${data["year"]}
  - Modelo: ${data["model"]}
  
  Dados do Cliente:
  - Nome: ${data["first-name"]} ${data["last-name"]}
  - E-mail: ${data["email"]}
  - Telefone: ${data["phone"]}
  
  Mensagem:  
  ${data["message"]}
  
  Por favor, entre em contato com o cliente.
  
  Atenciosamente,  
  Equipe Rubinec Seguros`,
      };
    } else if (data["plate"]) {
      emailTemplate = {
        title: "Cotação de Seguro para Moto",
        content: `Nova cotação solicitada!
  
  Recebemos uma solicitação de cotação do seguro de moto para o cliente ${data["first-name"]} ${data["last-name"]}.
  
  Dados da Moto:
  - Placa: ${data["plate"]}
  - Ano: ${data["year"]}
  - Modelo: ${data["model"]}
  
  Dados do Cliente:
  - Nome: ${data["first-name"]} ${data["last-name"]}
  - E-mail: ${data["email"]}
  - Telefone: ${data["phone"]}
  
  Mensagem:  
  ${data["message"]}
  
  Por favor, entre em contato com o cliente.
  
  Atenciosamente,  
  Equipe Rubinec Seguros`,
      };
    } else if (data["quantity"]) {
      emailTemplate = {
        title: "Cotação de Seguro de Saúde Pessoal",
        content: `Nova cotação solicitada!
  
  Recebemos uma solicitação de cotação do seguro de saúde para o cliente ${data["first-name"]} ${data["last-name"]}.
  
  Dados do Seguro de Saúde:
  - Quantidade de pessoas: ${data["quantity"]}
  
  Dados do Cliente:
  - Nome: ${data["first-name"]} ${data["last-name"]}
  - E-mail: ${data["email"]}
  - Telefone: ${data["phone"]}
  
  Mensagem:  
  ${data["message"]}
  
  Por favor, entre em contato com o cliente.
  
  Atenciosamente,  
  Equipe Rubinec Seguros`,
      };
    } else {
      emailTemplate = {
        title: "Cotação de Seguro Pessoal",
        content: `Nova cotação solicitada!
  
  Recebemos uma solicitação de cotação do seguro para o cliente ${data["first-name"]} ${data["last-name"]}.
  
  Dados do Cliente:
  - Nome: ${data["first-name"]} ${data["last-name"]}
  - E-mail: ${data["email"]}
  - Telefone: ${data["phone"]}
  
  Mensagem:  
  ${data["message"]}
  
  Por favor, entre em contato com o cliente.
  
  Atenciosamente,  
  Equipe Rubinec Seguros`,
      };
    }
  } else if (data["business-name"]) {
    if (data["address"]) {
      emailTemplate = {
        title: "Cotação de Seguro para Endereço Comercial",
        content: `Nova cotação solicitada!
  
  Recebemos uma solicitação de cotação de seguro para o endereço comercial ${data["business-name"]}.
  
  Dados do Endereço:
  - Endereço: ${data["address"]}
  - CEP: ${data["cep"]}
  - Número: ${data["number"]}
  
  Dados do Cliente:
  - Nome: ${data["name"]}
  - E-mail: ${data["email"]}
  - Telefone: ${data["phone"]}
  
  Mensagem:  
  ${data["message"]}
  
  Por favor, entre em contato com o cliente.
  
  Atenciosamente,  
  Equipe Rubinec Seguros`,
      };
    } else if (data["quantity"]) {
      emailTemplate = {
        title: "Cotação de Seguro de Saúde Empresarial",
        content: `Nova cotação solicitada!
  
  Recebemos uma solicitação de cotação do seguro de saúde empresarial para o cliente ${data["business-name"]}.
  
  Dados do Seguro de Saúde:
  - Quantidade de pessoas: ${data["quantity"]}
  
  Dados do Cliente:
  - Nome: ${data["name"]}
  - E-mail: ${data["email"]}
  - Telefone: ${data["phone"]}
  
  Mensagem:  
  ${data["message"]}
  
  Por favor, entre em contato com o cliente.
  
  Atenciosamente,  
  Equipe Rubinec Seguros`,
      };
    } else {
      emailTemplate = {
        title: "Cotação de Seguro Comercial",
        content: `Nova cotação solicitada!
  
  Recebemos uma solicitação de cotação do seguro para a empresa ${data["business-name"]}.
  
  Dados do Cliente:
  - Nome: ${data["name"]}
  - E-mail: ${data["email"]}
  - Telefone: ${data["phone"]}
  
  Mensagem:  
  ${data["message"]}
  
  Por favor, entre em contato com o cliente.
  
  Atenciosamente,  
  Equipe Rubinec Seguros`,
      };
    }
  }

  if (!emailTemplate) {
    console.error("Template não encontrado para os dados fornecidos.");
    return null;
  }

  return emailTemplate;
}
