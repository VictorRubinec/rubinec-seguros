# Rubinec Seguros 🛡️

Site institucional da **Rubinec Corretora de Seguros**, especializada em soluções personalizadas de seguros para pessoas e empresas em São Paulo.

🌐 **[www.rubinecseguros.com.br](https://www.rubinecseguros.com.br)**

---

## 📄 Páginas

| Página | Descrição |
|---|---|
| `/` | Home — banner, seção sobre e cards de serviços |
| `/sobre.html` | História, missão e valores da empresa |
| `/servico.html` | Detalhes de cada produto com formulário de cotação |
| `/politicas.html` | Política de privacidade (LGPD) |

---

## 🚀 Tecnologias

- **HTML5** — estrutura semântica
- **CSS3 Vanilla** — design responsivo com variáveis CSS
- **JavaScript ES Modules** — lógica modular sem frameworks
- **Google Fonts** — tipografia Inter + Poppins
- **EmailJS** — envio de formulários de cotação sem backend

---

## ✨ Funcionalidades

- ✅ Design responsivo (mobile, tablet e desktop)
- ✅ Menu mobile com animação hambúrguer
- ✅ Cards de serviços dinâmicos (gerados via JS)
- ✅ Formulário de cotação com validação e envio por e-mail
- ✅ Animações de scroll-reveal com `IntersectionObserver`
- ✅ Efeito hover nos cards de serviço
- ✅ Loading screen com spinner
- ✅ SEO otimizado (meta tags, Open Graph, Twitter Card, Schema.org)
- ✅ `sitemap.xml` e `robots.txt` configurados
- ✅ `apple-touch-icon` para iOS/Android

---

## 📁 Estrutura

```
rubinec-seguros/
├── index.html          # Página inicial
├── sobre.html          # Página Sobre
├── servico.html        # Página de Serviço
├── politicas.html      # Política de privacidade
├── sitemap.xml         # Mapa do site para SEO
├── robots.txt          # Instruções para crawlers
├── CNAME               # Domínio personalizado (GitHub Pages)
├── css/
│   ├── style.css       # Estilos globais (header, footer, navbar)
│   ├── index.css       # Estilos da página home
│   ├── sobre.css       # Estilos da página sobre
│   ├── servico.css     # Estilos da página de serviço
│   └── politicas.css   # Estilos da política de privacidade
├── js/
│   ├── global/
│   │   ├── navBar.js   # Menu mobile + preenchimento do dropdown
│   │   ├── script.js   # Scroll-reveal e loading (páginas sem script próprio)
│   │   └── loading.js  # Funções de loading screen
│   ├── index/
│   │   ├── script.js   # Lógica da home (filtro de serviços + scroll-reveal)
│   │   └── components.js # Dados dos cards de serviço
│   └── servico/
│       └── script.js   # Lógica da página de serviço + formulário EmailJS
└── images/             # Imagens e ícones do site
```

---

## 📦 Deploy

O site é hospedado via **GitHub Pages** com domínio personalizado configurado no arquivo `CNAME`.

```
www.rubinecseguros.com.br → VictorRubinec/rubinec-seguros (branch main)
```

---

## 📞 Contato

- **E-mail:** atendimento@rubinecseguros.com.br
- **Telefone:** (11) 4991-3355 / (11) 97786-6520
- **Endereço:** Av. Carlos Liveiro, 522 - Sala 02, Vila Liveiro, São Paulo - SP
- **Instagram:** [@rubinecseguros](https://www.instagram.com/rubinecseguros/)
