---
order: 1
title: Plataforma multiagente para uma concessionária
summary: Seis agentes e um orquestrador respondem no Teams perguntas sobre vendas, serviços, finanças e RH, com dados oficiais e consultas que o modelo não escreve.
status: Em uso
role: Projeto, construção e evolução, do levantamento com as áreas à publicação.
stack:
  - Microsoft Copilot Studio
  - Power Automate
  - Power BI / DAX
  - Dynamics 365 Web API
  - Dataverse
  - SharePoint
  - Teams
links:
  - label: Reconstrução aberta no GitHub
    href: https://github.com/montinilucas/governed-agents
  - label: Testar a demo
    href: /#demo
---

## O problema

A empresa tinha bons dashboards, mas quem precisava de um número no meio do dia tinha que abrir o relatório certo, filtrar e interpretar, ou pedir para alguém. Coordenadores recebiam prints por WhatsApp todos os dias.

Perguntar em linguagem natural resolve isso, desde que a resposta esteja certa. Um agente que erra um faturamento com segurança é pior do que agente nenhum.

## Como construí

Cada área tem um agente no Copilot Studio: Serviços, Peças, Máquinas, Financeiro, RH e TI. Um orquestrador encaminha a pergunta para o dono do assunto. As decisões que mais importaram:

**O modelo não escreve consultas.** Cada Tool é um fluxo com um template DAX fixo, validado contra o modelo semântico oficial antes de publicar. O agente escolhe a Tool e preenche os parâmetros. A consulta não muda.

**O chat mostra o top 20.** Listas maiores vão para uma planilha no SharePoint, e o agente oferece o link no fim da resposta. Isso protege a conversa e mantém o detalhe a um clique.

**Tools não competem entre si.** Com dezenas delas, descrições parecidas fazem o modelo escolher quase no chute. Cada uma diz quando usar e quando não usar, citando a vizinha responsável pelo outro caso.

**Acesso é decisão humana.** Agentes com dados sensíveis, como RH, são liberados pessoa a pessoa, sem loja de agentes.

**A informação também vai até a pessoa.** Fluxos enviam resumos diários e semanais por e-mail e Teams. O resumo de Serviços substituiu os prints de WhatsApp.

## Problemas reais que precisei resolver

- **Limite de 100 segundos.** O conector padrão do CRM chegou a levar 62 s por chamada e estourava o limite do agente. Troquei por chamadas diretas à Web API, em paralelo.
- **Relatório que demora.** Gravar no SharePoint já levou cerca de 2 minutos. O agente passou a responder com o link antes de gerar o arquivo.
- **Consulta que estoura memória.** Um `FILTER` com `UPPER` sobre a tabela de produtos consumia 1,3 GB. Filtrar pelos pares com `TREATAS` resolveu.
- **Extrações grandes.** Quando o relatório em Excel não dá conta, um padrão de CSV gerado por partes, trimestre a trimestre, resolve.
- **Definição de métrica.** Antes de virar Tool, a regra é combinada com a área. A rotatividade no primeiro ano, por exemplo, seguiu a definição acertada com o RH.

## Resultado

Seis agentes especializados em uso, mais de 50 Tools no mesmo padrão e resumos automáticos chegando às áreas e à liderança financeira. Criar uma Tool nova virou um processo repetível: template, validação, publicação e teste do ciclo completo.

## Sobre o código

A versão real pertence à empresa e fica lá. Reconstruí as mesmas ideias do zero, com uma concessionária fictícia, no repositório [governed-agents](https://github.com/montinilucas/governed-agents), com testes e avaliações.
