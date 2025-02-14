// types = text_simple, text_bold, topic_simple, topic_bold, header

// text_simple = texto sem titulo
// lista de textos, onde cada segmento é um paragrafo

// text_bold = texto com titulo em negrito
// dict com titulo e lista de texto, onde cada segmento da lista de textos é um paragrafo

// topic_simple = lista de itens com titulo simples
// dict com uma lista de textos e lista de itens, onde cada segmento da lista de textos é um paragrafo e cada segmento da lista de itens é um item

// topic_bold = lista de itens com titulo em negrito
// dict com titulo e lista de itens, onde cada segmento da lista de itens é um item

// header = titulo principal
// string normal

export const InsuranceComponents = [
  {
    id: "seguro-de-automovel",
    title: "Seguro de Automóvel",
    types: ["text_simple", "topic_bold", "topic_bold"],
    contents: [
      [
        "O seguro para automóvel tem o objetivo de cobrir danos parciais ou perda total causados ao veículo segurado. Além dos prejuízos de reparo do veículo ou da indenização, a apólice cobre as despesas com o socorro e salvamento do veículo.",
      ],
      {
        title: "Coberturas básicas:",
        itens: [
          "Colisão, incêndio e roubo/furto.",
          "Danos a terceiros.",
          "Danos corporais aos passageiros.",
        ],
      },
      {
        title: "Coberturas adicionais:",
        itens: [
          "Reparo ou substituição de vidros, lanternas, faróis e retrovisores.",
          "Aluguel de carro reserva.",
          "Isenção de franquia.",
          "Assistência 24hs.",
        ],
      },
    ],
  },
  {
    id: "seguro-de-moto",
    title: "Seguro de Moto",
    types: ["text_bold", "text_bold", "text_bold", "text_bold"],
    contents: [
      {
        title: "Proteção contra roubo de moto ou furto:",
        text: [
          "Em casos de roubo ou furto, você pode contar com indenização de até 100% da tabela FIPE onde não há recuperação da motocicleta. Você conta também com assistência 24 horas, para ficar livre de qualquer situação que venha a acontecer no dia a dia.",
        ],
      },
      {
        title: "Serviços de assistência 24 horas:",
        text: [
          "Oferece serviços de assistência 24 horas em caso de acidentes, roubo ou furto de moto, com atendimento disponível para todo o território brasileiro.",
        ],
      },
      {
        title: "Serviço de chaveiro:",
        text: [
          "Disponível nos casos em que haja impossibilidade, perda ou esquecimento da chave. Um chaveiro será enviado até o local onde está sua motocicleta, para poder te ajudar.",
        ],
      },
      {
        title: "Guincho e reboque:",
        text: [
          "Caso ocorra uma pane, avaria ou acidente e sua moto não tenha disponibilidade de locomoção, a Central de Assistência Suhai irá providenciar um reboque para levar seu veículo para a oficina mais próxima.",
        ],
      },
    ],
  },
  {
    id: "seguro-de-bike",
    title: "Seguro de Bike",
    types: ["text_simple", "topic_simple", "topic_bold"],
    contents: [
      ["O seguro de bicicleta é parecido com o seguro de carro e de moto."],
      {
        title:
          "No caso do seguro de bicicleta, existem coberturas para situações como:",
        itens: [
          "Colisão.",
          "Roubo.",
          "Furto.",
          "Danos a terceiros.",
          "Entre outros.",
        ],
      },
      {
        title: "Coberturas opcionais:",
        itens: [
          "Responsabilidade civil.",
          "Danos à bicicleta.",
          "Assistência 24 horas.",
          "Transporte.",
          "Extensão para transporte.",
          "Internacional.",
          "Reboque.",
        ],
      },
    ],
  },
  {
    id: "seguro-de-vida",
    title: "Seguro de Vida",
    types: ["text_simple", "topic_bold", "topic_bold"],
    contents: [
      [
        "O seguro de vida é um contrato que garante uma indenização em dinheiro para o segurado ou seus beneficiários em caso de morte, invalidez, acidentes ou outras situações previstas.",
        "O objetivo do seguro de vida é proporcionar proteção financeira para o segurado e sua família. A indenização pode ser usada para cobrir despesas adicionais, como funeral, assistência residencial, entre outros.",
        "O segurado escolhe os beneficiários do seguro, que são as pessoas que receberão a indenização em caso de morte. Se não houver beneficiários designados, o seguro será pago ao cônjuge e/ou herdeiros do falecido.",
        "Solicite uma cotação! Vamos apresentar as melhores opções para suas necessidades.",
      ],
      {
        title: "Coberturas básicas:",
        itens: ["Morte natural ou morte acidental."],
      },
      {
        title: "Coberturas adicionais:",
        itens: [
          "Invalidez permanente total ou parcial por acidente.",
          "Diária por incapacidade temporária (DIT).",
          "Doenças graves.",
          "Despesas médico-hospitalares e odontológicas.",
          "Assistência funeral individual ou familiar.",
          "Majoração (disponível para médicos e dentistas).",
          "Outras.",
        ],
      },
    ],
  },
  {
    id: "seguro-saude",
    title: "Seguro Saúde",
    types: ["text_simple", "topic_bold", "text_simple"],
    contents: [
      [
        "O seguro saúde é um serviço que oferece assistência médica, hospitalar e terapêutica. O segurado paga uma mensalidade, chamada de prêmio, para ter acesso a uma rede de profissionais de saúde.",
        "O seguro saúde pode ser contratado de forma individual, familiar, coletiva por adesão ou coletiva empresarial.",
      ],
      {
        title: "O seguro saúde pode oferecer os seguintes benefícios: ",
        itens: [
          "Cobertura para despesas médicas e hospitalares.",
          "Assistência médica 24 horas por telefone.",
          "Programas de prevenção de saúde.",
          "Descontos em medicamentos.",
          "Coleta domiciliar de exames.",
          "Psicólogos online.",
        ],
      },
      [
        "O seguro saúde pode ter exclusões, ou seja, cuidados médicos que não estão cobertos pelo seguro.",
        "O valor do seguro saúde pode variar de acordo com a seguradora e as coberturas contratadas.",
      ],
    ],
  },
  {
    id: "previdencia",
    title: "Previdência",
    types: [
      "text_simple",
      "header",
      "text_bold",
      "text_bold",
      "text_bold",
      "topic_simple",
      "topic_simple",
      "text_simple",
    ],
    contents: [
      [
        "Comece a planejar agora mesmo um futuro com mais segurança e proteção financeira para você e sua família. A Previdência Privada oferece planos personalizados que permitem a complementação de sua renda de aposentadoria.",
      ],
      "Planos disponíveis",
      {
        title: "VGBL (Vida Gerador de Benefício Livre)",
        text: [
          "Ideal para quem utiliza o modelo simplificado da declaração de Imposto de Renda, no qual a tributação incide somente sobre os rendimentos do plano no momento do resgate e/ou no recebimento sob a forma de renda.",
        ],
      },
      {
        title: "PGBL (Plano Gerador de Benefício Livre)",
        text: [
          "Criado para quem declara o Imposto de Renda pelo modelo completo. As contribuições pagas pelo participante terão direito ao incentivo fiscal de dedução da base de cálculo do IR ou na declaração anual, limitado a 12% da sua renda bruta anual tributável, reduzindo o valor a ser pago ou aumentando o valor da sua restituição.",
          "O PGBL é uma boa opção para contribuintes da Previdência Social, seja no setor público ou privado.",
        ],
      },
      {
        title: "Previdência Infantil (Prever)",
        text: [
          "A previdência privada infantil é um plano de investimento que visa garantir a segurança financeira de uma criança. É uma forma de poupar dinheiro e acumular patrimônio para o futuro.",
          "A previdência privada infantil pode ser contratada por qualquer adulto, como pais, avós, tios, padrinhos, madrinhas, ou até mesmo pessoas sem vínculo familiar.",
        ],
      },
      {
        title: "Vantagens da previdência privada infantil:",
        itens: [
          "Pode ser uma herança financeira para as gerações futuras.",
          "Pode ser uma forma de proteção no caso do falecimento do titular da conta.",
          "Pode oferecer rendimentos melhores do que a poupança.",
          "Pode ser um complemento à previdência social.",
        ],
      },
      {
        title: "Como funciona a previdência privada?",
        itens: [
          "O responsável legal do menor contrata o plano.",
          "O dinheiro é aplicado no mercado financeiro.",
          "O montante cresce ao longo do tempo, devido aos juros.",
          "O resgate pode ser planejado para uma data específica, como a maioridade da criança.",
        ],
      },
      [
        "O plano pode ser contratado de várias formas, dependendo da situação da criança.",
      ],
    ],
  },
  {
    id: "seguro-residencial",
    title: "Seguro Residencial",
    types: ["text_simple", "topic_bold", "topic_bold"],
    contents: [
      [
        "Cobre os danos materiais causados por incêndio, raio ou explosão ao imóvel segurado, bem como outras coberturas adicionais.",
      ],
      {
        title: "Coberturas básicas:",
        itens: ["Incêndio.", "Explosão.", "Fumaça."],
      },
      {
        title: "Coberturas adicionais:",
        itens: [
          "Danos morais.",
          "Subtração de bicicletas.",
          "Desmoronamento.",
          "Vazamento de tubulações.",
          "Danos elétricos.",
          "Impacto de veículos.",
          "Vendaval, furacão, ciclone, tornado e queda de granizo.",
          "Quebra de vidros.",
          "Responsabilidade civil familiar.",
          "Subtração de bens.",
          "Escritório em residência.",
          "Perda ou pagamento de aluguel.",
        ],
      },
    ],
  },
  {
    id: "consorcio",
    title: "Consórcio",
    types: [
      "text_bold",
      "header",
      "text_bold",
      "text_bold",
      "text_bold",
      "text_bold",
    ],
    contents: [
      {
        title: "O que é o Consórcio?",
        text: [
          "É uma forma compartilhada de adquirir crédito sem juros. Funciona assim: um grupo de pessoas com o mesmo objetivo se reúnem, e através do pagamento de parcelas mensais juntam um montante de valores, que será distribuído mensalmente para os contemplados através de sorteio ou lance.",
          "Tudo isso fiscalizado pelo Banco Central e no nosso caso, administrado pelo Porto Bank, passando toda segurança e credibilidade para você conquistar seu objetivo!",
        ],
      },
      "Consórcios disponíveis",
      {
        title: "Consórcio de Imóvel",
        text: [
          "Casa, terreno ou reforma, com parcelas reduzidas até a contemplação.",
        ],
      },
      {
        title: "Consórcio de Carro",
        text: ["Conquiste seu carro novo ou seminovo sem entrada e sem juros."],
      },
      {
        title: "Consórcio de Veículo Pesado",
        text: [
          "Caminhão, ônibus ou trator, com parcelas reduzidas até a contemplação.",
        ],
      },
      {
        title: "Consórcio Bike",
        text: ["De urbana a elétrica, sua nova bike é garantida sem juros."],
      },
    ],
  },
  {
    id: "equipamentos-portateis",
    title: "Equipamentos Portáteis",
    types: [
      "text_simple",
      "topic_bold",
      "topic_bold",
      "topic_bold",
      "topic_bold",
    ],
    contents: [
      [
        "Você já pensou em contratar um seguro para seu notebook, smartphone, iPhone etc., iPad ou outros modelos de tablets, câmera fotográficas e filmadoras e assim garantir a reposição do equipamento em caso de danos ou roubo?",
        "Para você que se locomove com frequência e não quer correr o risco de ficar sem sua ferramenta de trabalho e comunicação, desenvolvemos o Seguro para Equipamentos Portáteis, que garante a reposição do seu equipamento no caso de incêndio, raio, explosão e impacto de veículos terrestres e aeronaves. Você também pode contratar a cobertura opcional para subtração de bens e danos elétricos, além de garantia internacional.",
      ],
      {
        title: "Produtos seguráveis:",
        itens: [
          "Smartphones.",
          "Smartwatches.",
          "Tablets.",
          "Notebooks.",
          "Câmeras fotográficas e filmadoras.",
        ],
      },
      {
        title: "Principais coberturas:",
        itens: [
          "Caso de acidentes",
          "Caso de incêndio",
          "Queda de raio",
          "Dano na tentativa de roubo",
          "Impacto de veículos",
        ],
      },
      {
        title: "Para equipamentos adquiridos fora do Brasil:",
        itens: [
          "Quando adquirido no exterior, a cotação do equipamento deve ser realizada em moeda nacional e informada no campo <b>Valor da Nota Fiscal</b>.",
          "Em caso de documentos em língua estrangeira, diferente do inglês, será necessário documento com as especificações da marca, modelo e número de série.",
        ],
      },
      {
        title:
          "Para equipamentos em que a Nota Fiscal está em nome de terceiros:",
        itens: [
          "Em caso de Nota Fiscal com nome diferente do segurado, será exigida carta de doação ou documento que comprove a aquisição.",
        ],
      },
    ],
  },
  {
    id: "seguro-de-condominio",
    title: "Seguro de Condomínio",
    types: ["text_simple", "topic_bold", "topic_bold"],
    contents: [
      [
        "Seguro ideal para condomínios verticais residenciais, comerciais, mistos, de escritórios e/ou consultórios, flats e apart-hotéis, bem como condomínios residenciais horizontais. Com preço acessível e pagamento facilitado, ele oferece inúmeras vantagens.",
        "Ele é um seguro completo, oferece coberturas que protegem o condomínio, o síndico e os colaboradores, além de facilidades e benefícios na contratação, serviços emergenciais gratuitos, preços e condições de pagamentos vantajosos.",
      ],
      {
        title: "Coberturas básicas:",
        itens: ["Incêndio.", "Explosão.", "Fumaça", "Queda de aeronaves."],
      },
      {
        title: "Coberturas adicionais:",
        itens: [
          "Danos morais.",
          "Vendaval e impacto de veículos.",
          "Responsabilidade civil da guarda de veículos.",
          "Vida e acidentes pessoais de funcionários.",
          "Portões.",
          "Alagamento.",
          "Desmoronamento.",
          "Chuveiros automáticos (sprinklers).",
          "Tumultos, greves e lockout.",
          "Subtração de valores.",
          "Despesas fixas.",
          "Responsabilidade civil empregador.",
          "Danos elétricos.",
          "Quebra de vidros.",
          "Painéis, anúncios luminosos e letreiros.",
          "Subtração de bens do condomínio.",
          "Subtração de bens de condôminos (moradores).",
          "Incêndio, fumaça e explosão de conteúdo de apartamentos.",
          "Responsabilidade civil condomínio.",
          "Responsabilidade civil do síndico.",
          "Outros.",
        ],
      },
    ],
  },
  {
    id: "seguro-empresarial",
    title: "Seguro Empresarial",
    types: ["text_simple", "topic_bold", "topic_bold"],
    contents: [
      [
        "A proteção ideal para empresas de todos os tamanhos e segmentos.",
        "O Seguro Empresarial garante a proteção na medida certa para pequenas, médias e grandes empresas que atuam nos setores de comércio, indústria ou serviço. Tudo para facilitar o dia a dia do seu negócio.",
      ],
      {
        title: "Coberturas básicas:",
        itens: ["Incêndio.", "Explosão.", "Queda de raio."],
      },
      {
        title: "Coberturas adicionais:",
        itens: [
          "Roubo ou furto.",
          "Despesas de recomposição de registros e documentos.",
          "Quebra de vidros e anúncios luminosos.",
          "Danos elétricos.",
          "Perda ou pagamento de aluguel.",
          "Diárias de paralisação.",
          "Equipamentos móveis e estacionários.",
          "Outros.",
        ],
      },
    ],
  },
  {
    id: "seguro-de-vida-empresarial",
    title: "Seguro de Vida Empresarial",
    types: ["text_bold", "topic_bold", "topic_bold"],
    contents: [
      {
        title: "Por que contratar o Seguro de Vida Empresarial?",
        text: [
          "A Porto oferece planos completos e acessíveis de proteção e assistência aos funcionários, deixando sua empresa preparada para possíveis situações inesperadas. O seguro de vida empresarial proporciona mais tranquilidade aos colaboradores e seus familiares, além de minimizar impactos ocasionados por eventos inesperados como acidentes ou falecimento.",
          "O seguro de vida empresarial pode ser contratado por todos os tipos de empresa, incluindo prestadores de serviço.",
          "Os custos podem ter a participação ou não do colaborador e a empresa poderá deduzir o valor do seguro no Imposto de Renda. Os benefícios podem ser estendidos a cônjuges e filhos.",
        ],
      },
      {
        title: "Coberturas básicas:",
        itens: ["Morte natural ou morte acidental."],
      },
      {
        title: "Coberturas adicionais:",
        itens: [
          "Invalidez permanente total ou parcial por acidente.",
          "Diária por incapacidade temporária (DIT).",
          "Despesas médico-hospitalares e odontológicas.",
          "Assistência funeral individual ou familiar.",
          "Majoração (disponível para médicos e dentistas).",
          "Outros.",
        ],
      },
    ],
  },
  {
    id: "previdencia-empresarial",
    title: "Previdência Empresarial",
    types: ["text_simple", "header", "text_bold", "text_bold", "text_bold"],
    contents: [
      [
        "Invista em produtividade e retenha talentos.",
        "Comece a planejar agora mesmo um futuro com mais segurança e proteção financeira para você e sua família. A Previdência Privada oferece planos personalizados que permitem a complementação de sua renda de aposentadoria.",
      ],
      "Planos disponíveis",
      {
        title: "VGBL (Vida Gerador de Benefício Livre):",
        text: [
          "Ideal para quem utiliza o modelo simplificado da declaração de Imposto de Renda, no qual a tributação incide somente sobre os rendimentos do plano no momento do resgate e/ou no recebimento sob a forma de renda.",
        ],
      },
      {
        title: "PGBL (Plano Gerador de Benefício Livre):",
        text: [
          "Criado para quem declara o Imposto de Renda pelo modelo completo. As contribuições pagas pelo participante terão direito ao incentivo fiscal de dedução da base de cálculo do IR ou na declaração anual, limitado a 12% da sua renda bruta anual tributável, reduzindo o valor a ser pago ou aumentando o valor da sua restituição.",
        ],
      },
      {
        title: "Previdência Infantil (Prever):",
        text: [
          "Presenteie seus filhos com algo que eles vão levar por toda a vida: a realização de seus sonhos!  Você define o valor e o tempo de contribuição e ainda pode desfrutar de vantagens e incentivos fiscais de acordo com o seu modelo de declaração de Imposto de Renda.",
        ],
      },
    ],
  },
  {
    id: "responsabilidade-civil",
    title: "Responsabilidade Civil",
    types: ["text_simple", "topic_bold"],
    contents: [
      [
        "O produto de Responsabilidade Civil Profissional foi desenvolvido para profissionais de diversas áreas e o seu objetivo é protegê-los diante de reclamações de terceiros decorrentes de alegadas falhas profissionais por erros ou omissões.",
        "As coberturas garantem as perdas associadas à responsabilidade atribuída ao profissional em consequência da sua prestação de serviços, como custos de defesa, indenizações estipuladas em ações judiciais ou arbitrais contra o segurado, bem como valores decorrentes de acordos celebrados com a anuência prévia e por escrito da seguradora. Há também cobertura para danos morais e custos com restituição de imagem, dentre outros.",
      ],
      {
        title: "Conheça as profissões e coberturas disponíveis:",
        itens: [
          "Médicos e outros profissionais da saúde.",
          "Advogados e/ou escritórios de advocacia.",
          "Engenheiros, arquitetos e/ou escritórios.",
          "Designer de interiores e/ou escritório.",
          "Contador e/ou escritórios.",
          "Administrador e corretor de imóveis, imobiliária e síndico profissional.",
          "Corretores de seguros.",
          "Agentes de viagem e/ou agências.",
          "Certificação digital e/ou escritórios.",
          "Empresas e/ou profissionais de mídia.",
          "Empresas de tecnologia.",
          "Intermediário de jogador de futebol.",
          "Notários e registradores.",
          "Veterinário.",
          "Outros.",
        ],
      },
    ],
  },
  {
    id: "seguro-auto-frota",
    title: "Seguro Auto Frota",
    types: [
      "text_bold",
      "header",
      "topic_bold",
      "topic_bold",
      "topic_bold",
      "topic_bold",
      "topic_bold",
      "topic_bold",
      "topic_bold",
      "topic_bold",
      "header",
      "topic_bold",
      "topic_bold",
      "topic_bold",
      "topic_bold",
    ],
    contents: [
      {
        title: "Por que contratar o Seguro Auto Frota?",
        text: [
          "Com seguro Auto Frota Compacto, você tem coberturas personalizadas que oferecem a proteção ideal para seus veículos e ainda o custo-benefício que você procura.",
        ],
      },
      "Coberturas que protegem você e seus veículos",
      {
        title: "Danos a terceiros",
        itens: [
          "Garante a cobertura de gastos em reparo de danos a bens materiais patrimoniais e danos corporais causados a terceiros em acidentes.",
        ],
      },
      {
        title: "Assistência 24h compacta",
        itens: [
          "Assistência para passageiros e veículos com: guincho 100 km para pane e 2000 km para sinistro, chaveiro, passagens ao destino ou retorno, reaver veículo, hospedagem e outros.",
        ],
      },
      {
        title: "Carroceria e equipamentos",
        itens: [
          "Cobertura para itens acoplados ao veículo. Exemplo: plataforma, munk, caçamba, entre outros.",
        ],
      },
      {
        title: "Acessório",
        itens: ["Cobertura para som e imagem."],
      },
      {
        title: "Reposição de 0km por até 6 meses",
        itens: [
          "Garante a reposição do bem, sem nenhum custo para o cliente durante o prazo de 6 meses, desde que estejam nas condições preestabelecidas no contrato.",
        ],
      },
      {
        title: "Danos Morais e Estéticos",
        itens: [
          "Reembolsa a indenização paga a terceiros — em decorrência de danos morais — envolvidos em acidente de trânsito com o veículo segurado, coberto e indenizável devido a um acionamento judicial. Há, também, as opções de 2º risco, ou seja, quando há necessidade de contratar valores excedentes à contratação da mesma cobertura em uma congênere.",
        ],
      },
      {
        title: "Danos Materiais e Corporais a terceiros – Desatrelado",
        itens: [
          "Cobre eventuais danos corporais e/ou patrimoniais de terceiros. Oferece ainda, as opções de 2º risco, quando há necessidade de contratar valores excedentes a contratação da mesma cobertura em uma congênere. Entende-se como desatrelado, a parte do veículo (reboque ou semirreboque) quando desprendida do cavalo mecânico/rebocador.",
        ],
      },
      {
        title: "Danos Materiais e Corporais a terceiros – Garantia única",
        itens: [
          "Cobre eventuais danos corporais e/ou patrimoniais de terceiros na mesma garantia, dando liberdade ao segurado de utilizá-la no evento de sinistro conforme maior necessidade. Entende-se por 2º risco o critério de contratação de valor complementar desta cobertura, em uma congênere.",
        ],
      },
      "Quais são as cláusulas que podem ser contratadas para sua frota de veículos",
      {
        title: "Vidros:",
        itens: [
          "Cobre a troca ou reparo dos vidros, em caso de quebra ou trincamento de acordo com as condições que foram contratadas no seguro.",
        ],
      },
      {
        title: "Despesas extraordinárias:",
        itens: [
          "Contratação de importância extra limitada aos critérios da seguradora, que será reembolsada ao segurado em momento de sinistro exclusivo de indenização integral.",
        ],
      },
      {
        title: "Extensão de perímetro:",
        itens: [
          "Garante atendimento, exclusivo para o veículo segurado, em caso de sinistro, na Argentina, Paraguai, Uruguai, Chile e Bolívia.",
        ],
      },
      {
        title: "Extensão de cobertura para veículos de rebocados:",
        itens: [
          "Cobre danos materiais ocasionados ao veículo rebocado de terceiros (automotor de via terrestre) em poder do segurado. Cobre danos materiais e/ou corporais a terceiros pelo veículo rebocado durante uma operação de reboque.",
        ],
      },
    ],
  },
  {
    id: "maquinas-e-equipamentos",
    title: "Máquinas e Equipamentos",
    types: ["text_simple", "topic_simple"],
    contents: [
      [
        "O Seguro para Máquinas e Equipamentos é um produto completo que visa proteger bens de diversas categorias, os amparando contra perdas, roubos e danos materiais (inclusive elétricos). As coberturas abrangem equipamentos de construção civil, ramo industrial, médicos, estéticos, de análises e medição, mobilidade, como cadeira de rodas, além de equipamentos diversos, como monociclos e equipamentos de energia solar (placas solares).",
      ],
      {
        title:
          "Coberturas que podem ser contratadas em complemento à cobertura básica e que oferecem ainda mais segurança e tranquilidade a você:",
        itens: [
          "Danos elétricos.",
          "Içamento, carga e descarga.",
          "Perda e/ou pagamento de aluguel (PI: 6 meses).",
          "Responsabilidade civil máquinas.",
          "Equipamentos próximos à água.",
          "Responsabilidade civil operador.",
          "Furto simples.",
        ],
      },
    ],
  },
  {
    id: "plano-de-saude-empresarial",
    title: "Plano de Saúde Empresarial",
    types: [
      "text_simple",
      "topic_bold",
      "topic_bold",
      "topic_bold",
      "topic_bold",
      "topic_bold",
      "text_simple",
    ],
    contents: [
      [
        "O plano de saúde empresarial é um convênio médico coletivo que empresas oferecem aos seus funcionários. Ele pode ser contratado por empresas de todos os portes, inclusive MEI.",
      ],
      {
        title: "Principais características:",
        itens: [
          "Garante acesso a uma rede médica e hospitalar.",
          "Pode ser pago integralmente pela empresa ou ter uma co-participação financeira dos funcionários.",
          "A empresa negocia melhores condições e preços com a operadora de saúde.",
          "A cobertura e os benefícios podem ser pré-definidos pela empresa ou oferecidos aos funcionários.",
          "É regulamentado pela Agência Nacional de Saúde Suplementar (ANS).",
        ],
      },
      {
        title: "Vantagens do plano de saúde empresarial:",
        itens: [
          "Aumenta a produtividade e melhora a qualidade de vida no trabalho.",
          "Reduz significativamente o número de atestados e afastamentos.",
          "É um dos pilares para a entidade ser bem-vista no mercado.",
        ],
      },
      {
        title: "Quem pode ter acesso ao plano de saúde empresarial?",
        itens: [
          "Funcionários da empresa.",
          "Dependentes dos funcionários.",
          "Trabalhadores temporários.",
          "Colaboradores aposentados.",
        ],
      },
      {
        title:
          "Para escolher o plano de saúde empresarial, é importante considerar os seguintes critérios:",
        itens: [
          "Faixa etária.",
          "Gênero.",
          "Estado civil.",
          "Presença de doenças crônicas.",
        ],
      },
      {
        title: "Conheça as opções:",
        itens: [
          "<b>Ambulatorial</b>, engloba consultas médicas em clínicas e, ou, consultórios, exames e tratamentos ambulatoriais.",
          "<b>Hospitalar</b>, para assistência hospitalar, como pronto-socorro e, ou, internações com possibilidade de serviço obstetra, a depender da empresa.",
          "<b>Segmentado</b>, pode englobar serviços ambulatoriais, internação, cirurgia, tratamentos e obstetrícia.",
          "<b>Odontológico</b>, exclusivo para odontologia com coberturas a depender da negociação.",
          "<b>Teleatendimento</b>: disponibilização de serviços através de plataforma online, atendendo funcionários em diferentes localidades, diminuindo gastos e otimizando tempo, com extensão para atendimento presencial quando necessário.",
        ],
      },
      [
        "Em alguns planos, existe também a possibilidade de desconto na compra de medicamentos, com desconto em folha ou na hora do pagamento.",
      ],
    ],
  },
  {
    id: "plano-odontologico",
    title: "Plano Odontológico",
    types: ["text_simple", "topic_bold", "topic_bold"],
    contents: [
      [
        "Planos empresariais a partir de 3 vidas com ampla rede de dentistas referenciados.",
        "Oferecer benefícios para os funcionários tem se tornado uma estratégia essencial para retenção de talentos. Com o Seguro Odontológico os colaboradores da sua empresa podem exibir um sorriso saudável, com custo acessível.",
      ],
      {
        title: "Vantagens do plano odontológico:",
        itens: [
          "Promove a saúde bucal e o bem-estar dos funcionários.",
          "Oferece preços acessíveis.",
          "Os planos também oferecem uma Rede Referenciada com milhares de consultórios, clínicas. Assim, quando um procedimento coberto é realizado por esta rede, o prestador de serviço recebe diretamente e o segurado não precisa pagar pelo atendimento.",
          "Melhora a qualidade de vida dos funcionários.",
          "Pode ser deduzido do Imposto de Renda, desde que comprovados e dentro dos critérios da legislação tributária.",
        ],
      },
      {
        title: "Como funciona:",
        itens: [
          "A empresa contrata uma operadora odontológica.",
          "O funcionário paga um valor mensal, que varia de acordo com a empresa e os serviços cobertos.",
          "O funcionário pode marcar consultas e procedimentos com profissionais da rede credenciada ou ir a um dentista particular e solicitar o reembolso.",
        ],
      },
    ],
  },
];
