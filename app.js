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

const gCodes = [
  { code: "G00", title: "Movimento em avanço rápido", category: "Movimento", system: "Eixos", pair: "G01", description: "Executa deslocamento linear em rápido até a posição programada." },
  { code: "G01", title: "Movimento em avanço de trabalho", category: "Movimento", system: "Eixos", pair: "G00", description: "Executa deslocamento linear usando o avanço programado." },
  { code: "G02", title: "Interpolação circular horária", category: "Movimento", system: "Plano ativo", pair: "G03", description: "Executa um arco no sentido horário no plano selecionado." },
  { code: "G03", title: "Interpolação circular anti-horária", category: "Movimento", system: "Plano ativo", pair: "G02", description: "Executa um arco no sentido anti-horário no plano selecionado." },
  { code: "G04", title: "Temporização", category: "Programa", system: "Geral", pair: "—", description: "Insere um tempo de espera no programa." },
  { code: "G09", title: "Avanço com parada precisa", category: "Movimento", system: "Eixos", pair: "—", description: "Executa movimento de trabalho com parada precisa no ponto programado." },
  { code: "G10", title: "Desativar função de fresamento", category: "Fresamento", system: "Geral", pair: "G11", description: "Desativa a função de fresamento." },
  { code: "G11", title: "Ativar função de fresamento", category: "Fresamento", system: "Geral", pair: "G10", description: "Ativa a função de fresamento." },
  { code: "G16", title: "Plano de fresamento na circunferência", category: "Planos", system: "Fresamento", pair: "G17 / G18 / G19", description: "Seleciona o plano de fresamento na superfície circunferencial." },
  { code: "G17", title: "Plano frontal ou corte transversal", category: "Planos", system: "X/Y", pair: "G18 / G19", description: "Seleciona o plano frontal, normalmente associado aos eixos X e Y." },
  { code: "G18", title: "Plano de torneamento X/Z", category: "Planos", system: "X/Z", pair: "G17 / G19", description: "Seleciona o plano X/Z usado no torneamento." },
  { code: "G19", title: "Plano longitudinal ou superfície de corda", category: "Planos", system: "Y/Z", pair: "G17 / G18", description: "Seleciona o plano longitudinal, normalmente associado aos eixos Y e Z." },
  { code: "G20", title: "Programação em polegadas", category: "Unidades", system: "Geral", pair: "G21", description: "Seleciona polegadas como unidade de programação." },
  { code: "G21", title: "Programação em milímetros", category: "Unidades", system: "Geral", pair: "G20", description: "Seleciona milímetros como unidade de programação." },
  { code: "G22", title: "Chamada de subprograma", category: "Programa", system: "Geral", pair: "M99", description: "Executa a chamada de um subprograma." },
  { code: "G24–G27", title: "Ponto de troca de ferramenta", category: "Ferramenta", system: "Eixos", pair: "—", description: "Realiza a aproximação ao ponto configurado para troca de ferramenta." },
  { code: "G28", title: "Aproximação ao ponto de referência", category: "Origem", system: "Eixos", pair: "G53", description: "Conduz o eixo ao ponto de referência configurado." },
  { code: "G33", title: "Rosca passe a passe", category: "Rosca", system: "Fuso ativo", pair: "G34 / G76", description: "Executa roscamento longitudinal programando cada passe." },
  { code: "G34", title: "Rosca passe a passe com passo variável", category: "Rosca", system: "Fuso ativo", pair: "G33 / G76", description: "Executa roscamento passe a passe com variação do passo." },
  { code: "G40", title: "Desativar compensação de raio", category: "Compensação", system: "Ferramenta", pair: "G41 / G42 / G46", description: "Cancela a compensação do raio de corte ou da fresa." },
  { code: "G41", title: "Compensação à esquerda do contorno", category: "Compensação", system: "Ferramenta", pair: "G40", description: "Ativa a compensação mantendo a ferramenta à esquerda do contorno." },
  { code: "G42", title: "Compensação à direita do contorno", category: "Compensação", system: "Ferramenta", pair: "G40", description: "Ativa a compensação mantendo a ferramenta à direita do contorno." },
  { code: "G46", title: "Ativar compensação do raio de corte", category: "Compensação", system: "Ferramenta", pair: "G40", description: "Ativa a compensação do raio de corte conforme os dados da ferramenta." },
  { code: "G53", title: "Coordenadas da origem máquina", category: "Origem", system: "Máquina", pair: "G54–G57 / G59", description: "Programa deslocamentos referenciados diretamente à origem da máquina." },
  { code: "G54–G57", title: "Deslocamento da origem da peça", category: "Origem", system: "Peça", pair: "G53 / G59", description: "Seleciona um dos deslocamentos de origem da peça." },
  { code: "G59", title: "Deslocamento aditivo da origem", category: "Origem", system: "Peça", pair: "G54–G57", description: "Aplica um deslocamento adicional sobre a origem ativa." },
  { code: "G63", title: "Encoder do fuso principal", category: "Fusos", system: "$1 · S1", pair: "G64", description: "Seleciona o encoder do fuso principal para as operações programadas." },
  { code: "G64", title: "Encoder do contrafuso", category: "Fusos", system: "$4 · S4", pair: "G63", description: "Seleciona o encoder do contrafuso para as operações programadas." },
  { code: "G65", title: "Desativar barreiras", category: "Segurança", system: "Geral", pair: "G66", description: "Desativa as barreiras configuradas no comando." , warning: "Função crítica: confirme a aplicação e o procedimento aprovado." },
  { code: "G66", title: "Ativar barreiras", category: "Segurança", system: "Geral", pair: "G65", description: "Ativa as barreiras configuradas no comando." },
  { code: "G70", title: "Desbaste com ferramenta de incidência negativa", category: "Ciclos", system: "Torneamento", pair: "G71 / G72 / G73", description: "Executa ciclo de desbaste para ferramenta com ângulo negativo de incidência." },
  { code: "G71", title: "Ciclo de desbaste longitudinal", category: "Ciclos", system: "Torneamento", pair: "G72 / G73 / G74", description: "Executa ciclo de desbaste no sentido longitudinal." },
  { code: "G72", title: "Ciclo de desbaste transversal", category: "Ciclos", system: "Torneamento", pair: "G71 / G73 / G75", description: "Executa ciclo de desbaste no sentido transversal." },
  { code: "G73", title: "Desbaste paralelo ao contorno", category: "Ciclos", system: "Torneamento", pair: "G71 / G72", description: "Executa ciclo de desbaste seguindo uma trajetória paralela ao contorno." },
  { code: "G74", title: "Desbaste longitudinal com corte interrompido", category: "Ciclos", system: "Torneamento", pair: "G71", description: "Executa desbaste longitudinal com estratégia de corte interrompido." },
  { code: "G75", title: "Desbaste transversal com corte interrompido", category: "Ciclos", system: "Torneamento", pair: "G72", description: "Executa desbaste transversal com estratégia de corte interrompido." },
  { code: "G76", title: "Ciclo de rosca longitudinal", category: "Rosca", system: "Fuso ativo", pair: "G33 / G34", description: "Executa roscas externas ou internas, cilíndricas ou cônicas, distribuindo os passes automaticamente." },
  { code: "G77", title: "Ciclo de chanframento longitudinal", category: "Ciclos", system: "Torneamento", pair: "G79 / G81", description: "Executa um ciclo de chanframento longitudinal." },
  { code: "G78", title: "Ciclo de rosca especial", category: "Rosca", system: "Fuso ativo", pair: "G76 / G81", description: "Executa ciclo para perfis especiais de rosca." },
  { code: "G79", title: "Ciclo de chanframento transversal", category: "Ciclos", system: "Torneamento", pair: "G77 / G81", description: "Executa um ciclo de chanframento transversal." },
  { code: "G81", title: "Ciclo múltiplo", category: "Ciclos", system: "Torneamento", pair: "G77 / G78 / G79", description: "Combina os ciclos G77, G78 e G79." },
  { code: "G82", title: "Ciclo de rosqueamento com macho ou cossinete", category: "Rosca", system: "Ferramenta", pair: "G387", description: "Executa rosqueamento utilizando macho ou cossinete." },
  { code: "G83", title: "Ciclo de furação profunda 1", category: "Furação", system: "Ferramenta", pair: "G84", description: "Executa o primeiro ciclo de furação profunda." },
  { code: "G84", title: "Ciclo de furação profunda 2", category: "Furação", system: "Ferramenta", pair: "G83", description: "Executa o segundo ciclo de furação profunda." },
  { code: "G86", title: "Ciclo de rosca frontal", category: "Rosca", system: "Ferramenta", pair: "G76", description: "Executa roscamento na face da peça." },
  { code: "G88", title: "Ativar contorno descendente", category: "Ciclos", system: "G71 / G72", pair: "G89", description: "Ativa o tratamento de contorno descendente nos ciclos G71 e G72." },
  { code: "G89", title: "Desativar contorno descendente", category: "Ciclos", system: "G71 / G72", pair: "G88", description: "Cancela a função de contorno descendente." },
  { code: "G90", title: "Programação absoluta", category: "Programação", system: "C/R/V/Y", pair: "G91", description: "Interpreta as coordenadas como posições absolutas nos eixos indicados." },
  { code: "G91", title: "Programação incremental", category: "Programação", system: "C/R/V/Y", pair: "G90", description: "Interpreta as coordenadas como deslocamentos incrementais nos eixos indicados." },
  { code: "G92", title: "Limitação da rotação do fuso", category: "Fusos", system: "Fuso ativo", pair: "G96", description: "Define um limite máximo para a rotação do fuso." },
  { code: "G94", title: "Avanço em milímetros por minuto", category: "Avanço", system: "Eixos", pair: "G95", description: "Seleciona avanço em mm/min." },
  { code: "G95", title: "Avanço em milímetros por rotação", category: "Avanço", system: "Fuso ativo", pair: "G94", description: "Seleciona avanço em mm por rotação." },
  { code: "G96", title: "Velocidade de corte constante", category: "Fusos", system: "Fuso ativo", pair: "G97 / G92", description: "Mantém a velocidade de corte constante, ajustando a rotação conforme o diâmetro." },
  { code: "G97", title: "Rotação fixa do fuso", category: "Fusos", system: "Fuso ativo", pair: "G96", description: "Programa diretamente a rotação do fuso." },
  { code: "G98", title: "Ativar correção de avanço", category: "Avanço", system: "Geral", pair: "G99", description: "Ativa a correção de avanço." },
  { code: "G99", title: "Desativar correção de avanço", category: "Avanço", system: "Geral", pair: "G98", description: "Desativa a correção de avanço." },
  { code: "G156", title: "Acoplamento ou sobreposição de eixos", category: "Sincronismo", system: "Subsistemas", pair: "—", description: "Realiza o acoplamento ou a sobreposição programada de eixos." },
  { code: "G201–G299", title: "Chamada de macros do operador", category: "Macros", system: "Geral", pair: "G301–G399", description: "Faixa reservada para chamadas de macros do operador." },
  { code: "G301–G399", title: "Chamada de macros TRAUB", category: "Macros", system: "Geral", pair: "G201–G299", description: "Faixa reservada para macros da TRAUB." },
  { code: "G314", title: "Sincronização dos fusos", category: "Sincronismo", system: "S1 / S4", pair: "—", description: "Executa a sincronização programada entre o fuso principal e o contrafuso." },
  { code: "G319", title: "Posicionamento do fuso", category: "Fusos", system: "Fuso ativo", pair: "M112 / M412", description: "Realiza posicionamento do fuso sem uso do eixo C convencional." }
];

const modules = [
  { route: "m", icon: "M", title: "Funções M", description: "Fusos, fixação, refrigeração e funções auxiliares.", status: `${mCodes.length} códigos` },
  { route: "g", icon: "G", title: "Funções G", description: "Movimentos, ciclos, origens, planos e programação.", status: `${gCodes.length} códigos` },
  { route: "g212", icon: "212", title: "Macro G212", description: "Referência rápida dos parâmetros físicos do setup.", status: "Referência" },
  { route: "g76", icon: "76", title: "Calculadora G76", description: "Cálculo prático e geração do bloco de rosca.", status: "Calculadora" },
  { route: "setup", icon: "✓", title: "Checklist de setup", description: "Fluxo padronizado de montagem e primeira peça.", status: "Interativo" },
  { route: "quadrants", icon: "Q", title: "Quadrantes", description: "Consulta rápida por subsistema e lado de trabalho.", status: "Referência" }
];

const g212Parameters = [
  ["A", "Sobremetal para faceamento no $1"],
  ["B", "Sobremetal para faceamento no $4"],
  ["D", "Diâmetro da barra"],
  ["F", "Avanço de corte do bedame"],
  ["K / R", "Deslocamento G59 para trabalho do $2 no contrafuso"],
  ["S", "Velocidade de corte"],
  ["T", "Comprimento da peça"],
  ["U", "Comprimento do agarre no contrafuso"],
  ["V", "Deslocamento G59 para trabalho do $2 e $3 no fuso principal"],
  ["W", "Largura do bedame mais a folga"]
];

const setupItems = [
  ["bucha", "Verificar bucha, barra e pinça", "Confirmar modelo, condição e compatibilidade dimensional."],
  ["pega", "Conferir diâmetro e posição do pega", "Validar onde a pinça realizará o aperto da peça."],
  ["empurrador", "Montar o empurrador", "Confirmar comprimento, alinhamento e condição."],
  ["montagem", "Montar bucha e pinça", "Realizar a montagem conforme o padrão da máquina."],
  ["suportes", "Montar os suportes", "Conferir posições e possíveis interferências."],
  ["preset", "Presetar as ferramentas", "Registrar as legendas corretas nos corretores."],
  ["dadosT", "Informar quadrantes e raios nos dados T", "Validar orientação e raio de cada ferramenta."],
  ["barra", "Ajustar a barra", "Conferir avanço, posição e sobra."],
  ["zerarPega", "Zerar o pega", "Executar o procedimento controlado antes da primeira peça."],
  ["comentarios", "Conferir comentários do programa", "Ler observações, ferramentas e condições especiais."],
  ["primeiraPeca", "Iniciar e validar a primeira peça", "Executar com controle, medir e liberar somente após conformidade."]
];

const routeMeta = {
  home: ["TNL12 Assistente", "Central técnica para preparação, programação e diagnóstico."],
  m: ["Funções M", "Consulta das funções auxiliares da TNL12/7."],
  g: ["Funções G", "Movimentos, ciclos, origens e condições de programação."],
  g212: ["Macro G212", "Parâmetros operacionais usados no setup."],
  g76: ["Calculadora G76", "Apoio ao cálculo prático de rosca longitudinal."],
  setup: ["Checklist de setup", "Padronização da montagem até a liberação da primeira peça."],
  quadrants: ["Quadrantes", "Referência rápida para dados T e lado de trabalho."]
};

const state = {
  route: "home",
  search: "",
  category: "Todos"
};

const app = document.querySelector("#app");
const pageTitle = document.querySelector("#pageTitle");
const pageSubtitle = document.querySelector("#pageSubtitle");
const backButton = document.querySelector("#backButton");
const connectionStatus = document.querySelector("#connectionStatus");
const bottomNav = document.querySelector(".bottom-nav");

function normalize(value) {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function getRoute() {
  const route = location.hash.replace(/^#\/?/, "") || "home";
  return routeMeta[route] ? route : "home";
}

function navigate(route) {
  location.hash = route === "home" ? "#/" : `#/${route}`;
}

function updateHeader() {
  const [title, subtitle] = routeMeta[state.route];
  pageTitle.textContent = title;
  pageSubtitle.textContent = subtitle;
  document.title = `${title} · TNL12`;
  backButton.hidden = state.route === "home";
}

function updateBottomNav() {
  const activeRoute = state.route === "g212" || state.route === "g76" ? "g" : state.route;
  bottomNav.querySelectorAll("[data-route]").forEach((button) => {
    button.classList.toggle("active", button.dataset.route === activeRoute);
  });
}

function renderHome() {
  app.innerHTML = `
    <section class="hero-card">
      <span class="eyebrow">Copiloto do preparador</span>
      <h2>Conhecimento técnico no bolso.</h2>
      <p>Consulte códigos, calcule roscas e siga o setup com uma interface feita para uso rápido no chão de fábrica.</p>
      <div class="stat-grid">
        <div class="stat-card"><strong>${mCodes.length}</strong><span>funções M cadastradas</span></div>
        <div class="stat-card"><strong>${gCodes.length}</strong><span>funções G cadastradas</span></div>
        <div class="stat-card"><strong>6</strong><span>módulos operacionais</span></div>
      </div>
    </section>

    <section class="section-heading">
      <div>
        <span class="eyebrow">Central técnica</span>
        <h2>Módulos</h2>
      </div>
    </section>

    <section class="module-grid">
      ${modules.map((module) => `
        <button class="module-card" type="button" data-route="${module.route}">
          <span class="module-icon">${module.icon}</span>
          <h3>${module.title}</h3>
          <p>${module.description}</p>
          <span class="module-status ready">${module.status}</span>
        </button>
      `).join("")}
    </section>

    <aside class="safety-note">
      <strong>Uso técnico responsável</strong>
      <p>O aplicativo apoia a tomada de decisão, mas não substitui os manuais oficiais, os procedimentos internos e a validação presencial da condição da máquina.</p>
    </aside>
  `;
}

function getCategories(data) {
  return ["Todos", ...new Set(data.map((item) => item.category))];
}

function getFilteredCodes(data) {
  const query = normalize(state.search);
  return data.filter((item) => {
    const categoryMatch = state.category === "Todos" || item.category === state.category;
    const searchable = normalize([item.code, item.title, item.category, item.system, item.pair, item.description].join(" "));
    return categoryMatch && (!query || searchable.includes(query));
  });
}

function renderLibrary(data, kind) {
  app.innerHTML = `
    <section class="hero-card">
      <label class="search-label" for="searchInput">Buscar código ou função</label>
      <div class="search-box">
        <span aria-hidden="true">⌕</span>
        <input id="searchInput" type="search" inputmode="search" autocomplete="off" value="${state.search}" placeholder="Ex.: ${kind === "M" ? "M403, contrafuso" : "G76, rosca, origem"}…">
        <button id="clearSearch" type="button" aria-label="Limpar busca">×</button>
      </div>
      <div id="categoryFilters" class="chips" aria-label="Filtrar por categoria"></div>
    </section>

    <section class="section-heading">
      <div>
        <span class="eyebrow">Biblioteca técnica</span>
        <h2>Funções ${kind}</h2>
      </div>
      <strong id="resultCount" class="result-count">0 códigos</strong>
    </section>

    <section id="codeList" class="code-list" aria-live="polite"></section>
    <section id="emptyState" class="empty-state" hidden>
      <strong>Nenhum código encontrado</strong>
      <p>Tente buscar pelo número, categoria ou descrição da função.</p>
    </section>
  `;

  renderFilters(data);
  renderCodeResults(data);
}

function renderFilters(data) {
  const container = document.querySelector("#categoryFilters");
  if (!container) return;
  container.innerHTML = getCategories(data).map((category) => `
    <button class="chip ${state.category === category ? "active" : ""}" type="button" data-category="${category}" aria-pressed="${state.category === category}">${category}</button>
  `).join("");
}

function renderCodeResults(data) {
  const codes = getFilteredCodes(data);
  const count = document.querySelector("#resultCount");
  const list = document.querySelector("#codeList");
  const empty = document.querySelector("#emptyState");
  if (!count || !list || !empty) return;

  count.textContent = `${codes.length} ${codes.length === 1 ? "código" : "códigos"}`;
  empty.hidden = codes.length !== 0;
  list.innerHTML = codes.map((item) => `
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
          <div class="detail-item"><small>Sistema</small><strong>${item.system}</strong></div>
          <div class="detail-item"><small>Relacionado</small><strong>${item.pair}</strong></div>
        </div>
        ${item.warning ? `<div class="warning"><strong>Atenção:</strong> ${item.warning}</div>` : ""}
      </div>
    </details>
  `).join("");
}

function renderG212() {
  app.innerHTML = `
    <section class="panel">
      <span class="eyebrow">Base operacional</span>
      <h2>Parâmetros da G212</h2>
      <p>Referência rápida construída a partir do padrão de setup utilizado na operação. Confirme os parâmetros na versão do programa e na máquina específica.</p>
      <div class="info-note"><strong>Importante:</strong> a G212 é uma macro. A lógica pode variar conforme versão, máquina e padronização interna.</div>
    </section>

    <section class="section-heading">
      <div><span class="eyebrow">Referência</span><h2>Endereços</h2></div>
    </section>

    <section class="reference-list">
      ${g212Parameters.map(([parameter, description]) => `
        <article class="reference-card">
          <small>Parâmetro</small>
          <strong class="code-badge">${parameter}</strong>
          <p>${description}</p>
        </article>
      `).join("")}
    </section>
  `;
}

function renderG76() {
  app.innerHTML = `
    <section class="panel">
      <span class="eyebrow">Regra prática</span>
      <h2>Calcular rosca G76</h2>
      <p>Calcula K pelo passo × fator e estima o diâmetro menor por diâmetro maior − 2K. Valide sempre com o desenho, tolerância e ferramenta utilizada.</p>

      <div class="form-grid" id="g76Form">
        <div class="field"><label for="majorDiameter">Diâmetro maior X</label><input id="majorDiameter" type="number" inputmode="decimal" step="0.001" value="1.6"></div>
        <div class="field"><label for="threadPitch">Passo F</label><input id="threadPitch" type="number" inputmode="decimal" step="0.001" value="0.35"></div>
        <div class="field"><label for="threadFactor">Fator para K</label><input id="threadFactor" type="number" inputmode="decimal" step="0.01" value="0.65"></div>
        <div class="field"><label for="threadEnd">Final da rosca Z</label><input id="threadEnd" type="number" inputmode="decimal" step="0.001" value="-2.15"></div>
        <div class="field"><label for="threadPasses">Quantidade de passes H</label><input id="threadPasses" type="number" inputmode="numeric" step="1" value="30"></div>
        <div class="field"><label for="threadAngle">Ângulo de entrada A</label><input id="threadAngle" type="number" inputmode="decimal" step="1" value="45"></div>
        <div class="field full"><label for="lastDepth">Profundidade da última passada D</label><input id="lastDepth" type="number" inputmode="decimal" step="0.001" value="0.01"></div>
      </div>

      <div class="result-panel" aria-live="polite">
        <small>Resultado calculado</small>
        <div class="result-values">
          <div><span>Altura K</span><strong id="kResult">—</strong></div>
          <div><span>Diâmetro menor X</span><strong id="minorResult">—</strong></div>
        </div>
        <div id="g76Output" class="code-output">Preencha os campos para gerar o bloco.</div>
      </div>
      <div class="warning"><strong>Atenção:</strong> o manual define G76 para roscas externas, internas, cilíndricas ou cônicas. Esta calculadora usa a regra prática informada e não substitui o dimensionamento oficial da rosca.</div>
    </section>
  `;
  calculateG76();
}

function calculateG76() {
  const get = (id) => Number(document.querySelector(`#${id}`)?.value);
  const major = get("majorDiameter");
  const pitch = get("threadPitch");
  const factor = get("threadFactor");
  const z = get("threadEnd");
  const passes = get("threadPasses");
  const angle = get("threadAngle");
  const lastDepth = get("lastDepth");
  const values = [major, pitch, factor, z, passes, angle, lastDepth];
  if (values.some((value) => !Number.isFinite(value))) return;

  const k = pitch * factor;
  const minor = major - (2 * k);
  document.querySelector("#kResult").textContent = cncNumber(k, 4);
  document.querySelector("#minorResult").textContent = cncNumber(minor, 4);
  document.querySelector("#g76Output").textContent = `G76 X${cncNumber(minor, 4)} Z${cncNumber(z, 3)} K${cncNumber(k, 4)} H${Math.round(passes)} F${cncNumber(pitch, 3)} A${cncNumber(angle, 2)} D${cncNumber(lastDepth, 3)}`;
}

function cncNumber(value, digits = 3) {
  return Number(value).toFixed(digits).replace(/\.0+$/, "").replace(/(\.\d*?)0+$/, "$1");
}

function getCompletedSetup() {
  try {
    return JSON.parse(localStorage.getItem("tnl12-setup-checklist")) || [];
  } catch {
    return [];
  }
}

function renderSetup() {
  const completed = getCompletedSetup();
  app.innerHTML = `
    <section class="panel">
      <span class="eyebrow">Padronização operacional</span>
      <h2>Checklist de montagem</h2>
      <p>Marque cada etapa conforme a execução. O progresso fica salvo neste aparelho.</p>
      <div class="progress-wrap">
        <div class="progress-head"><strong>Progresso do setup</strong><span id="setupProgressText">0 de ${setupItems.length}</span></div>
        <div class="progress-track"><div id="setupProgressBar" class="progress-bar"></div></div>
      </div>
    </section>

    <section class="section-heading"><div><span class="eyebrow">Execução</span><h2>Etapas</h2></div></section>
    <section class="checklist">
      ${setupItems.map(([id, title, description]) => `
        <article class="check-item ${completed.includes(id) ? "done" : ""}" data-check-item="${id}">
          <label>
            <input type="checkbox" data-setup-id="${id}" ${completed.includes(id) ? "checked" : ""}>
            <span><strong>${title}</strong><p>${description}</p></span>
          </label>
        </article>
      `).join("")}
    </section>

    <section class="section-heading"><div><span class="eyebrow">Procedimento</span><h2>Zerar o pega</h2></div></section>
    <section class="panel">
      <ol class="procedure-list">
        <li>Voltar aproximadamente 4 mm do valor U da macro G212.</li>
        <li>Localizar o maior Z negativo do faceamento.</li>
        <li>Deixar a máquina ler esse Z, resetar e anotar o valor.</li>
        <li>Mover em Z negativo até deixar aproximadamente 0,1 mm, usando o método aprovado.</li>
        <li>Subtrair os valores anotados e aplicar a sobra no parâmetro U da G212.</li>
      </ol>
      <div class="warning"><strong>Segurança:</strong> execute somente com a máquina em condição controlada e seguindo o procedimento interno aprovado.</div>
    </section>
  `;
  updateSetupProgress();
}

function updateSetupProgress() {
  const completed = getCompletedSetup();
  const text = document.querySelector("#setupProgressText");
  const bar = document.querySelector("#setupProgressBar");
  if (!text || !bar) return;
  text.textContent = `${completed.length} de ${setupItems.length}`;
  bar.style.width = `${(completed.length / setupItems.length) * 100}%`;
}

function renderQuadrants() {
  const quadrants = [
    ["4", "$2 no contrafuso", "Trabalho da torre 2 no contrafuso."],
    ["3", "$2 no fuso principal", "Trabalho da torre 2 no fuso principal."],
    ["3", "$4 no contrafuso", "Ferramentas do sistema $4 trabalhando no contrafuso."],
    ["8", "Canal do $2 no fuso principal", "Ferramentas de canal da torre 2 no fuso principal."]
  ];

  app.innerHTML = `
    <section class="panel">
      <span class="eyebrow">Dados T</span>
      <h2>Mapa rápido de quadrantes</h2>
      <p>Referência operacional inicial. A orientação deve ser confirmada com a ferramenta montada, o sentido do eixo e o padrão de preset.</p>
    </section>
    <section class="section-heading"><div><span class="eyebrow">Consulta</span><h2>Aplicações</h2></div></section>
    <section class="quadrant-grid">
      ${quadrants.map(([number, title, description]) => `
        <article class="quadrant-card">
          <span class="quadrant-number">Q${number}</span>
          <h3>${title}</h3>
          <p>${description}</p>
        </article>
      `).join("")}
    </section>
    <div class="warning"><strong>Atenção:</strong> quadrante incorreto altera a interpretação do raio e pode gerar erro dimensional ou trajetória inadequada.</div>
  `;
}

function renderRoute() {
  state.route = getRoute();
  state.search = "";
  state.category = "Todos";
  updateHeader();
  updateBottomNav();

  switch (state.route) {
    case "m": renderLibrary(mCodes, "M"); break;
    case "g": renderLibrary(gCodes, "G"); break;
    case "g212": renderG212(); break;
    case "g76": renderG76(); break;
    case "setup": renderSetup(); break;
    case "quadrants": renderQuadrants(); break;
    default: renderHome();
  }

  window.scrollTo({ top: 0, behavior: "instant" });
  app.focus({ preventScroll: true });
}

function updateConnectionStatus() {
  const online = navigator.onLine;
  connectionStatus.textContent = online ? "Online" : "Offline";
  connectionStatus.classList.toggle("offline", !online);
}

document.addEventListener("click", (event) => {
  const routeButton = event.target.closest("[data-route]");
  if (routeButton) {
    navigate(routeButton.dataset.route);
    return;
  }

  if (event.target.closest("#clearSearch")) {
    state.search = "";
    const input = document.querySelector("#searchInput");
    if (input) {
      input.value = "";
      input.focus();
    }
    renderCodeResults(state.route === "m" ? mCodes : gCodes);
    return;
  }

  const categoryButton = event.target.closest("[data-category]");
  if (categoryButton) {
    state.category = categoryButton.dataset.category;
    const data = state.route === "m" ? mCodes : gCodes;
    renderFilters(data);
    renderCodeResults(data);
  }
});

document.addEventListener("input", (event) => {
  if (event.target.id === "searchInput") {
    state.search = event.target.value;
    renderCodeResults(state.route === "m" ? mCodes : gCodes);
  }

  if (event.target.closest("#g76Form")) {
    calculateG76();
  }
});

document.addEventListener("change", (event) => {
  const checkbox = event.target.closest("[data-setup-id]");
  if (!checkbox) return;

  const completed = new Set(getCompletedSetup());
  if (checkbox.checked) completed.add(checkbox.dataset.setupId);
  else completed.delete(checkbox.dataset.setupId);
  localStorage.setItem("tnl12-setup-checklist", JSON.stringify([...completed]));

  const item = document.querySelector(`[data-check-item="${checkbox.dataset.setupId}"]`);
  item?.classList.toggle("done", checkbox.checked);
  updateSetupProgress();
});

backButton.addEventListener("click", () => navigate("home"));
window.addEventListener("hashchange", renderRoute);
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
renderRoute();
