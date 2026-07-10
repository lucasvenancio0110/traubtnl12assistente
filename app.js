const mCodes = [
  { code: "M00", title: "Parada programada", category: "Programa", system: "Geral", pair: "—", description: "Interrompe a execução do programa de forma programada.", warning: "A retomada depende da condição segura da máquina e da ação do operador." },
  { code: "M01", title: "Parada opcional", category: "Programa", system: "Geral", pair: "—", description: "Executa a parada somente quando a função de parada opcional estiver habilitada no painel." },
  { code: "M03", title: "Fuso principal em rotação horária", category: "Fuso principal", system: "$1 · S1", pair: "M04 / M05", description: "Liga a rotação do fuso principal no sentido horário definido pela orientação oficial da máquina." },
  { code: "M04", title: "Fuso principal em rotação anti-horária", category: "Fuso principal", system: "$1 · S1", pair: "M03 / M05", description: "Liga a rotação do fuso principal no sentido anti-horário definido pela orientação oficial da máquina." },
  { code: "M05", title: "Parar fuso principal", category: "Fuso principal", system: "$1 · S1", pair: "M03 / M04", description: "Desliga a rotação do fuso principal." },
  { code: "M08", title: "Refrigeração em baixa pressão", category: "Refrigeração", system: "Subsistema ativo", pair: "M09", description: "Liga o fluido de refrigeração em baixa pressão no subsistema correspondente." },
  { code: "M09", title: "Desligar refrigeração", category: "Refrigeração", system: "Subsistema ativo", pair: "M08", description: "Desliga o fluido de refrigeração no subsistema correspondente." },
  { code: "M10", title: "Fixar peça no fuso principal", category: "Fixação", system: "Fuso principal", pair: "M11", description: "Aciona o fechamento do sistema de fixação da peça no fuso principal.", warning: "Confirme a posição da barra, da peça e das ferramentas antes do fechamento." },
  { code: "M11", title: "Soltar peça no fuso principal", category: "Fixação", system: "Fuso principal", pair: "M10", description: "Abre o sistema de fixação da peça no fuso principal.", warning: "Não executar sem validar suporte, posição da peça e condição de rotação." },
  { code: "M17", title: "Ativar eixo C do fuso principal", category: "Eixo C", system: "$1 · C1", pair: "M18", description: "Ativa o eixo C do fuso principal para posicionamento e operações interpoladas." },
  { code: "M18", title: "Desativar eixo C do fuso principal", category: "Eixo C", system: "$1 · C1", pair: "M17", description: "Desativa o funcionamento do eixo C do fuso principal." },
  { code: "M19", title: "Acionar freio do fuso principal", category: "Eixo C", system: "$1 · C1", pair: "M70", description: "Aciona o freio de parada do fuso principal durante o funcionamento com eixo C." },
  { code: "M30", title: "Fim do programa e retorno ao início", category: "Programa", system: "Geral", pair: "—", description: "Finaliza o programa e retorna a execução para o início." },
  { code: "M70", title: "Liberar freio do fuso principal", category: "Eixo C", system: "$1 · C1", pair: "M19", description: "Libera o freio de parada do fuso principal no funcionamento com eixo C." },
  { code: "M77", title: "Soltar peça com o fuso principal girando", category: "Fixação", system: "Fuso principal", pair: "M78", description: "Habilita o desaperto da peça enquanto o fuso principal permanece em rotação, em conjunto com M11.", warning: "Função crítica. Use somente em sequência validada e conforme o programa aprovado." },
  { code: "M78", title: "Desativar função M77", category: "Fixação", system: "Fuso principal", pair: "M77", description: "Cancela a condição especial habilitada pelo M77." },
  { code: "M99", title: "Fim de subprograma", category: "Programa", system: "Geral", pair: "—", description: "Finaliza o subprograma e retorna ao ponto de chamada." },
  { code: "M108", title: "Refrigeração da torre 1 em baixa pressão", category: "Refrigeração", system: "Torre 1", pair: "M109", description: "Liga a refrigeração em baixa pressão da torre 1 a partir de outro subsistema." },
  { code: "M109", title: "Desligar refrigeração da torre 1", category: "Refrigeração", system: "Torre 1", pair: "M108", description: "Desliga a refrigeração da torre 1 comandada por outro subsistema." },
  { code: "M114", title: "Fechar bucha-guia", category: "Bucha-guia", system: "Bucha-guia", pair: "M116", description: "Fecha a bucha-guia na condição de pressão configurada." },
  { code: "M115", title: "Fechar bucha-guia em alta pressão", category: "Bucha-guia", system: "Bucha-guia", pair: "M116", description: "Fecha a bucha-guia utilizando a condição de alta pressão." },
  { code: "M116", title: "Abrir bucha-guia", category: "Bucha-guia", system: "Bucha-guia", pair: "M114 / M115", description: "Abre a bucha-guia." },
  { code: "M403", title: "Contrafuso em rotação horária", category: "Contrafuso", system: "$4 · S4", pair: "M404 / M405", description: "Liga a rotação do contrafuso no sentido horário definido pela orientação oficial da máquina." },
  { code: "M404", title: "Contrafuso em rotação anti-horária", category: "Contrafuso", system: "$4 · S4", pair: "M403 / M405", description: "Liga a rotação do contrafuso no sentido anti-horário definido pela orientação oficial da máquina." },
  { code: "M405", title: "Parar contrafuso", category: "Contrafuso", system: "$4 · S4", pair: "M403 / M404", description: "Desliga a rotação do contrafuso." },
  { code: "M410", title: "Fixar peça no contrafuso", category: "Fixação", system: "Contrafuso", pair: "M411", description: "Aciona o fechamento do sistema de fixação da peça no contrafuso." },
  { code: "M411", title: "Soltar peça no contrafuso", category: "Fixação", system: "Contrafuso", pair: "M410", description: "Abre o sistema de fixação da peça no contrafuso." },
  { code: "M417", title: "Ativar eixo C do contrafuso", category: "Eixo C", system: "$4 · C4", pair: "M418", description: "Ativa o eixo C do contrafuso para posicionamento e operações interpoladas." },
  { code: "M418", title: "Desativar eixo C do contrafuso", category: "Eixo C", system: "$4 · C4", pair: "M417", description: "Desativa o funcionamento do eixo C do contrafuso." },
  { code: "M454", title: "Limpeza através do contrafuso", category: "Refrigeração", system: "Contrafuso", pair: "M455", description: "Liga a limpeza ou refrigeração através do contrafuso." },
  { code: "M455", title: "Desligar limpeza através do contrafuso", category: "Refrigeração", system: "Contrafuso", pair: "M454", description: "Desliga a limpeza ou refrigeração através do contrafuso." },
  { code: "M477", title: "Abrir fixação com o contrafuso girando", category: "Fixação", system: "Contrafuso", pair: "M478", description: "Habilita a abertura da fixação do contrafuso enquanto ele permanece em rotação.", warning: "Função crítica. Use somente em sequência validada e conforme o programa aprovado." },
  { code: "M478", title: "Desativar função M477", category: "Fixação", system: "Contrafuso", pair: "M477", description: "Cancela a condição especial habilitada pelo M477." }
];

const state = {
  search: "",
  category: "Todos"
};

const elements = {
  searchInput: document.querySelector("#searchInput"),
  clearSearch: document.querySelector("#clearSearch"),
  categoryFilters: document.querySelector("#categoryFilters"),
  codeList: document.querySelector("#codeList"),
  resultCount: document.querySelector("#resultCount"),
  emptyState: document.querySelector("#emptyState"),
  connectionStatus: document.querySelector("#connectionStatus")
};

function normalize(value) {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function getCategories() {
  return ["Todos", ...new Set(mCodes.map((item) => item.category))];
}

function getFilteredCodes() {
  const query = normalize(state.search);

  return mCodes.filter((item) => {
    const categoryMatch = state.category === "Todos" || item.category === state.category;
    const searchable = normalize([
      item.code,
      item.title,
      item.category,
      item.system,
      item.pair,
      item.description
    ].join(" "));

    return categoryMatch && (!query || searchable.includes(query));
  });
}

function renderCategories() {
  elements.categoryFilters.innerHTML = getCategories().map((category) => `
    <button
      class="chip ${state.category === category ? "active" : ""}"
      type="button"
      data-category="${category}"
      aria-pressed="${state.category === category}"
    >${category}</button>
  `).join("");
}

function renderCodes() {
  const codes = getFilteredCodes();
  elements.resultCount.textContent = `${codes.length} ${codes.length === 1 ? "código" : "códigos"}`;
  elements.emptyState.hidden = codes.length !== 0;

  elements.codeList.innerHTML = codes.map((item) => `
    <details class="code-card">
      <summary>
        <span class="code-badge">${item.code}</span>
        <span>
          <strong class="code-title">${item.title}</strong>
          <span class="code-meta">${item.category} · ${item.system}</span>
        </span>
        <span class="chevron" aria-hidden="true">›</span>
      </summary>
      <div class="code-details">
        <p>${item.description}</p>
        <div class="detail-grid">
          <div class="detail-item">
            <small>Subsistema</small>
            <strong>${item.system}</strong>
          </div>
          <div class="detail-item">
            <small>Relacionado</small>
            <strong>${item.pair}</strong>
          </div>
        </div>
        ${item.warning ? `<div class="warning"><strong>Atenção:</strong> ${item.warning}</div>` : ""}
      </div>
    </details>
  `).join("");
}

function render() {
  renderCategories();
  renderCodes();
}

function updateConnectionStatus() {
  const online = navigator.onLine;
  elements.connectionStatus.textContent = online ? "Online" : "Offline";
  elements.connectionStatus.classList.toggle("offline", !online);
}

elements.searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderCodes();
});

elements.clearSearch.addEventListener("click", () => {
  state.search = "";
  elements.searchInput.value = "";
  elements.searchInput.focus();
  renderCodes();
});

elements.categoryFilters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;

  state.category = button.dataset.category;
  render();
});

window.addEventListener("online", updateConnectionStatus);
window.addEventListener("offline", updateConnectionStatus);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch((error) => {
      console.warn("Service Worker não registrado:", error);
    });
  });
}

updateConnectionStatus();
render();
