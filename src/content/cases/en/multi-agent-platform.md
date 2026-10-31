---
order: 1
title: Multi-agent platform for a dealership
summary: Six agents and an orchestrator answer questions in Teams about sales, service, finance and HR, using official data and queries the model never writes.
status: In use
role: Design, build and evolution, from gathering needs with each team to publishing.
stack:
  - Microsoft Copilot Studio
  - Power Automate
  - Power BI / DAX
  - Dynamics 365 Web API
  - Dataverse
  - SharePoint
  - Teams
links:
  - label: Open rebuild on GitHub
    href: https://github.com/montinilucas/governed-agents
  - label: Try the demo
    href: /en/#demo
---

## The problem

The company had good dashboards, but anyone who needed a number in the middle of the day had to open the right report, filter it and interpret it, or ask someone else. Coordinators were getting screenshots on WhatsApp every day.

Asking in plain language solves that, as long as the answer is right. An agent that confidently gets revenue wrong is worse than no agent at all.

## How I built it

Each area has an agent in Copilot Studio: Service, Parts, Machines, Finance, HR and IT. An orchestrator sends each question to the agent that owns the subject. These were the decisions that mattered most:

**The model does not write queries.** Each tool is a flow with a fixed DAX template, validated against the official semantic model before publishing. The agent picks the tool and fills in the parameters. The query does not change.

**The chat shows the top 20.** Longer lists go to a spreadsheet in SharePoint, and the agent offers the link at the end of its answer. That keeps the conversation readable and the detail one click away.

**Tools do not compete.** With dozens of them, similar descriptions make the model choose almost at random. Each one says when to use it and when not to, naming the sibling that owns the other case.

**Access is a human decision.** Agents with sensitive data, such as HR, are granted person by person, with no agent store.

**Information also goes to the people.** Flows send daily and weekly summaries by email and Teams. The Service summary replaced the WhatsApp screenshots.

## Real problems I had to solve

- **The 100-second limit.** The standard CRM connector took up to 62 s per call and blew the agent's limit. I replaced it with direct Web API calls in parallel.
- **Slow reports.** Writing to SharePoint once took about 2 minutes. The agent now replies with the link before generating the file.
- **A query that ran out of memory.** A `FILTER` with `UPPER` over the product table used 1.3 GB. Filtering on the pairs with `TREATAS` fixed it.
- **Large extracts.** When the Excel report is not enough, a pattern of CSVs generated in parts, quarter by quarter, handles the volume.
- **Metric definitions.** Before a rule becomes a tool, it is agreed with the team that owns it. First-year turnover, for example, follows the definition settled with HR.

## Outcome

Six specialized agents in use, more than 50 tools on the same pattern, and automatic summaries reaching the teams and finance leadership. Adding a tool became a repeatable process: template, validation, publishing and a test of the full cycle.

## About the code

The real version belongs to the company and stays there. I rebuilt the same ideas from scratch, with a fictional dealership, in the [governed-agents](https://github.com/montinilucas/governed-agents) repository, with tests and evals.
