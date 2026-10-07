export const siteConfig = {
    siteName: 'João Pedro | Desenvolvedor de Software',
    author: 'João Pedro',
    title: 'João Pedro | Desenvolvedor de Software',
    description:
        'Portfólio pessoal e profissional de João Pedro, desenvolvedor de software com foco em Angular, TypeScript, backend e experiência do usuário.',
    url: 'https://joaopedro.dev',
    locale: 'pt-BR',
    navigation: [
        { label: 'Início', href: '#top' },
        { label: 'Sobre', href: '#sobre' },
        { label: 'Experiência', href: '#experiencia' },
        { label: 'Projetos', href: '#projetos' },
        { label: 'Skills', href: '#skills' },
        { label: 'Contato', href: '#contato' },
    ],
    socialLinks: [
        { label: 'GitHub', href: 'https://github.com/joaopedro', icon: 'github', external: true },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/joaopedro', icon: 'linkedin', external: true },
        { label: 'Instagram', href: 'https://www.instagram.com/joaopedro', icon: 'instagram', external: true },
        { label: 'E-mail', href: 'mailto:contato@joaopedro.dev', icon: 'mail', external: false },
    ],
} as const;
