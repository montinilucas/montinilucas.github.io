---
order: 6
title: Portal de Viagens Corporativas
summary: Do pedido à aprovação e à cotação num só lugar, substituindo planilhas e aprovações sem rastreio, como PWA integrado ao ERP.
status: Em produção
role: Desenho do processo e desenvolvimento do produto, feitos internamente.
stack:
  - JavaScript
  - PHP 8
  - MySQL
  - PWA
  - Bootstrap
  - API REST
image: /images/projects/travel-portal.webp
imageAlt: Lista de aprovações pendentes, com os passos do fluxo e três solicitações
caption: Tela recriada com marca e dados fictícios
links: []
---

## O problema

Colaboradores e gestores se perdiam em planilhas, com informações duplicadas e aprovações em aberto sem rastreamento. Em vez de contratar uma solução pronta, a decisão foi construir internamente.

## Como construí

Uma aplicação de página única, instalável no celular como PWA, com uma API em PHP e banco MySQL:

- **Fluxo com alçadas.** O pedido passa pela aprovação do gestor e chega ao time de compras para cotação. Viagens em cima da hora têm um caminho próprio de aprovação.
- **Perfis por função.** Colaborador, gestor, compras, diretoria e administração enxergam e fazem coisas diferentes.
- **Hierarquia configurável.** Gestores podem responder por vários departamentos e por filiais específicas.
- **Integração com o ERP** via API REST.

## Segurança

Consultas com prepared statements, senhas com bcrypt, sessão por cookie e cabeçalhos de segurança no servidor. A aplicação e a API ficam no mesmo domínio, o que elimina a superfície de CORS.

## Resultado

Solicitação, aprovação, cotação e conclusão ficaram rastreadas num só lugar. Contei a história do projeto [no LinkedIn](https://www.linkedin.com/in/lucas-montinii).
