export type Lang = 'pt' | 'en';

export const contact = {
  email: 'lucsmontini2@gmail.com',
  linkedin: 'https://www.linkedin.com/in/lucas-montinii',
  github: 'https://github.com/montinilucas',
};

export const copy = {
  pt: {
    meta: {
      title: 'Lucas Montini | AI Engineer',
      description:
        'Construo agentes de IA e plataformas de dados que rodam em produção sobre ERP. Cases, demo interativa e código aberto.',
    },
    nav: { projects: 'Projetos', demo: 'Demo', method: 'Método', career: 'Trajetória', contact: 'Contato' },
    switchLabel: 'EN',
    switchTitle: 'Read in English',
    hero: {
      eyebrow: 'AI Engineer · Dados · Integrações',
      title: 'IA em produção, com números que batem.',
      lede: 'Sou Lucas Montini, coordenador de sistemas numa concessionária de máquinas agrícolas. Construí os agentes de IA que as áreas usam para consultar vendas, serviços, finanças e RH, e a base de dados que os sustenta.',
      cta: 'Testar a demo',
      ctaAlt: 'Ver os projetos',
      place: 'Londrina, PR',
    },
    stats: [
      { value: '6', label: 'agentes especializados em uso, com orquestrador' },
      { value: '50+', label: 'Tools governadas por template' },
      { value: '697.822', label: 'registros públicos do MEC tratados no SiSU' },
      { value: '1 mi', label: 'visualizações num portal educacional em 2022' },
    ],
    demo: {
      label: 'Demo',
      title: 'Pergunte a uma concessionária que não existe.',
      lede: 'Cinco execuções gravadas do repositório governed-agents, com dados fictícios e sem modelo ao vivo. Escolha uma pergunta e veja o caminho até a resposta.',
      pick: 'Perguntas',
      replay: 'Repetir',
      noscript: 'Esta demo precisa de JavaScript. O código está no GitHub.',
      repo: 'Ver o código no GitHub',
      steps: {
        question: 'Pergunta',
        route: 'Orquestrador',
        permission: 'Permissão',
        tool: 'Ferramenta',
        query: 'Consulta governada',
        result: 'Resultado',
        answer: 'Resposta',
      },
      routed: 'Encaminhou para o agente de',
      noRoute: 'Nenhum agente é dono deste assunto. Nada foi consultado.',
      allowed: 'liberado',
      deniedShort: 'negado pelo código, antes de qualquer consulta',
      queryNote: 'Fixa no código. O modelo não escreve esta consulta.',
      rowsOf: '{shown} de {total} linhas enviadas ao chat',
      roles: { manager: 'gerente', seller: 'vendedor', director: 'diretor' },
    },
    projects: {
      label: 'Projetos',
      title: 'O que eu construí',
      lede: 'Trabalho de empresa aparece sem dados da empresa. Onde dá para mostrar código, o repositório é uma reconstrução do zero, com dados fictícios.',
      open: 'Abrir case',
    },
    method: {
      label: 'Método',
      title: 'Como eu trabalho',
      items: [
        {
          title: 'O que precisa estar certo fica no código',
          text: 'O modelo interpreta a pergunta e escolhe a ferramenta. Consulta, permissão e regra de negócio ficam em código que dá para testar.',
        },
        {
          title: 'Número só vale depois de conferido',
          text: 'Comparo o resultado com a fonte oficial, aba a aba, até explicar cada diferença. Já fechei divergência entre BI e contábil ao centavo.',
        },
        {
          title: 'Resposta curta, detalhe a um clique',
          text: 'O chat traz o top 20 e o resumo. O restante vai para uma planilha, com o link oferecido na hora.',
        },
        {
          title: 'A informação vai até quem usa',
          text: 'Um resumo diário automático substituiu os prints de WhatsApp. Adoção depende de encaixar na rotina que já existe.',
        },
      ],
    },
    career: {
      label: 'Trajetória',
      title: 'De suporte de TI a IA em produção',
      items: [
        {
          period: 'jun. 2026 – hoje',
          role: 'Coordenador de Sistemas',
          org: 'Ciarama Máquinas John Deere',
          text: 'Agentes de IA, Dynamics 365 Sales, integrações via API e o Portal de Viagens Corporativas.',
        },
        {
          period: 'jan. – jun. 2026',
          role: 'Analista de Dados',
          org: 'Ciarama Máquinas John Deere',
          text: 'Dashboards para Peças, Serviços, Financeiro, Contabilidade e Comercial, e início da modernização em Microsoft Fabric.',
        },
        {
          period: 'mar. 2024 – mai. 2025',
          role: 'Analista de Dados Pleno',
          org: 'Brid Soluções',
          text: 'Regras de negócio e qualidade de dados para clientes Seedcare do grupo Syngenta, com Qlik e SQL.',
        },
        {
          period: 'jan. 2019 – fev. 2024',
          role: 'Analista de Produto e Dados',
          org: 'VESTMapaMental',
          text: 'Produtos e portais para ENEM e vestibulares, de ponta a ponta. Um deles chegou a 1 milhão de visualizações em 2022.',
        },
        {
          period: 'mar. – mai. 2021',
          role: 'Analista de Marketing',
          org: 'Filadd (YC S21)',
          text: 'Coleta e análise de dados para a entrada da plataforma no Brasil.',
        },
        {
          period: 'jan. 2018 – jan. 2019',
          role: 'Estagiário de TI',
          org: 'Ministério Público do Paraná',
          text: 'Suporte técnico, chamados, acessos e infraestrutura.',
        },
      ],
    },
    stack: {
      label: 'Stack',
      title: 'Ferramentas',
      groups: [
        { name: 'IA generativa', items: 'Microsoft Copilot Studio, agentes, RAG, multiagente, tool calling, avaliações, Claude API' },
        { name: 'Dados', items: 'Microsoft Fabric, Power BI, DAX, SQL Server, Spark, Delta Lake, Lakehouse, Power Query, Qlik' },
        { name: 'Automação', items: 'Power Automate, Power Apps, Dataverse, Dynamics 365 Sales, SharePoint, Teams' },
        { name: 'Desenvolvimento', items: 'Python, FastAPI, TypeScript, React, Node, PHP, REST, Git, GitHub Actions, Firebase, TOTVS Protheus' },
      ],
      credentials: 'Formação e certificados',
      credentialItems: [
        'Análise e Desenvolvimento de Sistemas, UNIASSELVI (conclusão prevista em dez. 2026)',
        'Análise e Desenvolvimento de Sistemas, IFPR',
        'Microsoft Certified: Azure Fundamentals (AZ-900)',
        'ITIL 4 Foundation',
        'Programa Universitário em IA Aplicada, UNIASSELVI',
      ],
      languages: 'Português nativo · Espanhol avançado · Inglês intermediário',
    },
    contactSection: {
      label: 'Contato',
      title: 'Procurando quem coloque IA para rodar de verdade?',
      lede: 'Estou aberto a conversar sobre vagas de AI Engineer.',
    },
    footer:
      'Os cases descrevem trabalho real sem dados, nomes ou códigos da empresa. Demos e repositórios usam dados fictícios.',
    case: {
      back: 'Todos os projetos',
      role: 'Meu papel',
      status: 'Status',
      stack: 'Stack',
      links: 'Links',
      next: 'Próximo projeto',
    },
  },
  en: {
    meta: {
      title: 'Lucas Montini | AI Engineer',
      description:
        'I build AI agents and data platforms that run in production on top of ERP systems. Case studies, an interactive demo and open code.',
    },
    nav: { projects: 'Projects', demo: 'Demo', method: 'Method', career: 'Career', contact: 'Contact' },
    switchLabel: 'PT',
    switchTitle: 'Ler em português',
    hero: {
      eyebrow: 'AI Engineer · Data · Integrations',
      title: 'AI in production, with numbers that add up.',
      lede: "I'm Lucas Montini, Systems Coordinator at a farm-equipment dealership in Brazil. I built the AI agents the business teams use to look up sales, service, finance and HR figures, along with the data platform underneath them.",
      cta: 'Try the demo',
      ctaAlt: 'See the projects',
      place: 'Londrina, Brazil',
    },
    stats: [
      { value: '6', label: 'specialized agents in use, plus an orchestrator' },
      { value: '50+', label: 'tools governed by templates' },
      { value: '697,822', label: 'public education records processed' },
      { value: '1M', label: 'views on an education portal in 2022' },
    ],
    demo: {
      label: 'Demo',
      title: "Ask a dealership that doesn't exist.",
      lede: 'Five recorded runs of the governed-agents repository, on fictional data and with no live model. Pick a question and watch the path to the answer.',
      pick: 'Questions',
      replay: 'Replay',
      noscript: 'This demo needs JavaScript. The code is on GitHub.',
      repo: 'See the code on GitHub',
      steps: {
        question: 'Question',
        route: 'Orchestrator',
        permission: 'Permission',
        tool: 'Tool',
        query: 'Governed query',
        result: 'Result',
        answer: 'Answer',
      },
      routed: 'Routed to the agent for',
      noRoute: 'No agent owns this subject. Nothing was queried.',
      allowed: 'allowed',
      deniedShort: 'denied in code, before any query',
      queryNote: 'Fixed in code. The model does not write this query.',
      rowsOf: '{shown} of {total} rows sent to the chat',
      roles: { manager: 'manager', seller: 'seller', director: 'director' },
    },
    projects: {
      label: 'Projects',
      title: 'What I have built',
      lede: 'Company work appears without company data. Where code can be shown, the repository is a rebuild from scratch on fictional data.',
      open: 'Open case study',
    },
    method: {
      label: 'Method',
      title: 'How I work',
      items: [
        {
          title: 'What must be right stays in code',
          text: 'The model reads the question and picks the tool. Queries, permissions and business rules live in code that can be tested.',
        },
        {
          title: 'A number counts once it is checked',
          text: 'I compare results with the official source, page by page, until every difference is explained. I have closed a gap between BI and accounting to the cent.',
        },
        {
          title: 'Short answer, detail one click away',
          text: 'The chat gives the top 20 and a summary. The rest goes to a spreadsheet, with the link offered on the spot.',
        },
        {
          title: 'Information goes to the people who use it',
          text: 'An automatic daily summary replaced screenshots passed around on WhatsApp. Adoption comes from fitting the routine people already have.',
        },
      ],
    },
    career: {
      label: 'Career',
      title: 'From IT support to AI in production',
      items: [
        {
          period: 'Jun 2026 – now',
          role: 'Systems Coordinator',
          org: 'Ciarama Máquinas John Deere',
          text: 'AI agents, Dynamics 365 Sales, API integrations and the Corporate Travel Portal.',
        },
        {
          period: 'Jan – Jun 2026',
          role: 'Data Analyst',
          org: 'Ciarama Máquinas John Deere',
          text: 'Dashboards for Parts, Service, Finance, Accounting and Sales, and the start of the move to Microsoft Fabric.',
        },
        {
          period: 'Mar 2024 – May 2025',
          role: 'Mid-Level Data Analyst',
          org: 'Brid Soluções',
          text: 'Business rules and data quality for Syngenta group Seedcare clients, with Qlik and SQL.',
        },
        {
          period: 'Jan 2019 – Feb 2024',
          role: 'Product and Data Analyst',
          org: 'VESTMapaMental',
          text: "End-to-end products and portals for Brazil's university entrance exams. One reached 1 million views in 2022.",
        },
        {
          period: 'Mar – May 2021',
          role: 'Marketing Analyst',
          org: 'Filadd (YC S21)',
          text: "Data collection and analysis for the platform's entry into Brazil.",
        },
        {
          period: 'Jan 2018 – Jan 2019',
          role: 'IT Intern',
          org: "Public Prosecutor's Office of Paraná",
          text: 'Technical support, tickets, access management and infrastructure.',
        },
      ],
    },
    stack: {
      label: 'Stack',
      title: 'Tools',
      groups: [
        { name: 'Generative AI', items: 'Microsoft Copilot Studio, agents, RAG, multi-agent design, tool calling, evals, Claude API' },
        { name: 'Data', items: 'Microsoft Fabric, Power BI, DAX, SQL Server, Spark, Delta Lake, Lakehouse, Power Query, Qlik' },
        { name: 'Automation', items: 'Power Automate, Power Apps, Dataverse, Dynamics 365 Sales, SharePoint, Teams' },
        { name: 'Development', items: 'Python, FastAPI, TypeScript, React, Node, PHP, REST, Git, GitHub Actions, Firebase, TOTVS Protheus' },
      ],
      credentials: 'Education and certificates',
      credentialItems: [
        'Associate Degree in Systems Analysis and Development, UNIASSELVI (expected Dec 2026)',
        'Systems Analysis and Development, Federal Institute of Paraná (IFPR)',
        'Microsoft Certified: Azure Fundamentals (AZ-900)',
        'ITIL 4 Foundation',
        'Applied Artificial Intelligence University Program, UNIASSELVI',
      ],
      languages: 'Portuguese (native) · Spanish (advanced) · English (intermediate)',
    },
    contactSection: {
      label: 'Contact',
      title: 'Looking for someone who gets AI actually running?',
      lede: "I'm open to talking about AI Engineer roles.",
    },
    footer:
      'Case studies describe real work without company data, names or code. Demos and repositories use fictional data.',
    case: {
      back: 'All projects',
      role: 'My role',
      status: 'Status',
      stack: 'Stack',
      links: 'Links',
      next: 'Next project',
    },
  },
} as const;

export const paths = {
  pt: { home: '/', case: (slug: string) => `/projetos/${slug}/` },
  en: { home: '/en/', case: (slug: string) => `/en/projects/${slug}/` },
};
