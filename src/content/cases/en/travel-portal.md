---
order: 6
title: Corporate Travel Portal
summary: Request, approval and quotation in one place, replacing spreadsheets and untracked approvals, as a PWA integrated with the ERP.
status: In production
role: Process design and product development, built in-house.
stack:
  - JavaScript
  - PHP 8
  - MySQL
  - PWA
  - Bootstrap
  - REST API
image: /images/projects/travel-portal.webp
imageAlt: Pending approvals list, in Portuguese, with the flow steps and three requests
caption: Screen recreated with a fictional brand and data, in Portuguese
links: []
---

## The problem

Employees and managers were lost in spreadsheets, with duplicated information and open approvals that nobody could track. Instead of buying a ready-made solution, the decision was to build it in-house.

## How I built it

A single-page application, installable on a phone as a PWA, with a PHP API and a MySQL database:

- **Approval flow.** A request goes through the manager's approval and reaches the purchasing team for quotation. Last-minute trips have their own approval path.
- **Role-based access.** Employees, managers, purchasing, leadership and administrators see and do different things.
- **Configurable hierarchy.** Managers can be responsible for several departments and specific branches.
- **ERP integration** through a REST API.

## Security

Queries use prepared statements, passwords use bcrypt, sessions use cookies, and the server sets security headers. The app and API share one domain, which removes the CORS surface.

## Outcome

Request, approval, quotation and completion are now tracked in one place. I told the project's story [on LinkedIn](https://www.linkedin.com/in/lucas-montinii).
