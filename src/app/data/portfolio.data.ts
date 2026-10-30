export interface NavLink {
  id: string;
  label: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  image?: string;
}

export interface Formation {
  title: string;
  school?: string;
  year: string;
  competences: string[];
}

export interface Skill {
  name: string;
  label: string;
  icon: string;
  /** Icône monochrome sombre, inversée en thème sombre. */
  mono?: boolean;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

const devicon = (name: string, variant = 'original') =>
  `https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/${name}/${name}-${variant}.svg`;

export const PROFILE = {
  name: 'Prisca Kebi',
  initials: 'KP',
  roles: [
    'Développeuse Fullstack',
    'Angular & Spring Boot',
    'Étudiante en Master SI & Sécurité',
  ],
  email: 'priscakebi00@gmail.com',
  phone: '07 53 52 17 96',
  location: 'France',
  github: 'https://github.com/priscakebi',
  linkedin: '',
};

export const NAV_LINKS: NavLink[] = [
  { id: 'home', label: 'Accueil' },
  { id: 'projects', label: 'Projets' },
  { id: 'education', label: 'Parcours' },
  { id: 'contact', label: 'Contact' },
];

export const PROJECTS: Project[] = [
  {
    title: 'Portfolio',
    description: 'Mon site personnel, rendu côté serveur avec Angular et relié à une API Spring Boot.',
    tags: ['Angular', 'Spring Boot'],
    github: 'https://github.com/priscakebi/MonPortfolio.git',
  },
  {
    title: 'Mastering',
    description: 'Application de gestion des soutenances des étudiants.',
    tags: ['Angular', 'Spring Boot', 'MySQL'],
    github: 'https://github.com/fenMel/MasteringWeb.git',
    image: 'assets/projects/mast.png',
  },
  {
    title: 'BookPro',
    description: 'Application de prise de rendez-vous en ligne.',
    tags: ['PHP', 'JavaScript', 'Bootstrap', 'MySQL'],
    github: 'https://github.com/priscakebi/BooKPro_web.git',
  },
  {
    title: 'MyCampusGYDE',
    description: "Application web d'accompagnement administratif des étudiants étrangers.",
    tags: ['Angular', 'Spring Boot', 'MySQL'],
  },
];

export const FORMATIONS: Formation[] = [
  {
    title: "Master Expert en Systèmes d'Information et Sécurité",
    year: '2026 – 2028',
    competences: [],
  },
  {
    title: "Licence CDA — Concepteur Développeur d'Applications",
    school: 'ESIC',
    year: '2025 – 2026',
    competences: [
      "Concevoir l'architecture d'une application",
      'Développer des applications sécurisées',
      'Concevoir des bases de données relationnelles',
      'Développer des interfaces utilisateur ergonomiques',
      'Développer des API',
      'Utiliser Git pour le travail collaboratif',
      'Réaliser des tests fonctionnels et techniques',
      'Déployer une application',
      "Assurer la maintenance et les évolutions d'un logiciel",
      'Appliquer les bonnes pratiques de développement',
    ],
  },
  {
    title: 'BTS SIO option SLAM',
    school: 'ESIC',
    year: '2023 – 2025',
    competences: [
      'Concevoir une application',
      'Développer une application web',
      'Développer une application mobile (notions)',
      'Administrer une base de données',
      'Corriger et maintenir une application',
      'Rédiger une documentation technique',
      "Participer à la gestion d'un projet informatique",
      'Mettre en œuvre une démarche de test',
    ],
  },
  {
    title: 'BTS Comptabilité et Gestion des Entreprises',
    school: 'CERCO',
    year: '2015 – 2017',
    competences: [],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Langages',
    skills: [
      { name: 'Java', label: 'Backend', icon: devicon('java') },
      { name: 'TypeScript', label: 'Angular', icon: devicon('typescript') },
      { name: 'JavaScript', label: 'Frontend', icon: devicon('javascript') },
      { name: 'HTML', label: 'Structure', icon: devicon('html5') },
      { name: 'SCSS', label: 'Design', icon: devicon('sass') },
    ],
  },
  {
    name: 'Frameworks',
    skills: [
      { name: 'Angular', label: 'Frontend', icon: devicon('angularjs') },
      { name: 'Spring Boot', label: 'API REST', icon: devicon('spring') },
    ],
  },
  {
    name: 'Outils',
    skills: [
      { name: 'GitHub', label: 'Versioning', icon: devicon('github'), mono: true },
      { name: 'VS Code', label: 'Éditeur', icon: devicon('vscode') },
      { name: 'IntelliJ', label: 'IDE Java', icon: devicon('intellij') },
      { name: 'Postman', label: 'Tests API', icon: devicon('postman') },
      { name: 'Swagger', label: 'Docs API', icon: devicon('swagger') },
      { name: 'Claude', label: 'Assistant IA', icon: 'https://cdn.simpleicons.org/claude/D97757' },
    ],
  },
  {
    name: 'Bases de données',
    skills: [
      { name: 'MySQL', label: 'SQL', icon: devicon('mysql') },
      { name: 'PostgreSQL', label: 'SQL avancé', icon: devicon('postgresql') },
      { name: 'MongoDB', label: 'NoSQL', icon: devicon('mongodb') },
    ],
  },
];
