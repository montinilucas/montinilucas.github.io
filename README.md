# montinilucas.github.io

Meu portfolio: [montinilucas.github.io](https://montinilucas.github.io), em português e inglês.

Site estático em [Astro](https://astro.build), sem framework no navegador. O único JavaScript é o da demo, que reproduz execuções gravadas do repositório [governed-agents](https://github.com/montinilucas/governed-agents).

```bash
npm install
npm run dev
```

- O texto da página inicial fica em `src/i18n.ts`.
- Cada case é um arquivo Markdown em `src/content/cases/`, um por idioma.
- `src/data/demo-traces.json` é gerado por `scripts/export_demo.py`, em governed-agents.
- A publicação é automática: todo push na `main` passa pelo workflow de deploy.
