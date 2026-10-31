---
order: 3
title: Migração dos painéis do QlikView para o Power BI
summary: Engenharia reversa dos scripts do Qlik para levar os painéis gerenciais ao Fabric, sem presumir regra e conferindo cada indicador contra a origem.
status: Publicado, em conferência
role: Engenharia reversa, notebooks, modelos semânticos e relatórios, do desenvolvimento à publicação.
stack:
  - QlikView
  - Microsoft Fabric
  - PySpark
  - Direct Lake
  - Power BI
  - DAX
image: /images/projects/qlik-migration.webp
imageAlt: Mapa da migração, do QlikView ao Power BI, passando pelas camadas Bronze, Silver e Gold no Microsoft Fabric
caption: Mapa que desenhei para explicar a migração
links: []
---

## O problema

Os painéis gerenciais rodavam em QlikView, com anos de regras guardadas dentro de scripts de carga. Trocar de ferramenta sem entender essas regras seria trocar números confiáveis por números parecidos.

## Como construí

- **O Qlik é evidência, não fonte.** Li os scripts e os arquivos do Qlik para entender cada regra, mas a fonte oficial continua sendo o ERP.
- **Nada é presumido.** Regra ambígua fica registrada como pendência de negócio até a área confirmar.
- **Um caminho completo antes de escalar.** Comecei por um MVP vertical e depois segui por domínio: Peças, Máquinas, Serviços, Financeiro, Contábil e Consolidado.
- **Relatórios gerados por código.** Modelos semânticos e relatórios são montados por scripts, o que permite repetir a publicação do desenvolvimento para a produção com uma conferência automática em DAX.

## A regra de conferência

Cada indicador precisa fechar no encadeamento `QlikView = Gold = medida do Power BI`, com tolerância de 0,1%, por total, período, filial e área.

Quando não fecha, a diferença é investigada até ter explicação. Às vezes é uma data de corte diferente, às vezes é dado parado no painel antigo. Alguns domínios ainda têm diferenças em investigação, e por isso o status deste projeto é "em conferência".
