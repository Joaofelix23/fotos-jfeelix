/* ==========================================================
   JFELIX® — ENGINE DA GALERIA DE FOTOS
   ========================================================== */

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  const $ = (s, r = document) => r.querySelector(s);
  const galeriaRaiz = $("#galeria-albuns");

  if (!galeriaRaiz || typeof ALBUNS_FOTOS === "undefined") return;

  galeriaRaiz.innerHTML = ALBUNS_FOTOS.map(album => {
    const fotoCapa = album.fotos.find(f => f.destaque) || album.fotos[0] || { url: "img/placeholder.jpg", legenda: "" };

    const metricasHTML = (album.metricas || []).map(m => `
      <div class="stat-box">
        <span class="label">${m.indicador}</span>
        <h4 class="stat-number" data-target="${m.target}" data-suffix="${m.suffix || ''}">0</h4>
      </div>
    `).join("");

    return `
      <article class="album-card">
        <div class="album-cover" onclick="abrirFoto('${fotoCapa.url}', '${album.titulo}')">
          <img src="${fotoCapa.url}" alt="${album.titulo}" loading="lazy">
          <span class="pill-tag">${album.categoria}</span>
        </div>
        <div class="album-info">
          <h3>${album.titulo}</h3>
          <p class="desc">${album.descricao}</p>
          ${album.metricas ? `<div class="album-stats">${metricasHTML}</div>` : ""}
        </div>
      </article>
    `;
  }).join("");

  window.abrirFoto = function (src, titulo) {
    const modal = $("#modal-lightbox");
    if (!modal) return;
    $("#img-modal").src = src;
    $("#caption-modal").textContent = titulo;
    modal.showModal();
  };

  const modal = $("#modal-lightbox");
  if (modal) {
    const fecharBtn = $(".m-x", modal) || modal.querySelector("button");
    if (fecharBtn) fecharBtn.addEventListener("click", () => modal.close());
    modal.addEventListener("click", e => { if (e.target === modal) modal.close(); });
  }
});