---
order: 6
title: IT tickets opened from Teams
summary: An agent opens tickets on the workflow platform through its API, on behalf of the person asking, working around an author limitation.
status: In testing
role: Integration, workaround design and testing.
stack:
  - Copilot Studio
  - Power Automate
  - REST API
  - SharePoint
links: []
---

## The problem

The IT agent was already answering questions from internal documentation, and the next step was to open a ticket when a question could not be solved. But the platform's API sets the author to the token owner. Every ticket would be filed under the same user, and approvals and tasks that depend on the requester would go to the wrong person.

## How I solved it

After confirming with the vendor's support that the author cannot be changed, I created a test copy of the workflow with its own requester field. The title, department and tasks now use that field, falling back to the author when it is empty.

The agent reads the email of the person chatting in Teams, looks up the matching user on the platform in real time and fills in the field. That lookup replaced the daily user load we had planned.

## Precautions

The production workflow was not changed: everything runs on the test copy until it is approved. The agent's knowledge base was also scoped, leaving out infrastructure and security documentation.
