# TNL12 Assistente

Assistente técnico mobile-first para preparadores CNC que trabalham com a **TRAUB TNL12/7** e comando **TX8i**.

O objetivo é transformar manuais extensos e conhecimento de chão de fábrica em uma consulta rápida, visual e organizada para apoiar preparação, programação, diagnóstico e padronização operacional.

## V0.1

A primeira versão entrega:

- Biblioteca inicial de funções M confirmadas no manual TRAUB 143 419, edição 09/2006
- Busca instantânea por código, descrição, categoria e subsistema
- Filtros por fuso principal, contrafuso, fixação, refrigeração, eixo C e programa
- Interface responsiva e otimizada para celular
- Funcionamento offline por Service Worker
- Estrutura PWA instalável
- Alertas destacados para funções críticas

## Estrutura

```text
.
├── assets/
│   └── icon.svg
├── app.js
├── index.html
├── manifest.webmanifest
├── styles.css
└── sw.js
```

## Roadmap

- [ ] Biblioteca completa de funções M
- [ ] Biblioteca de instruções G
- [ ] Calculadora e assistente do ciclo G76
- [ ] Assistente visual da macro G212
- [ ] Mapa dos subsistemas $1, $2, $3 e $4
- [ ] Guia de quadrantes e dados T
- [ ] Checklist interativo de setup
- [ ] Procedimento guiado para zerar o pega
- [ ] Base de alarmes e soluções
- [ ] Histórico de ocorrências por máquina
- [ ] Busca inteligente nos manuais

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
