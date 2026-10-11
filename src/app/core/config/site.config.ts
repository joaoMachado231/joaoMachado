export const siteConfig = {
    siteName: 'João Pedro | Desenvolvedor de Software',
    author: 'João Pedro',
    title: 'João Pedro | Desenvolvedor de Software',
    description:
        'Portfólio pessoal e profissional de João Pedro, desenvolvedor de software com foco em Angular, TypeScript, backend e experiência do usuário.',
    url: 'https://joaopedro.dev',
    locale: 'pt-BR',
    contact: {
        email: '',
    },
    cvPath: '/documents/curriculo.pdf',
    navigation: [
        { label: 'Início', href: '#inicio' },
        { label: 'Sobre', href: '#sobre' },
        { label: 'Experiência', href: '#experiencia' },
        { label: 'Tecnologias', href: '#technologies' },
        { label: 'Contato', href: '#contato' },
    ],
    socialLinks: [
        { label: 'GitHub', href: 'https://github.com/joaoMachado231', icon: 'github', external: true },
        { label: 'LinkedIn', href: 'https://linkedin.com/in/joão-pedro-bruno-machado-2bb9051bb', icon: 'linkedin', external: true },
    ],
} as const;
