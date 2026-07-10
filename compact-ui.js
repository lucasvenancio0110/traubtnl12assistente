(() => {
  const overlay = document.createElement("div");
  overlay.className = "detail-overlay";
  overlay.setAttribute("aria-hidden", "true");
  overlay.innerHTML = `
    <section class="detail-sheet" role="dialog" aria-modal="true" aria-labelledby="sheetTitle">
      <div class="sheet-handle" aria-hidden="true"></div>
      <header class="sheet-header">
        <span id="sheetCode" class="code-badge">—</span>
        <div>
          <h2 id="sheetTitle">Detalhes</h2>
          <p id="sheetMeta"></p>
        </div>
        <button class="sheet-close" type="button" aria-label="Fechar detalhes">×</button>
      </header>
      <div class="sheet-body">
        <p id="sheetDescription" class="sheet-description"></p>
        <div id="sheetDetails" class="detail-grid"></div>
        <div id="sheetWarning"></div>
        <div class="sheet-actions">
          <button id="copyCodeButton" class="sheet-action" type="button">Copiar código</button>
          <button class="sheet-action sheet-close-action" type="button">Fechar</button>
        </div>
      </div>
    </section>
  `;
  document.body.appendChild(overlay);

  const codeElement = overlay.querySelector("#sheetCode");
  const titleElement = overlay.querySelector("#sheetTitle");
  const metaElement = overlay.querySelector("#sheetMeta");
  const descriptionElement = overlay.querySelector("#sheetDescription");
  const detailsElement = overlay.querySelector("#sheetDetails");
  const warningElement = overlay.querySelector("#sheetWarning");
  const copyButton = overlay.querySelector("#copyCodeButton");
  let currentCode = "";

  function openSheet(card) {
    const code = card.querySelector(".code-badge")?.textContent.trim() || "";
    const title = card.querySelector(".code-title")?.textContent.trim() || "Detalhes";
    const meta = card.querySelector(".code-meta")?.textContent.trim() || "";
    const description = card.querySelector(".code-details > p")?.textContent.trim() || "";
    const detailItems = [...card.querySelectorAll(".detail-item")].map((item) => ({
      label: item.querySelector("small")?.textContent.trim() || "Informação",
      value: item.querySelector("strong")?.textContent.trim() || "—"
    }));
    const warning = card.querySelector(".warning")?.textContent.trim() || "";

    currentCode = code;
    codeElement.textContent = code;
    titleElement.textContent = title;
    metaElement.textContent = meta;
    descriptionElement.textContent = description;
    detailsElement.innerHTML = detailItems.map((item) => `
      <div class="detail-item">
        <small>${escapeHtml(item.label)}</small>
        <strong>${escapeHtml(item.value)}</strong>
      </div>
    `).join("");
    warningElement.innerHTML = warning ? `<div class="warning">${escapeHtml(warning)}</div>` : "";

    card.removeAttribute("open");
    overlay.classList.add("open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("sheet-open");
    requestAnimationFrame(() => overlay.querySelector(".sheet-close")?.focus());
  }

  function closeSheet() {
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("sheet-open");
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  document.addEventListener("click", (event) => {
    const summary = event.target.closest(".code-card summary");
    if (summary) {
      event.preventDefault();
      openSheet(summary.closest(".code-card"));
      return;
    }

    if (event.target.closest(".sheet-close, .sheet-close-action")) {
      closeSheet();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && overlay.classList.contains("open")) {
      closeSheet();
    }

    const summary = event.target.closest?.(".code-card summary");
    if (summary && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      openSheet(summary.closest(".code-card"));
    }
  });

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeSheet();
  });

  copyButton.addEventListener("click", async () => {
    if (!currentCode) return;
    try {
      await navigator.clipboard.writeText(currentCode);
      copyButton.textContent = "Copiado";
      setTimeout(() => { copyButton.textContent = "Copiar código"; }, 1200);
    } catch {
      copyButton.textContent = currentCode;
      setTimeout(() => { copyButton.textContent = "Copiar código"; }, 1500);
    }
  });

  window.addEventListener("hashchange", closeSheet);
})();
