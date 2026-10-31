---
order: 2
title: Do BI importado ao lakehouse no Microsoft Fabric
summary: Migração de BIs para arquitetura medalhão com Direct Lake, e a investigação que achou um bug invisível de ingestão inflando a receita.
status: Em validação antes de virar oficial
role: Desenho da arquitetura das áreas, notebooks Silver e Gold, modelos semânticos e conferência contra os BIs oficiais.
stack:
  - Microsoft Fabric
  - PySpark
  - Delta Lake
  - Direct Lake
  - Data Factory
  - DAX
  - T-SQL
image: /images/projects/lakehouse.webp
imageAlt: Fluxo de Bronze a Direct Lake, com a linha zumbi e a diferença zerada contra o razão contábil
caption: Ilustração com os números fictícios do repositório aberto
links:
  - label: Reconstrução aberta no GitHub
    href: https://github.com/montinilucas/medallion-lakehouse
---

## O problema

Os BIs importavam tudo do banco do ERP, com a lógica de negócio espalhada em consultas dentro de cada arquivo. Cada área tinha sua versão da regra, e agentes de IA dependem dessa base.

## Como construí

Levei os BIs de Serviços, Máquinas e Peças para uma arquitetura medalhão, sobre uma camada de ingestão compartilhada mantida com o time de dados:

- **Bronze:** os dados como chegam do ERP.
- **Silver:** registros limpos e regras únicas, em notebooks Spark.
- **Gold:** tabelas prontas para consumo, com procedures de atualização.
- **Modelos Direct Lake:** os relatórios leem o lakehouse direto, sem cópia importada.

Pipelines agendados recarregam cada área várias vezes ao dia. Em um dos pipelines, trocar a carga completa do movimento contábil por uma janela incremental deixou a carga em cerca de 11 minutos.

## A investigação das linhas zumbi

A receita num dos BIs novos estava acima do oficial. Todas as linhas pareciam válidas.

O ERP não apaga registros: marca a exclusão e muda uma coluna que faz parte do índice único. Como a chave da ingestão incluía essa coluna, a exclusão chegava como uma linha nova, e a linha viva original continuava lá. O filtro de "não excluído" ainda descartava justamente a linha certa.

A correção foi pegar a versão mais recente de cada registro antes de aplicar o filtro. Parece detalhe, mas a ordem desses dois passos mudava o faturamento. Reproduzi o caso com dados sintéticos em [medallion-lakehouse](https://github.com/montinilucas/medallion-lakehouse).

## Conferência é parte da entrega

Nada vira oficial por parecer certo. Um script compara cada aba do relatório novo com o oficial, medida por medida, e cada diferença recebe uma causa: dado que ainda não chegou à ingestão, horário de carga ou erro no relatório antigo.

Também concilio com a contabilidade. Numa divergência entre o BI e o sistema contábil, fechei a diferença ao centavo, separando período, devoluções, centros de custo e um tipo de operação fora do filtro. A decisão de incluir ou não essa operação ficou com a área responsável.

## O que aprendi

Um refresh de Direct Lake que falha pode deixar o modelo respondendo em DirectQuery sem nenhum aviso. Agora o status do refresh faz parte da checagem de todo deploy.

Datas digitadas com ano errado no ERP derrubam o Direct Lake. Elas são anuladas no caminho, com o registro preservado.
