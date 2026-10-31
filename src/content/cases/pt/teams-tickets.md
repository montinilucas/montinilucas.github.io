---
order: 7
title: Chamados de TI abertos pelo Teams
summary: Um agente abre o chamado na plataforma de workflow por API, em nome de quem pediu, contornando uma limitação do autor.
status: Em teste
role: Integração, desenho do contorno e testes.
stack:
  - Copilot Studio
  - Power Automate
  - API REST
  - SharePoint
image: /images/projects/ticket-chat.webp
imageAlt: Conversa em que o agente abre um chamado no nome de quem pediu
caption: Tela recriada com dados fictícios
links: []
---

## O problema

O agente de TI já respondia dúvidas com base na documentação interna, e o próximo passo era abrir o chamado quando a dúvida não se resolvesse. Só que a API da plataforma define o autor como o dono do token. Todo chamado sairia em nome do mesmo usuário, e aprovações e tarefas que dependem do solicitante iriam para a pessoa errada.

## Como resolvi

Depois de confirmar com o suporte que o autor não pode ser alterado, criei uma cópia de teste do fluxo com um campo próprio de solicitante. Título, departamento e tarefas passaram a usar esse campo, voltando ao autor quando ele está vazio.

O agente lê o e-mail de quem conversa no Teams, busca o usuário correspondente na plataforma em tempo real e preenche o campo. Essa busca substituiu a carga diária de usuários que estava planejada.

## Cuidados

O fluxo de produção não foi alterado: tudo roda na cópia de teste até a aprovação. A base de conhecimento do agente também foi recortada, deixando de fora a documentação de infraestrutura e segurança.
