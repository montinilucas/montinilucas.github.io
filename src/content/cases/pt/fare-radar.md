---
order: 5
title: Radar de Passagens
summary: Automação sem servidor que monitora tarifas todo dia e descobre quando dividir a compra de um grupo sai mais barato.
status: Em uso, código aberto
role: Projeto pessoal, para uma compra real da minha família.
stack:
  - Node.js
  - GitHub Actions
  - SerpApi
  - Firebase
  - Firestore
image: /images/projects/fare-radar.webp
imageAlt: Painel com a rota Curitiba a Recife, as datas de ida e a melhor forma de comprar
caption: Tela real, com dados fictícios
links:
  - label: Código no GitHub
    href: https://github.com/montinilucas/fare-radar
  - label: Ver o painel com dados fictícios
    href: /demos/fare-radar/?demo=1
---

## A ideia

Numa reserva, todos os passageiros pagam a mesma tarifa. Se a mais barata só tem 2 lugares, uma reserva de 4 sobe inteira para a seguinte. Comprar em duas reservas pode sair mais barato, mas nenhum site mostra essa conta.

## Como funciona

Todo dia, o GitHub Actions roda um coletor que busca o mesmo voo com 1, 2 e 4 adultos, compara as formas de comprar, grava no Firestore e manda e-mail se o preço bater a meta. Um painel mostra a tendência e permite ajustar as metas.

## Decisões

- **Custo zero.** Tudo roda em planos gratuitos, e cada coleta foi dimensionada para caber na cota mensal de buscas.
- **Alerta que não vira ruído.** Só avisa de novo se o preço cair mais R$ 50, e só registra o aviso depois que o e-mail sai.
- **Honesto sobre os limites.** O painel deixa claro que os preços são do Google Voos, que a conta da compra dividida é uma estimativa e que ele não prevê preço.
- **Lógica separada.** O cálculo não acessa rede nem banco, então é fácil de testar.
