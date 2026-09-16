export const additionalProjects = [
  {
    id: 1,
    name: 'PassportSeva — Passport Application System',
    description: 'A redesigned passport application experience with multi-step onboarding, document uploads, and appointment booking — built as a UX/development assignment for Anshumat Foundation.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'SQLite', 'JWT'],
    features: [
      'User registration & login with JWT',
      '3-step onboarding for first-time users',
      'Multi-step application form with autosave',
      'Document upload (ID, photo, address proof)',
      'Appointment booking with confirmation receipt',
      'Dashboard with application status tracking',
    ],
    github: 'https://github.com/VartikaTiwari17/passport-app',
    live: '',
  },
  {
    id: 2,
    name: '3D Asset Portfolio',
    description: 'A full-stack app for browsing, searching, and viewing interactive 3D assets — with a clean separation between a NestJS/PostgreSQL data layer and a React Three Fiber rendering layer.',
    tech: ['Next.js', 'TypeScript', 'NestJS', 'PostgreSQL', 'React Three Fiber', 'Docker'],
    features: [
      'Interactive 3D model viewer with orbit controls',
      'Search & category filtering',
      'Full CRUD REST API for assets',
      'Dockerized full-stack setup',
    ],
    github: 'https://github.com/VartikaTiwari17/3d-portfolio-app',
    live: 'https://3d-portfolio-app-psi.vercel.app',
  },
];