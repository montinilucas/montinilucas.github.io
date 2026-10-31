---
order: 5
title: Fare Radar
summary: A serverless automation that tracks airfares daily and works out when splitting a group's purchase comes out cheaper.
status: In use, open source
role: Personal project, for a real family purchase.
stack:
  - Node.js
  - GitHub Actions
  - SerpApi
  - Firebase
  - Firestore
image: /images/projects/fare-radar.webp
imageAlt: Dashboard, in Portuguese, with the Curitiba to Recife route, departure dates and the best way to buy
caption: Real screen with fictional data, in Portuguese
links:
  - label: Code on GitHub
    href: https://github.com/montinilucas/fare-radar
  - label: See the dashboard with fictional data
    href: /demos/fare-radar/?demo=1
---

## The idea

On a booking, every passenger pays the same fare. If the cheapest fare has only 2 seats left, a booking for 4 moves up to the next one entirely. Buying in two bookings can come out cheaper, but no site shows that math.

## How it works

Every day, GitHub Actions runs a collector that searches the same flight for 1, 2 and 4 adults, compares the ways to buy, stores the result in Firestore and sends an email if the price hits the target. A dashboard shows the trend and lets you adjust the targets. Its interface is in Portuguese.

## Decisions

- **Zero cost.** Everything runs on free plans, and each collection is sized to fit the monthly search quota.
- **Alerts that don't become noise.** It only alerts again if the price drops another R$ 50, and only records the alert after the email goes out.
- **Honest about its limits.** The dashboard makes clear that prices come from Google Flights, that the split-purchase math is an estimate, and that it does not predict prices.
- **Separate logic.** The calculation touches no network or database, so it is easy to test.
