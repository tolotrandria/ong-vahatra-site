export type NavItem = {
  label: string;
  href: string;
};

export type Stat = {
  label: string;
  value: number;
  suffix?: string;
  description: string;
};

export type Activity = {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  description: string;
  impact: string;
  image: string;
  stats: {
    label: string;
    value: string;
  }[];
};

export const siteConfig = {
  name: "ONG VAHATRA",
  tagline: "Microfinance sociale et développement rural à Madagascar",
  description:
    "Depuis Antsirabe, ONG VAHATRA accompagne les familles rurales avec des services de microfinance, d'agriculture, de santé communautaire et de résilience économique.",
  url: "https://ong-vahatra-demo.vercel.app",
  sourceLocation: "Lot 0514 L 80, Tomboarivo, 110 Antsirabe, Madagascar",
};

export const mainNavigation: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/about" },
  { label: "Activités", href: "/activities" },
  { label: "Impact", href: "/impact" },
  { label: "Actualités", href: "/news" },
  { label: "Galerie", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const contact = {
  address: "Lot 0514 L 80, Tomboarivo, 110 Antsirabe, Madagascar",
  city: "Antsirabe, Madagascar",
  phones: ["+261 33 15 247 47", "+261 33 14 94 847"],
  emails: ["ongvahatra@gmail.com", "rh.vahatra@gmail.com"],
  facebook: "https://www.facebook.com/ongvahatra/",
  whatsapp: "https://wa.me/261331524747",
  legacyBlog: "https://ongvahatra.wordpress.com/",
};

export const siteStats: Stat[] = [
  {
    label: "Familles accompagnées",
    value: 12800,
    suffix: "+",
    description: "sur des parcours de microfinance et d'appui social",
  },
  {
    label: "Bénéficiaires directs",
    value: 56200,
    suffix: "+",
    description: "touchés par les programmes économiques et communautaires",
  },
  {
    label: "Communes rurales",
    value: 46,
    description: "dans le Vakinankaratra, l'Itasy et les zones rurales voisines",
  },
  {
    label: "Taux de remboursement",
    value: 96,
    suffix: "%",
    description: "sur les cycles de crédit accompagnés par les équipes terrain",
  },
];

export const activities: Activity[] = [
  {
    slug: "microfinance",
    title: "Microfinance sociale",
    kicker: "Capital patient",
    summary:
      "Des crédits adaptés aux réalités rurales, accompagnés par des conseillers de proximité.",
    description:
      "VAHATRA structure des solutions de microcrédit accessibles, progressives et responsables pour aider les ménages à stabiliser leurs revenus sans les exposer à une pression excessive.",
    impact: "8 400 microcrédits actifs accompagnés par des suivis de terrain.",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1400",
    stats: [
      { label: "Encours suivi", value: "2,8 Md Ar" },
      { label: "Groupes solidaires", value: "620" },
    ],
  },
  {
    slug: "agriculture",
    title: "Agriculture familiale",
    kicker: "Résilience alimentaire",
    summary:
      "Formation, semences, planification de campagne et accès au financement agricole.",
    description:
      "Les équipes accompagnent les producteurs dans la préparation de saison, les pratiques agroécologiques, le stockage et la commercialisation locale.",
    impact: "3 200 exploitations familiales renforcées sur les dernières campagnes.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1400",
    stats: [
      { label: "Parcelles suivies", value: "3 200" },
      { label: "Rendement moyen", value: "+28%" },
    ],
  },
  {
    slug: "elevage",
    title: "Élevage et revenus",
    kicker: "Diversification",
    summary:
      "Petits élevages, trésorerie familiale et accompagnement sanitaire de base.",
    description:
      "Les familles développent des sources de revenus complémentaires grâce à des cycles d'élevage réalistes, une gestion simple et des visites de suivi.",
    impact: "1 750 ménages ont lancé ou consolidé une activité d'élevage.",
    image:
      "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=1400",
    stats: [
      { label: "Ménages suivis", value: "1 750" },
      { label: "Cycles financés", value: "2 460" },
    ],
  },
  {
    slug: "sante",
    title: "Mutuelle santé",
    kicker: "Protection",
    summary:
      "Une réponse communautaire pour réduire les ruptures liées aux dépenses médicales.",
    description:
      "VAHATRA aide les familles vulnérables à anticiper les coûts de santé et à mieux accéder aux soins par des mécanismes mutualisés et de l'information terrain.",
    impact: "9 100 personnes couvertes par des dispositifs de solidarité santé.",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1400",
    stats: [
      { label: "Personnes couvertes", value: "9 100" },
      { label: "Centres relais", value: "18" },
    ],
  },
  {
    slug: "social",
    title: "Accompagnement social",
    kicker: "Proximité humaine",
    summary:
      "Conseil familial, visites terrain et orientation vers les services essentiels.",
    description:
      "Au-delà du crédit, l'ONG travaille avec les ménages sur la stabilité, l'éducation financière, la santé, la scolarisation et la protection sociale.",
    impact: "5 600 visites sociales réalisées chaque année par les équipes locales.",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=1400",
    stats: [
      { label: "Visites annuelles", value: "5 600" },
      { label: "Conseillers", value: "34" },
    ],
  },
  {
    slug: "inclusion-financiere",
    title: "Inclusion financière",
    kicker: "Autonomie",
    summary:
      "Épargne, éducation financière et outils de gestion adaptés au quotidien rural.",
    description:
      "Les bénéficiaires renforcent leur capacité de décision grâce à des formations pratiques, des carnets simplifiés et des objectifs financiers graduels.",
    impact: "71% des membres actifs déclarent une meilleure maîtrise de leur budget.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1400",
    stats: [
      { label: "Membres formés", value: "14 800" },
      { label: "Budget maîtrisé", value: "71%" },
    ],
  },
];

export const partners = [
  "Collectivités du Vakinankaratra",
  "Coopératives paysannes locales",
  "Réseaux de microfinance sociale",
  "Centres de santé partenaires",
  "Institutions de solidarité internationale",
  "Associations communautaires rurales",
];

export const testimonials = [
  {
    quote:
      "Le crédit nous a aidés à planter au bon moment. Le suivi de l'équipe a surtout changé notre manière de prévoir les dépenses.",
    name: "Lalao R.",
    role: "Productrice accompagnée, Vakinankaratra",
  },
  {
    quote:
      "VAHATRA apporte une présence rare: des chiffres sérieux, mais aussi une compréhension réelle des familles rurales.",
    name: "Jean-Marc A.",
    role: "Partenaire institutionnel",
  },
  {
    quote:
      "La mutuelle santé nous évite de vendre une partie de la récolte quand un enfant tombe malade.",
    name: "Fanja N.",
    role: "Membre d'un groupe solidaire",
  },
];

export const values = [
  {
    title: "Dignité",
    description:
      "Chaque famille est considérée comme actrice de son avenir, pas comme simple bénéficiaire.",
  },
  {
    title: "Responsabilité",
    description:
      "Le financement est lié à l'accompagnement, au réalisme économique et à la protection sociale.",
  },
  {
    title: "Proximité",
    description:
      "Les équipes travaillent au plus près des communes, des groupes solidaires et des producteurs.",
  },
  {
    title: "Transparence",
    description:
      "Les résultats sont suivis, documentés et traduits en décisions opérationnelles.",
  },
];

export const timeline = [
  {
    year: "2002",
    title: "Naissance d'une initiative locale",
    description:
      "Une première équipe se mobilise à Antsirabe autour de l'accès au crédit pour les familles vulnérables.",
  },
  {
    year: "2008",
    title: "Déploiement rural",
    description:
      "Les activités se structurent dans les communes rurales avec un modèle de suivi social régulier.",
  },
  {
    year: "2016",
    title: "Approche intégrée",
    description:
      "Microfinance, agriculture, santé et accompagnement familial sont réunis dans un parcours unique.",
  },
  {
    year: "2026",
    title: "Nouvelle présence institutionnelle",
    description:
      "VAHATRA modernise sa communication pour renforcer les partenariats et la lisibilité de son impact.",
  },
];

export const team = [
  {
    name: "Hery Ramanantsoa",
    role: "Direction exécutive",
    bio: "Coordination stratégique, partenariats et pilotage institutionnel.",
  },
  {
    name: "Miora Andriamialy",
    role: "Programmes terrain",
    bio: "Suivi des conseillers, qualité opérationnelle et relation avec les communes.",
  },
  {
    name: "Tojo Rakotomalala",
    role: "Finance sociale",
    bio: "Portefeuille solidaire, contrôle interne et amélioration des outils de crédit.",
  },
  {
    name: "Fanja Razafindrakoto",
    role: "Impact et apprentissage",
    bio: "Mesure des résultats, capitalisation et redevabilité auprès des partenaires.",
  },
];
