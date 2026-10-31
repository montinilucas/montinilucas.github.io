---
order: 8
title: Painel de pedidos com dados criptografados
summary: Um painel que lê planilhas protegidas no navegador, guarda só dados cifrados na nuvem e roda dentro de um relatório do Power BI.
status: Em produção
role: Desenvolvimento completo, com a área de pedidos.
stack:
  - JavaScript
  - Python
  - Web Crypto
  - Firebase
  - Firestore
  - Power BI
image: /images/projects/orders-dashboard.webp
imageAlt: Painel de carteira de pedidos, com indicadores, gráficos e o selo de dados cifrados
caption: Tela recriada com marca e dados fictícios
links: []
---

## O problema

O acompanhamento de pedidos ao fabricante vinha em duas planilhas diárias protegidas por senha, por e-mail. A área queria um painel simples, dentro do Power BI que já usava, e os dados não podiam ficar abertos num site público.

## Como construí

A pessoa importa as planilhas no próprio site. A leitura acontece no navegador, inclusive a senha das planilhas. Depois, a carga é cifrada com AES-256-GCM usando a senha de acesso do painel e só então vai para o Firestore. O banco guarda apenas dados cifrados, e quem entra decifra localmente depois de autenticar.

## A parte difícil

O visual do Power BI roda a página num iframe isolado, sem origem. Isso quebra muita coisa que costuma ser dada como certa:

- os arquivos precisam de CORS liberado;
- o login não pode usar envio de formulário;
- não há `localStorage` nem IndexedDB.

Por isso, toda alteração é testada num iframe com `sandbox="allow-scripts"`, igual ao ambiente real.

## Próximo passo

A área quer ver os dados da nota de venda, que não existem nas planilhas do fabricante. Isso depende de uma nova fonte no ERP.
