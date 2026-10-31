---
order: 3
title: University admission cutoff portal
summary: Free access to official historical cutoff scores for Brazil's SiSU, with 697,822 records from 14 files, each traceable to its line in the source spreadsheet.
status: In development, not yet published
role: Personal project, built alone from the data to the interface.
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

## The problem

Students applying through SiSU, Brazil's public university admission system, decide by looking at past cutoff scores, but the official data is scattered across Ministry of Education spreadsheets, each with its own format. I know this area well: I spent five years building products for entrance exams.

## How I built it

An importer reads 14 official files from 2010 to 2026 and produces 697,822 records. The site queries the 2019 to 2026 range, with 450,700 records, and each edition's official weights are linked to 411,625 offers.

![The portal's search screen, in Portuguese, with filters for edition, state, city, institution, course, modality and shift](/images/sisu-busca.webp)

What makes the project interesting is trust in the data:

- **Traceability.** Each score points to its file, sheet, line, original value and source hash.
- **Nothing is silently deduplicated.** Repetitions in the official files stay visible.
- **A gap stays a gap.** A missing weight is not filled in from another year.
- **Safe imports.** The new database is built separately and only replaces the old one after verification. A failure leaves the previous data in place.

## Product decisions

A student's scores stay in the browser, with no account and no server holding personal data. The portal compares and informs, but it does not promise admission, because history does not prove the rules were the same across years.

![A course page, in Portuguese, with seats, applicants, the final cutoff score and the edition's official weights](/images/sisu-curso.webp)

## About the code

The code remains private for now.
