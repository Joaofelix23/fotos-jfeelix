/* ==========================================================
   JFELIX® — DADOS DA GALERIA DE FOTOS
   ========================================================== */

const CONTATO_FOTOS = {
  email: "jvx.felix@gmail.com",
  instagram: "https://instagram.com/jfeelix_",
  whatsapp: "https://wa.me/5515998057042"
};

const ALBUNS_FOTOS = [
  {
    id: "fotografia-pessoas-eventos",
    titulo: "Fotografia em Eventos & Expedições",
    categoria: "Pessoas & Movimento",
    descricao: "Captação autêntica e expressiva focada na essência humana, interações reais, dinamismo de multidões e a energia viva em grandes coberturas e expedições.",
    fotos: [
      { url: "img/evento-1.jpg", legenda: "Cobertura de Eventos & Público", destaque: true },
      { url: "img/evento-2.jpg", legenda: "Expressão e Movimento", destaque: false }
    ],
    metricas: [
      { indicador: "Eventos Cobertos", target: 25, suffix: "+" },
      { indicador: "Pessoas Registradas", target: 10, suffix: " mil+" }
    ]
  },
  {
    id: "fotografia-produtos",
    titulo: "Fotografia de Produtos",
    categoria: "Comercial & Estúdio",
    descricao: "Direção de arte e iluminação estratégica voltada a valorizar detalhes, texturas, design e identidade visual de marcas, com forte apelo estético para o mercado de consumo.",
    fotos: [
      { url: "img/produto-1.jpg", legenda: "Still & Detalhes de Produto", destaque: true },
      { url: "img/produto-2.jpg", legenda: "Composição Comercial", destaque: false }
    ],
    metricas: [
      { indicador: "Campanhas", target: 15, suffix: "" },
      { indicador: "Produtos Detalhados", target: 120, suffix: "+" }
    ]
  }
];
