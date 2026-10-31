---
order: 8
title: Orders dashboard with encrypted data
summary: A dashboard that reads protected spreadsheets in the browser, stores only encrypted data in the cloud and runs inside a Power BI report.
status: In production
role: Full development, working with the orders team.
stack:
  - JavaScript
  - Python
  - Web Crypto
  - Firebase
  - Firestore
  - Power BI
image: /images/projects/orders-dashboard.webp
imageAlt: Order backlog dashboard, in Portuguese, with metrics, charts and an encrypted-data badge
caption: Screen recreated with a fictional brand and data, in Portuguese
links: []
---

## The problem

Tracking of orders placed with the manufacturer arrived as two password-protected spreadsheets by email every day. The team wanted a simple dashboard inside the Power BI they already used, and the data could not sit open on a public site.

## How I built it

The user imports the spreadsheets on the site itself. Reading happens in the browser, including the spreadsheets' password. The payload is then encrypted with AES-256-GCM using the dashboard's access password, and only then goes to Firestore. The database holds nothing but encrypted data, and users decrypt it locally after signing in.

## The hard part

The Power BI visual runs the page in an isolated iframe with no origin. That breaks a lot of things people take for granted:

- files need open CORS;
- login cannot use a form submit;
- there is no `localStorage` or IndexedDB.

So every change is tested in an iframe with `sandbox="allow-scripts"`, matching the real environment.

## Next step

The team wants the sales invoice data, which is not in the manufacturer's spreadsheets. That depends on a new source in the ERP.
