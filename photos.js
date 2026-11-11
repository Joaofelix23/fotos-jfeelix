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
    id: "eventos-shows",
    titulo: "Cobertura de Eventos & Shows",
    categoria: "Eventos",
    descricao: "Captação da energia do público, iluminação de palco e momentos espontâneos de bastidores.",
    fotos: [
      { url: "img/show1.jpg", legenda: "Palco Principal — Festival", destaque: true },
      { url: "img/show2.jpg", legenda: "Público e Iluminação", destaque: false }
    ],
    metricas: [
      { indicador: "Eventos Cobertos", target: 25, suffix: "+" },
      { indicador: "Fotos Entregues", target: 5000, suffix: "+" }
    ]
  },
  {
    id: "retratos-lifestyle",
    titulo: "Retratos & Streetwear",
    categoria: "Retratos",
    descricao: "Ensaios urbanos, direção de cena autoral e estética focada em marcas de rua.",
    fotos: [
      { url: "img/portrait1.jpg", legenda: "Ensaio Urbano — Conceito Street", destaque: true }
    ],
    metricas: [
      { indicador: "Ensaios", target: 12, suffix: " coleções" }
    ]
  }
];