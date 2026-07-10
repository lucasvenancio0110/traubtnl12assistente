# TNL12 Assistente

Assistente técnico mobile-first para preparadores CNC que trabalham com a **TRAUB TNL12/7** e comando **TX8i**.

O objetivo é transformar manuais extensos e conhecimento de chão de fábrica em uma consulta rápida, visual e organizada para apoiar preparação, programação, diagnóstico e padronização operacional.

## V0.2

A versão atual entrega:

- Home modular com seis áreas técnicas
- Biblioteca inicial de funções M
- Biblioteca de funções G baseada no manual TRAUB 143 419
- Busca instantânea por código, descrição, categoria e subsistema
- Referência operacional dos parâmetros da macro G212
- Calculadora prática do ciclo de rosca G76
- Checklist de setup com progresso salvo no aparelho
- Procedimento de referência para zerar o pega
- Guia rápido de quadrantes
- Interface responsiva e otimizada para celular
- Funcionamento offline por Service Worker
- Estrutura PWA instalável
- Alertas destacados para funções críticas

## Módulos

### Funções M

Consulta de fusos, fixação, refrigeração, bucha-guia, eixo C e funções auxiliares.

### Funções G

Consulta de movimentos, planos, origens, ciclos, roscas, avanços, fusos, sincronismos e macros.

### Macro G212

Referência rápida dos parâmetros utilizados no setup operacional.

### Calculadora G76

Calcula a altura K e o diâmetro menor usando a regra prática configurável, além de gerar um bloco inicial para conferência.

### Checklist de setup

Fluxo interativo desde a conferência de bucha, barra e pinça até a validação da primeira peça.

### Quadrantes

Referência rápida dos quadrantes utilizados nos dados T conforme o lado de trabalho informado.

## Estrutura

```text
.
├── .github/workflows/
│   └── pages.yml
├── assets/
│   └── icon.svg
├── app.js
├── index.html
├── manifest.webmanifest
├── styles.css
└── sw.js
```

## Roadmap

- [ ] Completar todas as funções M da configuração utilizada
- [ ] Detalhar parâmetros e exemplos de cada ciclo G
- [ ] Criar mapa visual dos subsistemas $1, $2, $3 e $4
- [ ] Adicionar calculadoras de trigonometria e cones
- [ ] Criar base de alarmes e soluções
- [ ] Adicionar histórico de ocorrências por máquina
- [ ] Adicionar busca inteligente nos manuais
- [ ] Permitir cadastro de máquinas e opcionais instalados

## Fonte técnica inicial

- TRAUB — *Instructions de programmation TNL 12/7 TX8i / TNL 26 TX8i*
- Documento 143 419
- Edição 09/2006

## Segurança

Este projeto é uma ferramenta de apoio. Ele não substitui os manuais oficiais, procedimentos internos, análise de risco, treinamento ou validação presencial da condição da máquina.

Antes de executar qualquer comando, confirme:

- configuração específica da máquina;
- subsistema ativo;
- posição dos eixos e ferramentas;
- estado de fixação da peça;
- condições de rotação e refrigeração;
- sequência aprovada do programa.

## Autor

Desenvolvido por [Lucas Venancio](https://github.com/lucasvenancio0110), com foco em melhoria contínua e padronização de processos CNC.
