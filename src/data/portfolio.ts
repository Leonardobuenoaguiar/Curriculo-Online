export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  activities: string[];
  additional: string;
};

export type EducationItem = {
  course: string;
  institution: string;
  period: string;
  status: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
  note?: string;
};

export const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Formação", href: "#formacao" },
  { label: "Projetos", href: "#projetos" },
  { label: "O que me move", href: "#trajetória" },
  { label: "Contato", href: "#contato" },
];

export const profile = {
  name: "Leonardo Bueno de Aguiar",
  title: "Leonardo Bueno de Aguiar - Ciências da computação",
  description:
    "Mais do que um currículo, é uma forma de mostrar na prática o que faço e o que venho aprendendo.",
  location: "Porto Alegre - RS",
  email: "leonardobuenoaguiar@gmail.com",
  phone: "(51) 99866-1062",
  github: "https://www.linkedin.com/in/leonardo-bueno-de-aguiar-b8062a212/",
};

export const experiences: Experience[] = [
  {
    company: "CDNTV",
    role: "Analista de Redes Jr.",
    period: "2024 - 2026",
    description:
      "Atuação em análise e monitoramento de servidores em ambiente headend, com tratativas técnicas junto a clientes e ajustes de canais para otimização de rotas e qualidade de serviço. Apoio na manutenção da infraestrutura de rede e servidores, contribuindo para o funcionamento contínuo dos sistemas.",
    activities: [
      "Monitoramento de servidores",
      "Zabbix",
      "Grafana",
      "Redes de computadores",
      "Infraestrutura",
      "Análise de problemas",
      "Atendimento técnico",
      "Python",
      "Automação",
      "Cliente e servidor",
      "LAN",
      "WAN",
      "MAN",
      "IP público",
      "IP privado",
      "TCP/IP",
      "HTTP / HTTPS",
      "DNS",
      "RTMP",
      "DHCP",
      "Ping",
      "ipconfig",
      "traceroute / MTR",
      "nslookup",
      "Análise de logs",
    ],
    additional:
      "Desenvolvimento de scripts em Python para automatização de tarefas manuais, otimização de processos e redução de erros operacionais.",
  },
  {
    company: "MOTORMAC",
    role: "Estagiário - Suporte Técnico",
    period: "2023 - 2024",
    description:
      "Atuação em suporte técnico a usuários internos, realizando manutenção e configuração de computadores e periféricos, instalação de softwares e resolução de problemas.",
    activities: [
      "Suporte técnico",
      "Manutenção de computadores",
      "Configuração de periféricos",
      "Instalação de softwares",
      "ERP Apollo",
      "ERP Sankhya",
      "Backup de servidores",
    ],
    additional:
      "Controle e gerenciamento das fitas de backup dos servidores, contribuindo para a continuidade e segurança das operações de TI.",
  },
  {
    company: "SECRETARIA MUNICIPAL DE SAÚDE",
    role: "Estagiário - Suporte Técnico",
    period: "2021 - 2022",
    description:
      "Atuação em suporte técnico de hardware e software, incluindo atualização de sistemas, instalação e ativação de Windows e Microsoft Office, formatação de computadores, testes de rede, crimpagem de cabos e suporte a impressoras.",
    activities: [
      "Hardware",
      "Software",
      "Windows",
      "Microsoft Office",
      "Formatação",
      "Testes de rede",
      "Crimpagem de cabos",
      "Impressoras",
      "Suporte técnico",
    ],
    additional:
      "Prestação de suporte a equipamentos internos, além de atendimento técnico em UPAs e Postos de Saúde.",
  },
];

export const education: EducationItem[] = [
  {
    course: "Bacharelado em Ciência da Computação",
    institution: "UNIRITTER",
    period: "2020 - 2027",
    status: "Cursando.",
  },
  {
    course: "Curso Profissionalizante - Designer Gráfico",
    institution: "Instituto Calábria",
    period: "2016 - 2016",
    status: "Inacabado.",
  },
  {
    course: "Ensino Médio - 2º grau",
    institution: "Colégio Romano Santa Marta",
    period: "2016 - 2019",
    status: "Concluído.",
  },
];

export const skills: SkillGroup[] = [
  {
    category: "Redes",
    items: [
      "LAN",
      "WAN",
      "MAN",
      "TCP/IP",
      "HTTP / HTTPS",
      "DNS",
      "DHCP",
      "RTMP",
      "IP público",
      "IP privado",
      "Ping",
      "ipconfig",
      "traceroute / MTR",
      "nslookup",
    ],
  },
  { category: "Monitoramento", items: ["Zabbix", "Grafana"] },
  {
    category: "Desenvolvimento",
    items: ["Python", "React", "HTML", "CSS"],
    note: "Conhecimentos em processo de aperfeiçoamento.",
  },
  { category: "Sistemas", items: ["Windows", "Linux"] },
  { category: "Produtividade", items: ["Microsoft Office"] },
];

export const timeline = [
  {
    period: "2021 - 2022",
    role: "Estagiário - Suporte Técnico",
    place: "Secretaria Municipal de Saúde",
  },
  {
    period: "2023 - 2024",
    role: "Estagiário - Suporte Técnico",
    place: "Motormac",
  },
  {
    period: "2024 - 2026",
    role: "Analista de Redes Jr.",
    place: "CDNTV",
  },
  {
    period: "2026 - atualmente",
    role: "Profissional de TI",
    place: "Cursando Bacharelado em Ciência da Computação",
  },
];