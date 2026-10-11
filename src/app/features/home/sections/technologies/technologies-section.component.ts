import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeadingComponent } from '../../../../shared/components/section-heading/section-heading.component';

interface Tool {
    id: number;
    name: string;
    techs?: string[];
}

@Component({
    selector: 'app-technologies-section',
    standalone: true,
    imports: [CommonModule, SectionHeadingComponent],
    templateUrl: './technologies-section.component.html',
    styleUrl: './technologies-section.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechnologiesSectionComponent {
    private activeSessionId: number | null = null;

    public readonly myTools: Tool[] = [
        {
            id: 1, name: 'Frontend', techs: [
                'Angular',
                'TypeScript',
                'JavaScript',
                'HTML',
                'CSS',
                'Sass',
                'Angular Material',
                'Componentização',
                'Design Systems',
                'Responsividade',
                'Acessibilidade',
                'SEO Técnico',
                'Performance Web',
                'Testes de Componentes',
                'Reutilização de Componentes',
            ]
        },
        {
            id: 2, name: 'Backend', techs: [
                'Java',
                'Spring Boot',
                'Node.js',
                'NestJS',
                'Express',
                'JUnit',
                'Mockito',
                'Clean Architecture',
                'Hexagonal Architecture',
                'Arquitetura em Camadas',
                'REST APIs',
                'Autenticação e Autorização',
                'OAuth 2.0',
                'JWT',
                'Testes de Serviços',
            ]
        },
        {
            id: 3, name: 'Ferramentas', techs: [
                'Git',
                'GitHub',
                'Prisma',
                'TypeORM',
                'Lucid ORM',
                'ESLint',
                'Prettier',
                'VSCode',
                'DBeaver',
                'Postman',
                'Insomnia',
                'IntelliJ IDEA',
            ]
        },
        {
            id: 4, name: 'Conceitos', techs: [
                'SOLID',
                'Design Patterns',
                'Separation of Concerns',
                'Clean Code',
                'Code Review',
                'Git Flow',
                'Versionamento de Código',
                'Refatoração',
                'Manutenibilidade',
                'Testes Unitários',
                'Mocking',
                'SCRUM',
                'Kanban',
            ]
        },
    ];

    public expandSession(sessionId: number): void {
        this.activeSessionId = this.activeSessionId === sessionId ? null : sessionId;
    }

    public isSessionOpened(sessionId: number): boolean {
        return this.activeSessionId === sessionId;
    }
}
