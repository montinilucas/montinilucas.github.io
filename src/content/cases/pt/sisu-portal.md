---
order: 3
title: Portal de notas de corte do SiSU
summary: Consulta gratuita ao histórico oficial do MEC, com 697.822 registros de 14 arquivos e rastreio de cada nota até a linha da planilha original.
status: Em desenvolvimento, ainda não publicado
role: Projeto pessoal, feito sozinho do dado à interface.
stack:
  - Python
  - FastAPI
  - SQLite
  - React
  - TypeScript
  - Tailwind CSS
  - Pytest
  - GitHub Actions
links: []
---

## O problema

Quem vai prestar o SiSU decide olhando notas de corte de anos anteriores, mas os dados oficiais ficam espalhados em planilhas do MEC, cada uma com um formato. Vim dessa área: trabalhei cinco anos com produtos para ENEM e vestibulares.

## Como construí

Um importador lê 14 arquivos oficiais de 2010 a 2026 e gera 697.822 registros. O site consulta o recorte de 2019 a 2026, com 450.700 registros, e os pesos oficiais de cada edição estão ligados a 411.625 ofertas.

![Tela de busca do portal, com filtros por edição, estado, cidade, instituição, curso, modalidade e turno](/images/sisu-busca.webp)

O que torna o projeto interessante é a confiança no dado:

- **Rastreabilidade.** Cada nota aponta para o arquivo, a aba, a linha, o valor original e o hash da fonte.
- **Nada é deduplicado em silêncio.** Repetições dos arquivos do MEC continuam visíveis.
- **Lacuna é lacuna.** Um peso que falta não é preenchido com o de outro ano.
- **Importação segura.** O novo banco é montado à parte e só substitui o anterior depois de verificado. Uma falha mantém a base antiga.

## Decisões de produto

As notas do estudante ficam só no navegador, sem conta e sem servidor guardando dados pessoais. O portal compara e informa, mas não promete aprovação, porque o histórico não prova que as regras foram iguais entre os anos.

![Página de um curso, com vagas, inscritos, nota de corte final e os pesos oficiais da edição](/images/sisu-curso.webp)

## Sobre o código

O código segue privado por enquanto.
