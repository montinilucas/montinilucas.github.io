---
order: 2
title: From imported BI to a Microsoft Fabric lakehouse
summary: Moving BI reports to a medallion architecture with Direct Lake, and the investigation that found an invisible ingestion bug inflating revenue.
status: In validation before going official
role: Architecture for each area, Silver and Gold notebooks, semantic models, and checks against the official reports.
stack:
  - Microsoft Fabric
  - PySpark
  - Delta Lake
  - Direct Lake
  - Data Factory
  - DAX
  - T-SQL
image: /images/projects/lakehouse.webp
imageAlt: Flow from Bronze to Direct Lake, in Portuguese, with the zombie row and a zero difference against the ledger
caption: Illustration with fictional numbers from the open repository, in Portuguese
links:
  - label: Open rebuild on GitHub
    href: https://github.com/montinilucas/medallion-lakehouse
---

## The problem

The BI reports imported everything from the ERP database, with business logic scattered across queries inside each file. Each area had its own version of the rules, and AI agents depend on that foundation.

## How I built it

I moved the Service, Machines and Parts reports to a medallion architecture, on a shared ingestion layer maintained with the data team:

- **Bronze:** data as it arrives from the ERP.
- **Silver:** clean records and single rules, in Spark notebooks.
- **Gold:** ready-to-use tables with refresh procedures.
- **Direct Lake models:** reports read the lakehouse directly, with no imported copy.

Scheduled pipelines reload each area several times a day. In one of them, replacing the full reload of the accounting ledger with an incremental window brought the load down to about 11 minutes.

## The zombie row investigation

Revenue in one of the new reports was above the official figure. Every row looked valid.

The ERP does not delete records: it flags them and changes a column that is part of the unique index. Because the ingestion key included that column, a deletion arrived as a new row and the original live row stayed in place. The "not deleted" filter then discarded exactly the right row.

The fix was to take the newest version of each record before applying the filter. It sounds minor, but the order of those two steps changed reported revenue. I reproduced the case with synthetic data in [medallion-lakehouse](https://github.com/montinilucas/medallion-lakehouse).

## Checking is part of delivery

Nothing goes official because it looks right. A script compares each page of the new report with the official one, measure by measure, and every difference gets a cause: data not yet in the ingestion, load timing, or an error in the old report.

I also reconcile with accounting. In one gap between BI and the accounting system, I closed the difference to the cent by separating period, returns, cost centers and an operation type outside the filter. Whether to include that operation was left to the team that owns it.

## What I learned

A failed Direct Lake refresh can leave a model silently answering in DirectQuery. Refresh status is now part of every deployment check.

Dates typed with the wrong year in the ERP break Direct Lake. They are nulled on the way through, and the record is preserved.
